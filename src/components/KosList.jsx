import KosItem from './KosItem';

export default function KosList({ dataKos, onHapusKos }) {
  return (
    <div className="card border-0 shadow-sm p-3">
      <h5 className="fw-bold text-secondary mb-3">Daftar Kos Terdaftar</h5>

      {/* Conditional Rendering apabila data kosong */}
      {dataKos.length === 0 ? (
        <div className="alert alert-warning text-center my-3" role="alert">
          Belum ada data kos terdaftar. Silakan tambahkan kos baru melalui form di atas.
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-primary">
              <tr>
                <th>No</th>
                <th>Nama Kos</th>
                <th>Jenis Kos</th>
                <th>Harga / Bulan</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {dataKos.map((item, index) => (
                <KosItem
                  key={item.id}
                  item={item}
                  index={index}
                  onHapusKos={onHapusKos}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}