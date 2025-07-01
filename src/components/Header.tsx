import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Helper para saber si la ruta está activa
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-[#141d2f] text-white shadow-md" style={{ padding: '23px 0px' }}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8" aria-label="Global">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <span className="sr-only">CRS Informática</span>
            {/* <img className="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="Logo" /> */}
            <span className="font-bold text-white text-lg hidden md:inline">CRS Informática</span>
          </Link>
        </div>
        {/* Menú hamburguesa móvil */}
        <div className="flex lg:hidden">
          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="sr-only">Abrir menú principal</span>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {/* Menú desktop */}
        <div className="hidden lg:flex lg:gap-x-10">
          <Link to="/" className={`text-[1.2rem] font-semibold leading-6 transition-colors ${isActive('/') ? 'text-[#2563eb]' : 'text-white hover:text-[#2563eb]'}`}>Inicio</Link>
          <Link to="/servicios" className={`text-[1.2rem] font-semibold leading-6 transition-colors ${isActive('/servicios') ? 'text-[#2563eb]' : 'text-white hover:text-[#2563eb]'}`}>Servicios</Link>
          <Link to="/cursos" className={`text-[1.2rem] font-semibold leading-6 transition-colors ${isActive('/cursos') ? 'text-[#2563eb]' : 'text-white hover:text-[#2563eb]'}`}>Cursos</Link>
          <Link to="/recursos" className={`text-[1.2rem] font-semibold leading-6 transition-colors ${isActive('/recursos') ? 'text-[#2563eb]' : 'text-white hover:text-[#2563eb]'}`}>Recursos</Link>
          <Link to="/libros" className={`text-[1.2rem] font-semibold leading-6 transition-colors ${isActive('/libros') ? 'text-[#2563eb]' : 'text-white hover:text-[#2563eb]'}`}>Libros</Link>
          <Link to="/contacto" className={`text-[1.2rem] font-semibold leading-6 transition-colors ${isActive('/contacto') ? 'text-[#2563eb]' : 'text-white hover:text-[#2563eb]'}`}>Contacto</Link>
        </div>
        {/* Login/espacio a la derecha (opcional) */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
      </nav>
      {/* Menú móvil */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/40" onClick={() => setMenuOpen(false)}></div>
      )}
      <div className={`lg:hidden fixed top-0 right-0 z-50 w-72 max-w-full h-full bg-[#141d2f] text-white shadow-lg transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{ pointerEvents: menuOpen ? 'auto' : 'none' }}>
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2" onClick={() => setMenuOpen(false)}>
            <span className="font-bold text-white text-lg">CRS Informática</span>
          </Link>
          <button type="button" className="-m-2.5 rounded-md p-2.5 text-white" onClick={() => setMenuOpen(false)}>
            <span className="sr-only">Cerrar menú</span>
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-4 flex flex-col gap-2">
          <Link to="/" className={`block rounded-lg px-3 py-2 text-[1.2rem] font-semibold transition-colors ${isActive('/') ? 'text-[#2563eb]' : 'text-white hover:text-[#2563eb]'}`} onClick={() => setMenuOpen(false)}>Inicio</Link>
          <Link to="/servicios" className={`block rounded-lg px-3 py-2 text-[1.2rem] font-semibold transition-colors ${isActive('/servicios') ? 'text-[#2563eb]' : 'text-white hover:text-[#2563eb]'}`} onClick={() => setMenuOpen(false)}>Servicios</Link>
          <Link to="/cursos" className={`block rounded-lg px-3 py-2 text-[1.2rem] font-semibold transition-colors ${isActive('/cursos') ? 'text-[#2563eb]' : 'text-white hover:text-[#2563eb]'}`} onClick={() => setMenuOpen(false)}>Cursos</Link>
          <Link to="/recursos" className={`block rounded-lg px-3 py-2 text-[1.2rem] font-semibold transition-colors ${isActive('/recursos') ? 'text-[#2563eb]' : 'text-white hover:text-[#2563eb]'}`} onClick={() => setMenuOpen(false)}>Recursos</Link>
          <Link to="/libros" className={`block rounded-lg px-3 py-2 text-[1.2rem] font-semibold transition-colors ${isActive('/libros') ? 'text-[#2563eb]' : 'text-white hover:text-[#2563eb]'}`} onClick={() => setMenuOpen(false)}>Libros</Link>
          <Link to="/contacto" className="block rounded-lg px-3 py-2 text-[1.2rem] font-semibold text-white hover:text-[#2563eb]" onClick={() => setMenuOpen(false)}>Contacto</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
