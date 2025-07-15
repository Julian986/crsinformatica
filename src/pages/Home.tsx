import { Link } from 'react-router-dom';

const sliderImages =  [
  'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751561548/slide828e7e6e41eb41baaaeff0b8d986ee6d0_yiqfsx.webp',
  'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751561548/slide828e7e6e41eb41baaaeff0b8d986ee6d1_ppmp9i.webp',
  'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751561548/slide828e7e6e41eb41baaaeff0b8d986ee6d2_1_cnsh9k.webp',
  'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751561548/slide828e7e6e41eb41baaaeff0b8d986ee6d3_jp6x9c.webp',
];


const Home = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <main className="container mx-auto px-4 md:px-8 pb-12 pt-[29px]">
        {/* HERO PRINCIPAL SOLO EN HOME */}
        <section className="w-full py-10 md:py-16 px-6 md:px-8 bg-white shadow-sm text-gray-900 text-center mb-10 transition-colors duration-300 rounded-2xl mx-auto max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide mb-4 text-[#22292f]">CRS INFORMÁTICA</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#6b7280]">Servicios Informáticos Profesionales en Mar del Plata</h2>
          <p className="max-w-2xl mx-auto text-lg md:text-xl mb-8 text-gray-600">Soluciones en reparación, armado, redes, cursos y asesoramiento para particulares, empresas y profesionales. Más de 20 años de experiencia.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/cursos" className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold py-3 px-8 rounded-lg shadow transition">Ver Cursos</Link>
            <Link to="/servicios" className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-3 px-8 rounded-lg shadow transition">Ver Servicios</Link>
          </div>
        </section>

        <div className="flex flex-col md:flex-row gap-8">
          {/* SIDEBAR IZQUIERDO */}
          <aside className="md:w-1/3 flex flex-col gap-8">
            {/* Servicios */}
            <section className="bg-white shadow-sm rounded-xl p-6 border border-[#e5e7eb]">
              <h2 className="text-2xl font-bold text-[#22292f] mb-4 flex items-center gap-2">
                <span className="inline-block w-3 h-3 bg-gray-900 rounded-full"></span>
                Servicios
              </h2>
              <ul className="space-y-2 text-gray-700 text-base text-left pl-2">
                <li>Reinstalación de sistemas operativos</li>
                <li>Instalación de Windows y Office</li>
                <li>Eliminación de virus e instalación de antivirus</li>
                <li>Backup y configuración de correos electrónicos</li>
                <li>Compartir archivos y carpetas por internet</li>
                <li>Servicio técnico integral de PC, notebook y laptop</li>
                <li>Búsqueda, instalación y configuración de drivers</li>
                <li>Migraciones de datos y backup</li>
                <li>Planeamiento y configuración de redes informáticas</li>
                <li>Instalación de cámaras de seguridad</li>
                <li>Abonos y mantenimiento para empresas</li>
                <li>Insumos y venta de hardware en general</li>
                <li>Hosting de sitios web</li>
                <li>Instalación y configuración de servidores Windows</li>
              </ul>
            </section>
            {/* Cursos UTN */}
            <section className="bg-white shadow-sm rounded-xl p-6 border border-[#e5e7eb]">
              <h2 className="text-2xl font-bold text-[#22292f] mb-4 flex items-center gap-2">
                <span className="inline-block w-3 h-3 bg-gray-900 rounded-full"></span>
                CURSOS UTN
              </h2>
              <div className="bg-gray-100 text-gray-900 p-3 rounded mb-2 text-center font-semibold">
                <a href="https://mdp.utn.edu.ar/curso/reparacion-de-pc/" target="_blank" rel="noopener noreferrer">CURSO DE ACTUALIZACIÓN, ARMADO Y REPARACIÓN DE PC</a>
              </div>
              <div className="bg-gray-100 text-gray-900 p-3 rounded mb-2 text-center font-semibold">
                <a href="https://mdp.utn.edu.ar/curso/administrador-de-redes-y-seguridad-informatica/" target="_blank" rel="noopener noreferrer">CURSO DE ADMINISTRADOR DE REDES Y SEGURIDAD INFORMÁTICA</a>
              </div>
              <p className="text-center text-gray-700 font-semibold mt-2">
                Estudiá reparación de PC y redes informáticas en la Universidad Tecnológica Nacional Mar del Plata
              </p>
            </section>
          </aside>

          {/* COLUMNA DERECHA */}
          <section className="md:w-2/3 flex flex-col gap-10">
            {/* Slider/Collage */}
            <div className="w-full mb-4 bg-white shadow-sm rounded-xl p-4 border border-[#e5e7eb]">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {sliderImages.map((img, idx) => (
                  <div key={idx} className="rounded-lg overflow-hidden shadow-lg">
                    <img src={img} alt={`Imagen slider ${idx + 1}`} className="w-full h-32 md:h-40 object-cover transition-transform duration-300 hover:scale-105" />
                  </div>
                ))}
              </div>
            </div>
  
            {/* Atención */}
            <section className="bg-white shadow-sm text-gray-900 p-6 rounded-xl border border-[#e5e7eb] text-center">
              <h2 className="text-xl md:text-2xl font-bold mb-2">ATENCIÓN A PARTICULARES, COMERCIOS, PROFESIONALES, PYMES Y EMPRESAS</h2>
              <p className="font-semibold text-lg text-red-600">INFORMAMOS QUE NO SE REALIZAN VISITAS A DOMICILIO.</p>
            </section>

            {/* Quiénes somos */}
            <section className="bg-white shadow-sm p-6 rounded-xl border border-[#e5e7eb] flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/2 flex justify-center">
                <img src="https://res.cloudinary.com/dzoupwn0e/image/upload/v1751561549/de454632-5976-42ad-804e-13e31dfc440c_vmjyiu.webp" alt="Quiénes somos CRS Informática" className="w-full max-w-xs rounded shadow-md" />
              </div>
              <div className="md:w-1/2 text-left">
                <h2 className="text-2xl font-bold text-[#22292f] mb-4">Quiénes somos</h2>
                <p className="text-gray-700 mb-4">
                  Brindamos nuestro asesoramiento y servicio a usuarios particulares de PC, comercios, profesionales de las más diversas ramas, Pymes y empresas.
                </p>
                <p className="text-gray-700 mb-4">
                  CRS Informática está integrada por profesionales provenientes de las más diversas ramas de la informática, algunos profesores universitarios, en condición de asociados, lo que genera máximo compromiso con el cliente.
                </p>
              </div>
            </section>

            {/* Consúltenos / Contacto */}
            <section id="contacto" className="bg-white shadow-sm p-6 rounded-xl border border-[#e5e7eb] text-center flex flex-col items-center">
              <h2 className="text-2xl font-bold text-[#22292f] mb-4">Consúltenos</h2>
              <p className="text-gray-700 mb-2">Háganos su consulta por WhatsApp, sin ningún compromiso.</p>
              <a
                href="https://wa.me/542236680513"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg shadow transition mb-2"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-7 h-7" />
                0223-6680513
              </a>
              <p className="text-gray-700">Le contestaremos a la mayor brevedad posible.</p>
            </section>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home; 