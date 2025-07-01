import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import Cursos from './pages/Cursos';
import ReparacionPC from './pages/ReparacionPC';
import Recursos from './pages/Recursos';
import Libros from './pages/Libros';
import Contacto from './pages/Contacto';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/reparacion" element={<ReparacionPC />} />
            <Route path="/recursos" element={<Recursos />} />
            <Route path="/libros" element={<Libros />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
