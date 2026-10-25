export default function SummaryCard({ totalKos }) {
  return (
    <div className="card border-0 shadow-sm mb-4 bg-white">
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <h5 className="card-title fw-bold text-primary mb-1">Ringkasan Data Kos</h5>
          <p className="card-text text-muted mb-0">Total unit kos yang saat ini terdaftar di sistem.</p>
        </div>
        <div className="text-end">
          <span className="display-6 fw-bold text-primary">{totalKos}</span>
          <span className="d-block text-muted small">Unit Kos</span>
        </div>
      </div>
    </div>
  );
}