// 1. Array of Object (Data Dummy Kos)
let dataKos = [
    { id: 1, nama: "Kos Mawar Sukabirus", jenis: "Putri", harga: 850000, foto: "https://via.placeholder.com/80" },
    { id: 2, nama: "Kos Garuda Sukapura", jenis: "Putra", harga: 1000000, foto: "https://via.placeholder.com/80" }
];

// 2. Function untuk me-render data ke tabel HTML & menghitung total data
function renderTabelKos() {
    let tbody = $('#tabel-kos-body');
    tbody.empty(); // Bersihkan isi tabel sebelum di-render ulang

    // Perulangan (forEach) untuk menampilkan data secara dinamis
    dataKos.forEach((item, index) => {
        let badgeColor = item.jenis === "Putri" ? "bg-danger" : (item.jenis === "Putra" ? "bg-primary" : "bg-warning");
        
        let row = `
            <tr>
                <td>${index + 1}</td>
                <td><img src="${item.foto}" alt="${item.nama}" class="img-thumbnail" width="80"></td>
                <td class="fw-semibold">${item.nama}</td>
                <td><span class="badge ${badgeColor}">${item.jenis}</span></td>
                <td>Rp ${Number(item.harga).toLocaleString('id-ID')}</td>
                <td>
                    <a href="detail.html" class="btn btn-sm btn-outline-primary me-1">Detail</a>
                    <button class="btn btn-sm btn-outline-danger btn-hapus" data-id="${item.id}">Hapus</button>
                </td>
            </tr>
        `;
        tbody.append(row);
    });

    // Menghitung jumlah data (Function & Manipulasi DOM)
    $('#total-kos').text(dataKos.length);
}

// 3. Event Handling & jQuery saat dokumen siap
$(document).ready(function () {
    // Render tabel pertama kali saat halaman dibuka
    renderTabelKos();

    // jQuery Effect: Toggle Form Tambah Kos (slideToggle)
    $('#btn-toggle-form').on('click', function () {
        $('#section-form-tambah').slideToggle(300);
    });

    // Event Handling: Tambah Data Dummy dari Form
    $('#form-tambah-kos').on('submit', function (e) {
        e.preventDefault(); // Mencegah reload halaman

        let namaInput = $('#input-nama').val().trim();
        let jenisInput = $('#input-jenis').val();
        let hargaInput = $('#input-harga').val();

        // Validasi Sederhana
        if (namaInput === '' || hargaInput === '') {
            alert('Harap isi semua field!');
            return;
        }

        // Tambah objek baru ke array
        let dataBaru = {
            id: Date.now(),
            nama: namaInput,
            jenis: jenisInput,
            harga: parseInt(hargaInput),
            foto: "https://via.placeholder.com/80"
        };

        dataKos.push(dataBaru);
        renderTabelKos(); // Re-render tabel

        // Reset form & beri efek fadeOut pada notifikasi
        $('#form-tambah-kos')[0].reset();
        $('#notif-sukses').fadeIn().delay(2000).fadeOut();
    });

    // Event Handling (Delegasi): Hapus Data Kos
    $('#tabel-kos-body').on('click', '.btn-hapus', function () {
        let idHapus = $(this).data('id');
        
        // Filter array untuk menghapus data
        dataKos = dataKos.filter(item => item.id !== idHapus);
        
        // Render ulang tabel
        renderTabelKos();
    });
});