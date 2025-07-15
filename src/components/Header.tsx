import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Helper para saber si la ruta está activa
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white text-[#22292f] shadow-md border-b border-[#e5e7eb]" style={{ padding: '23px 0px' }}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8" aria-label="Global">
        {/* Logo desktop y texto mobile */}
        <div className="flex items-center lg:flex-1">
          {/* Solo visible en md+ (desktop) */}
          <Link to="/" state={{fromMenu: true}} className="-m-1.5 p-1.5 items-center gap-2 hidden md:flex">
            <span className="sr-only">CRS Informática</span>
            <span className="font-bold text-gray-900 text-lg">CRS Informática</span>
          </Link>
          {/* Solo visible en mobile */}
         {/*  <span className="font-bold text-gray-900 text-lg md:hidden">CRS</span> */}
        </div>
        {/* Menú hamburguesa móvil */}
        <div className="flex lg:hidden">
          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="sr-only">Abrir menú principal</span>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {/* Menú desktop */}
        <div className="hidden lg:flex lg:gap-x-10">
          <Link to="/" state={{fromMenu: true}} className={`text-[1.2rem] font-semibold leading-6 transition-colors ${isActive('/') ? 'text-[#2563eb]' : 'text-[#22292f] hover:text-[#2563eb]'}`}>Inicio</Link>
          <Link to="/servicios" state={{fromMenu: true}} className={`text-[1.2rem] font-semibold leading-6 transition-colors ${isActive('/servicios') ? 'text-black' : 'text-gray-700 hover:text-black'}`}>Servicios</Link>
          <Link to="/cursos" state={{fromMenu: true}} className={`text-[1.2rem] font-semibold leading-6 transition-colors ${isActive('/cursos') ? 'text-black' : 'text-gray-700 hover:text-black'}`}>Cursos</Link>
          <Link to="/recursos" state={{fromMenu: true}} className={`text-[1.2rem] font-semibold leading-6 transition-colors ${isActive('/recursos') ? 'text-black' : 'text-gray-700 hover:text-black'}`}>Recursos</Link>
          <Link to="/libros" state={{fromMenu: true}} className={`text-[1.2rem] font-semibold leading-6 transition-colors ${isActive('/libros') ? 'text-black' : 'text-gray-700 hover:text-black'}`}>Libros</Link>
          <Link to="/contacto" state={{fromMenu: true}} className={`text-[1.2rem] font-semibold leading-6 transition-colors ${isActive('/contacto') ? 'text-black' : 'text-gray-700 hover:text-black'}`}>Contacto</Link>
        </div>
        {/* Login/espacio a la derecha (opcional) */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
      </nav>
      {/* Menú móvil */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/40" onClick={() => setMenuOpen(false)}></div>
      )}
      <div className={`lg:hidden fixed top-0 right-0 z-50 w-72 max-w-full h-full bg-white text-gray-900 shadow-lg transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{ pointerEvents: menuOpen ? 'auto' : 'none' }}>
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <Link to="/" state={{fromMenu: true}} className="-m-1.5 p-1.5 flex items-center gap-2" onClick={() => setMenuOpen(false)}>
            <span className="font-bold text-gray-900 text-lg">CRS Informática</span>
          </Link>
          <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setMenuOpen(false)}>
            <span className="sr-only">Cerrar menú</span>
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-4 flex flex-col gap-2">
          <Link to="/" state={{fromMenu: true}} className={`block rounded-lg px-3 py-2 text-[1.2rem] font-semibold transition-colors ${isActive('/') ? 'text-[#2563eb] bg-gray-100' : 'text-[#22292f] hover:text-[#2563eb] hover:bg-gray-50'}`} onClick={() => setMenuOpen(false)}>Inicio</Link>
          <Link to="/servicios" state={{fromMenu: true}} className={`block rounded-lg px-3 py-2 text-[1.2rem] font-semibold transition-colors ${isActive('/servicios') ? 'text-black bg-gray-100' : 'text-gray-700 hover:text-black hover:bg-gray-50'}`} onClick={() => setMenuOpen(false)}>Servicios</Link>
          <Link to="/cursos" state={{fromMenu: true}} className={`block rounded-lg px-3 py-2 text-[1.2rem] font-semibold transition-colors ${isActive('/cursos') ? 'text-black bg-gray-100' : 'text-gray-700 hover:text-black hover:bg-gray-50'}`} onClick={() => setMenuOpen(false)}>Cursos</Link>
          <Link to="/recursos" state={{fromMenu: true}} className={`block rounded-lg px-3 py-2 text-[1.2rem] font-semibold transition-colors ${isActive('/recursos') ? 'text-black bg-gray-100' : 'text-gray-700 hover:text-black hover:bg-gray-50'}`} onClick={() => setMenuOpen(false)}>Recursos</Link>
          <Link to="/libros" state={{fromMenu: true}} className={`block rounded-lg px-3 py-2 text-[1.2rem] font-semibold transition-colors ${isActive('/libros') ? 'text-black bg-gray-100' : 'text-gray-700 hover:text-black hover:bg-gray-50'}`} onClick={() => setMenuOpen(false)}>Libros</Link>
          <Link to="/contacto" state={{fromMenu: true}} className="block rounded-lg px-3 py-2 text-[1.2rem] font-semibold text-gray-700 hover:text-black hover:bg-gray-50" onClick={() => setMenuOpen(false)}>Contacto</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
