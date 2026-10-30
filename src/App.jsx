import { useState } from 'react';
import Navbar from './components/Navbar';
import SummaryCard from './components/SummaryCard';
import KosForm from './components/KosForm';
import KosList from './components/KosList';
import TestimonialList from './components/TestimonialList';

export default function App() {
  const [dataKos, setDataKos] = useState([
    { id: 1, nama: 'Kos Mawar Sukabirus', jenis: 'Putri', harga: 850000 },
    { id: 2, nama: 'Kos Garuda Sukapura', jenis: 'Putra', harga: 1000000 },
  ]);

  const handleTambahKos = (kosBaru) => {
    setDataKos([...dataKos, kosBaru]);
  };

  const handleHapusKos = (id) => {
    setDataKos(dataKos.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-light min-vh-100 d-flex flex-column">
      <Navbar />
      <div className="container mb-5 flex-grow-1">
        <SummaryCard totalKos={dataKos.length} />
        
        {/* Komponen BAB 7 AJAX */}
        <TestimonialList />

        <KosForm onTambahKos={handleTambahKos} />
        <KosList dataKos={dataKos} onHapusKos={handleHapusKos} />
      </div>
      <footer className="text-center py-3 text-muted border-top bg-white mt-auto">
        <small>&copy; 2026 KosHunter - Aplikasi KosHunter </small>
      </footer>
    </div>
  );
}