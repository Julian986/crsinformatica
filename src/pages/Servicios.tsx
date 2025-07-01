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

const Servicios: React.FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0a0f1c] py-8 px-4 md:px-8 text-left">
      <section className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Sidebar */}
        <aside className="md:col-span-1 space-y-8">
          <article className="bg-white/5 backdrop-blur-sm rounded-xl shadow p-6">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2 text-left">
            Servicios
            </h3>
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
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2 text-left">
               CURSOS UTN
            </h3>
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
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 text-left">Nuestros Servicios</h1>
            <p className="text-[#f87171] font-semibold text-lg text-left">NO REALIZAMOS SERVICIO TÉCNICO A DOMICILIO.</p>
          </header>
          <article className="space-y-4 text-white text-base leading-relaxed text-left">
            <p><b>CRS INFORMÁTICA</b> es una empresa situada en la ciudad de Mar del Plata, Buenos Aires, Argentina, destinada a brindar soluciones informáticas a particulares, profesionales y empresas. Está integrada por un grupo de profesionales provenientes de diversas áreas informáticas, algunos en condición de asociados lo que genera máximo compromiso con el cliente.</p>
            <p>Conocemos las necesidades de nuestros clientes, para poder brindarles las soluciones más convenientes. Contamos con una sólida estructura de equipamiento y servicios, lo cual nos permite adaptarnos a su necesidad, renovando permanentemente nuestra tecnología.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Armado, reparación y mantenimiento de computadoras y periféricos.</li>
              <li>Seguridad informática, limpieza y actualización de los programas de protección.</li>
              <li>Actualización y repotenciación de equipos.</li>
              <li>Provisión de hardware e insumos.</li>
              <li>Diseño y armado de todo tipo de redes informáticas, para empresas y comercios.</li>
            </ul>
            <p className="text-[#2563eb] font-semibold">DEBIDO A LOS ALTOS COSTOS DE TRASLADO ACTUALES, NO HACEMOS SERVICIO TÉCNICO A DOMICILIO.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Servicio técnico de PC, Notebook, netbook, All in one, etc. en Mar del Plata y zona de influencia.</li>
              <li>Reparación en nuestro taller. Los clientes deben coordinar una visita telefónica para la recepción del equipo.</li>
              <li>No atendemos sin previo llamado telefónico coordinando día y horario.</li>
              <li>Presupuesto: $5000 (se descuenta si se realiza el trabajo).</li>
              <li>Plazos: Presupuesto disponible en 48/72 hs hábiles.</li>
            </ul>
            <p>Ofrecemos soporte técnico residencial y corporativo, cubriendo configuración de hardware y software, reparación y cambio de partes, problemas de compatibilidad, fallas en computadoras o red, virus, configuraciones de software, etc.</p>
            <p>Los equipos informáticos necesitan mantenimiento periódico de software y hardware. Ofrecemos soporte técnico como servicio de outsourcing, permitiendo a nuestros clientes enfocarse en su actividad principal mediante visitas programadas y abonos mensuales.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Soporte On Site y remoto</li>
              <li>Instalación y actualización de software estándar</li>
              <li>Configuración de Internet cableado y Wifi</li>
              <li>Instalación de sistema operativo</li>
              <li>Búsqueda e instalación de drivers</li>
              <li>Armado de equipos y servidores a medida</li>
              <li>Backup y traspaso de información</li>
              <li>Desinfección de virus, seguridad con firewalls y antivirus</li>
              <li>Instalación y mantenimiento de redes informáticas</li>
              <li>Help desk y planes de mantenimiento mensual</li>
              <li>Mantenimiento preventivo en notebook, netbook y PC</li>
            </ul>
            <p>Recomendamos limpiar su notebook una vez al año como parte de un programa regular de mantenimiento. Contamos con instrumental específico y atendemos todas las necesidades.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Servicio técnico notebook, limpieza de virus, cambio de hardware</li>
              <li>Cambio de display LCD, reparación de chipset de video, cambio de pantallas, flex, inverter, carcaza y bisagras</li>
              <li>Instalación de memorias, discos, cargadores, teclados, etc.</li>
              <li>Reinstalación de sistema operativo, resguardo de datos y configuración general</li>
              <li>Renovación de antivirus, limpieza de virus, reparación o reemplazo de pin de carga</li>
            </ul>
          </article>
        </section>
      </section>
    </main>
  );
};

export default Servicios; 