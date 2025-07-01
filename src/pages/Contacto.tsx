import React from 'react';

const servicios = [
  'Reinstalación de sistemas operativos',
  'Instalación de Windows y Office',
  'Eliminación de virus e instalación de antivirus',
  'Backup y configuración de correos electrónicos',
  'Compartir archivos y carpetas por internet',
  'Servicio técnico integral de PC, notebook y laptop',
  'Búsqueda, instalación y configuración de drivers',
  'Migraciones de datos y backup',
  'Planeamiento, ejecución y configuración de redes informáticas para empresas o comercios',
  'Instalación de cámaras de seguridad',
  'Abonos y mantenimiento para empresas',
  'Insumos y venta de hardware en general',
  'Hosting de sitios web',
  'Instalación y configuración de servidores Windows',
];

const cursos = [
  {
    nombre: 'CURSO DE ACTUALIZACIÓN, ARMADO Y REPARACIÓN DE PC',
    url: 'https://mdp.utn.edu.ar/curso/reparacion-de-pc/',
  },
  {
    nombre: 'CURSO DE ADMINISTRADOR DE REDES Y SEGURIDAD INFORMATICA',
    url: 'https://mdp.utn.edu.ar/curso/administrador-de-redes-y-seguridad-informatica/',
  },
];

const Contacto: React.FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0a0f1c] py-8 px-4 md:px-8 text-white">
      <section className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Sidebar */}
        <aside className="md:col-span-1 space-y-8">
          <article className="bg-white/5 backdrop-blur-sm rounded-xl shadow p-6">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2 text-left">Servicios</h3>
            <ul className="space-y-2 text-white text-base text-left">
              {servicios.map((servicio, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#2563eb]">•</span>
                  <span>{servicio}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="bg-white/5 backdrop-blur-sm rounded-xl shadow p-6">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2 text-left">CURSOS UTN</h3>
            <ul className="space-y-4 text-left">
              {cursos.map((curso, i) => (
                <li key={i} className="">
                  <a
                    href={curso.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#2563eb] hover:underline"
                  >
                    {curso.nombre}
                  </a>
                </li>
              ))}
            </ul>
          </article>
        </aside>
        {/* Main Content */}
        <section className="md:col-span-2 bg-white/5 backdrop-blur-sm rounded-xl shadow p-8 flex flex-col gap-6 text-left">
          <header>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 text-left mt-[34px]">Contacto</h1>
            <p className="text-[#f87171] font-semibold text-lg text-left">NO SE REALIZAN VISITAS DOMICILIARIAS NI SERVICIO TÉCNICO A DOMICILIO</p>
          </header>
          <article className="space-y-4 text-white text-base leading-relaxed text-left">
            <p className="font-bold">PROCEDIMIENTO DE REPARACIÓN DEL EQUIPO EN NUESTRO LABORATORIO:</p>
            <p className="font-bold">Los clientes deberán coordinar una visita previamente por teléfono identificable (no se atienden números privados), pactando día y horario para la recepción del equipo a reparar, de esta manera podemos ofrecerles una cómoda y rápida atención.</p>
            <p className="font-bold">No atendemos sin previo llamado telefónico coordinando día y horario.</p>
            <p>Cualquier consulta no dude en contactarnos, estamos a su servicio. Aceptamos todas las tarjetas de débito y crédito.</p>
            <div className="flex flex-col items-center my-4">
              <img src="http://crsinformatica.com.ar/images/mercado-pago-3.jpg" alt="Mercado Pago" className="w-full max-w-md rounded shadow mb-2" />
            </div>
            <div className="flex items-center gap-3 text-lg font-bold">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-7 h-7" />
              0223-6680513
            </div>
            <div className="text-white/80 text-base mt-2">www.crsinformatica.com.ar</div>
          </article>
        </section>
      </section>
    </main>
  );
};

export default Contacto; 