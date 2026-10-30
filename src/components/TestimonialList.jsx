import React, { useState, useEffect } from 'react';

const TestimonialList = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchReviews = async () => {
    setLoading(true);
    setError(null);
    try {
     
      await new Promise((resolve) => setTimeout(resolve, 4000));

     const response = await fetch('https://jsonplaceholder.typicode.com/comments_SALAH');
      
      if (!response.ok) {
        throw new Error('Gagal mengambil data dari server');
      }
      const data = await response.json();
      setReviews(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div className="card shadow-sm p-4 mb-4">
      <h5 className="fw-bold mb-3">💬 Ulasan Penghuni Kos</h5>

      {loading && (
        <div className="alert alert-info text-center py-3" role="alert">
          <div className="spinner-border spinner-border-sm me-2" role="status"></div>
          Memuat ulasan penghuni...
        </div>
      )}

      {error && (
        <div className="alert alert-danger d-flex justify-content-between align-items-center" role="alert">
          <span>⚠️ {error}</span>
          <button className="btn btn-sm btn-outline-danger" onClick={fetchReviews}>
            Coba Lagi
          </button>
        </div>
      )}

      {!loading && !error && (
        <div className="row g-3">
          {reviews.map((item, index) => {
            const customReviews = [
              { nama: "Rizky Ramadhan", email: "rizkyramadhan@gmail.com", ulasan: "Kamar bersih, WiFi kencang, dekat banget sama kampus Telkom." },
              { nama: "Erleazar Aryaguna", email: "erleazar12aryaguna@gmail.com", ulasan: "Ibu kosnya ramah banget, fasilitas lengkap dan lingkungan aman." },
              { nama: "Maman Suherman", email: "mamansuherman@gmail.com", ulasan: "Harga terjangkau untuk mahasiswa, kamar mandi dalam bersih." },
              { nama: "Putri Hutomo", email: "putrihutomo@gmail.com", ulasan: "Lokasi strategis di Sukabirus, cari makan malam gampang banget." }
            ];

            const reviewData = customReviews[index % customReviews.length];

            return (
              <div className="col-md-6" key={item.id}>
                <div className="border rounded p-3 h-100 bg-light">
                  <h6 className="fw-bold mb-1 text-primary">{reviewData.nama}</h6>
                  <small className="text-muted d-block mb-2">{reviewData.email}</small>
                  <p className="mb-0 small text-secondary">"{reviewData.ulasan}"</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TestimonialList;