export default function KosItem({ item, index, onHapusKos }) {
  const badgeColor =
    item.jenis === 'Putri'
      ? 'bg-danger'
      : item.jenis === 'Putra'
      ? 'bg-primary'
      : 'bg-warning text-dark';

  return (
    <tr>
      <td>{index + 1}</td>
      <td className="fw-semibold">{item.nama}</td>
      <td>
        <span className={`badge ${badgeColor}`}>{item.jenis}</span>
      </td>
      <td>Rp {item.harga.toLocaleString('id-ID')}</td>
      <td>
        <button
          className="btn btn-sm btn-outline-danger"
          onClick={() => onHapusKos(item.id)}
        >
          Hapus
        </button>
      </td>
    </tr>
  );
}