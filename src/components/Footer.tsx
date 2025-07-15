import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-[#6b7280] border-t border-[#e5e7eb] pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-[#e5e7eb] pb-8">
          {/* Columna 1 */}
          <div>
            <h2 className="text-lg font-bold mb-2 text-[#22292f]">CRS INFORMATICA</h2>
            <p className="text-sm mb-1">Mar del Plata, Argentina</p>
            <a href="http://www.crsinformatica.com.ar" target="_blank" rel="noopener noreferrer" className="hover:underline text-sm">Diseño y mantenimiento</a>
          </div>
          {/* Columna 2 */}
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold mb-2 text-[#22292f]">{new Date().getFullYear()}</span>
            <span className="text-sm">Sitio desarrollado para prácticas educativas.</span>
          </div>
        </div>
        <div className="mt-6 text-center text-xs text-[#6b7280]">
          &copy; {new Date().getFullYear()} CRS INFORMATICA. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 