let dataKos = [
    { id: 1, nama: "Kos Mawar Sukabirus", jenis: "Putri", harga: 850000, foto: "https://via.placeholder.com/80" },
    { id: 2, nama: "Kos Garuda Sukapura", jenis: "Putra", harga: 1000000, foto: "https://via.placeholder.com/80" }
];

function renderTabelKos() {
    let tbody = $('#tabel-kos-body');
    tbody.empty(); 

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

    $('#total-kos').text(dataKos.length);
}


$(document).ready(function () {
    renderTabelKos();

    $('#btn-toggle-form').on('click', function () {
        $('#section-form-tambah').slideToggle(300);
    });

    $('#form-tambah-kos').on('submit', function (e) {
        e.preventDefault(); // Mencegah reload halaman

        let namaInput = $('#input-nama').val().trim();
        let jenisInput = $('#input-jenis').val();
        let hargaInput = $('#input-harga').val();

        if (namaInput === '' || hargaInput === '') {
            alert('Harap isi semua field!');
            return;
        }

        let dataBaru = {
            id: Date.now(),
            nama: namaInput,
            jenis: jenisInput,
            harga: parseInt(hargaInput),
            foto: "https://via.placeholder.com/80"
        };

        dataKos.push(dataBaru);
        renderTabelKos(); // Re-render tabel

        $('#form-tambah-kos')[0].reset();
        $('#notif-sukses').fadeIn().delay(2000).fadeOut();
    });

    $('#tabel-kos-body').on('click', '.btn-hapus', function () {
        let idHapus = $(this).data('id');
        

        dataKos = dataKos.filter(item => item.id !== idHapus);
        
        renderTabelKos();
    });
});