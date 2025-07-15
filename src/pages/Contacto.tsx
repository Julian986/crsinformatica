import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Contacto: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <main className="min-h-screen bg-[#f8f9fa]">
      {/* Header Integrado */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-4 md:py-6 relative min-h-[48px] flex items-center">
          {(!location.state || !location.state.fromMenu) && (
            <button
              onClick={() => navigate(-1)}
              className="absolute left-0 pl-4 md:pl-8 flex items-center gap-2 text-gray-900 hover:text-black transition-colors text-lg font-semibold focus:outline-none"
              aria-label="Volver"
              style={{ minWidth: '56px' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 md:w-8 md:h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
              <span className="hidden md:inline">Volver</span>
            </button>
          )}
          <h1 className="text-2xl md:text-3xl font-bold text-[#22292f] mx-auto text-center">
            Contacto
          </h1>
        </div>
      </div>
      
      {/* Contenido Principal */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-6 md:py-8">
        <div className="bg-white shadow-sm rounded-xl p-8 border border-[#e5e7eb]">
          <div className="space-y-6">
            {/* INFORMACIÓN IMPORTANTE */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h2 className="text-xl font-bold text-red-800 mb-3">⚠️ INFORMACIÓN IMPORTANTE</h2>
              <p className="text-red-700 font-semibold text-lg">NO SE REALIZAN VISITAS DOMICILIARIAS NI SERVICIO TÉCNICO A DOMICILIO</p>
            </div>

            {/* PROCEDIMIENTO */}
            <div>
              <h2 className="text-2xl font-bold text-[#22292f] mb-4">Procedimiento de Reparación</h2>
              <div className="space-y-4 text-gray-700">
                <p className="font-semibold">Los clientes deberán coordinar una visita previamente por teléfono identificable (no se atienden números privados), pactando día y horario para la recepción del equipo a reparar.</p>
                <p className="font-semibold">No atendemos sin previo llamado telefónico coordinando día y horario.</p>
                <p>Cualquier consulta no dude en contactarnos, estamos a su servicio.</p>
              </div>
            </div>

            {/* MÉTODOS DE PAGO */}
            <div>
              <h2 className="text-2xl font-bold text-[#22292f] mb-4">Métodos de Pago</h2>
              <p className="text-gray-700 mb-4">Aceptamos todas las tarjetas de débito y crédito.</p>
              <div className="flex justify-center">
                <img src="http://crsinformatica.com.ar/images/mercado-pago-3.jpg" alt="Mercado Pago" className="w-full max-w-md rounded shadow" />
              </div>
            </div>

            {/* INFORMACIÓN DE CONTACTO */}
            <div>
              <h2 className="text-2xl font-bold text-[#22292f] mb-4">Información de Contacto</h2>
              <div className="space-y-4">
                {/* WhatsApp */}
                <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-8 h-8" />
                  <div>
                    <p className="font-bold text-green-800">WhatsApp</p>
                    <p className="text-lg font-semibold text-green-700">0223-6680513</p>
                  </div>
                </div>

                {/* Sitio Web */}
                <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 105.656 5.656l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5a2 2 0 112.828 2.828l-1.5 1.5a4 4 0 11-5.656-5.656l3-3a2 2 0 012.828 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-bold text-blue-800">Sitio Web</p>
                    <p className="text-lg font-semibold text-blue-700">www.crsinformatica.com.ar</p>
                  </div>
                </div>
              </div>
            </div>

            {/* HORARIOS */}
            <div>
              <h2 className="text-2xl font-bold text-[#22292f] mb-4">Horarios de Atención</h2>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700 font-semibold">Lunes a Viernes: 9:00 - 18:00</p>
                <p className="text-gray-700 font-semibold">Sábados: 9:00 - 13:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contacto; 