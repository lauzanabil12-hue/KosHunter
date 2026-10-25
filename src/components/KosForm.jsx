import { useState } from 'react';

export default function KosForm({ onTambahKos }) {
  const [nama, setNama] = useState('');
  const [jenis, setJenis] = useState('Putri');
  const [harga, setHarga] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nama.trim() || !harga) return;

    onTambahKos({
      id: Date.now(),
      nama: nama.trim(),
      jenis,
      harga: parseInt(harga),
    });

    setNama('');
    setJenis('Putri');
    setHarga('');
  };

  return (
    <div className="card border-0 shadow-sm p-3 mb-4">
      <h5 className="fw-bold text-secondary mb-3">Tambah Data Kos Baru</h5>
      <form onSubmit={handleSubmit} className="row g-2">
        <div className="col-md-5">
          <input
            type="text"
            className="form-control"
            placeholder="Nama Kos (contoh: Kos Mawar Sukabirus)"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required
          />
        </div>
        <div className="col-md-3">
          <select
            className="form-select"
            value={jenis}
            onChange={(e) => setJenis(e.target.value)}
          >
            <option value="Putri">Khusus Putri</option>
            <option value="Putra">Khusus Putra</option>
            <option value="Campur">Campur</option>
          </select>
        </div>
        <div className="col-md-2">
          <input
            type="number"
            className="form-control"
            placeholder="Harga/Bulan"
            value={harga}
            onChange={(e) => setHarga(e.target.value)}
            required
          />
        </div>
        <div className="col-md-2">
          <button type="submit" className="btn btn-success w-100 fw-bold">
            + Tambah
          </button>
        </div>
      </form>
    </div>
  );
}