import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const cursos = [
  {
    titulo: 'Curso de actualización, Armado y reparación de PC',
    fecha: '12/AGOSTO/2025',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751570699/gif_animado_reparacion_deejpx.gif',
    banner: 'http://crsinformatica.com.ar/curso/images/Banner%20Reparacion.png',
    link: '/reparacion',
    material: 'Descarga del material de estudio del curso en formato PDF.- UNICAMENTE A USUARIOS AUTORIZADOS-',
  },
  {
    titulo: 'Curso de administrador de redes y seguridad informática',
    fecha: '21/AGOSTO/2025',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751570973/Gif_animado_redes_jz9paf.gif',
    banner: 'http://crsinformatica.com.ar/curso/images/FYER%20REDES%20NUEVO.png',
    link: 'redes/index.html',
    material: 'Descarga del material de estudio del curso en formato PDF.- UNICAMENTE A USUARIOS AUTORIZADOS-',
  },
];

const recursos = {
  titulo: 'Recursos',
  img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751571001/gif_animado_recursos_q0hpnj.gif',
  link: 'recursos/index.html',
  material: 'LINKS DE DESCARGA DE SOFTWARE LIBRE O VERSIONES DE PRUEBA DE SOFTWARE UTIL PARA EL USUARIO. UNICAMENTE PARA USUARIOS AUTORIZADOS - INGRESO CON USUARIO Y CONTRASEÑA',
};

const Cursos: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // Estado para el modal de acceso al curso de redes
  const [showRedesModal, setShowRedesModal] = React.useState(false);
  const [usuarioRedes, setUsuarioRedes] = React.useState('');
  const [passwordRedes, setPasswordRedes] = React.useState('');
  const [errorRedes, setErrorRedes] = React.useState('');

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleRedesLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (usuarioRedes === 'admin' && passwordRedes === '1234') {
      setShowRedesModal(false);
      setErrorRedes('');
    } else {
      setErrorRedes('Usuario o contraseña incorrectos');
    }
  };

  return (
    <main className="min-h-screen bg-[#f8f9fa]">
      {/* Header Integrado */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 md:py-6 relative min-h-[48px] flex items-center">
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
            Cursos
          </h1>
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-6 md:py-8">
        {/* Modal de acceso a Redes */}
        {showRedesModal && (
          <div className="fixed inset-0 z-50 flex items-start justify-center bg-black bg-opacity-50 pt-8 md:pt-16">
            <form onSubmit={handleRedesLogin} className="bg-white rounded-xl shadow-lg p-8 w-full max-w-xs md:max-w-sm flex flex-col gap-4 animate-fade-in relative">
              <button
                type="button"
                onClick={() => setShowRedesModal(false)}
                className="absolute left-4 top-4 flex items-center gap-2 text-gray-900 hover:text-black transition-colors text-lg font-semibold focus:outline-none"
                aria-label="Volver"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <h2 className="text-2xl font-bold text-center mb-2 text-gray-800 mt-2">Acceso al Curso de Redes</h2>
              <input
                type="text"
                placeholder="Usuario"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800"
                value={usuarioRedes}
                onChange={e => setUsuarioRedes(e.target.value)}
                autoFocus
              />
              <input
                type="password"
                placeholder="Contraseña"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800"
                value={passwordRedes}
                onChange={e => setPasswordRedes(e.target.value)}
              />
              {errorRedes && <div className="text-red-600 text-sm text-center">{errorRedes}</div>}
              <button
                type="submit"
                className="bg-gray-800 text-white font-bold rounded-lg px-4 py-2 mt-2 hover:bg-gray-700 transition"
              >
                Ingresar
              </button>
            </form>
          </div>
        )}
        <div className={showRedesModal ? "opacity-30 pointer-events-none select-none" : "opacity-100 transition-opacity duration-300"}>
          <div className="grid md:grid-cols-3 gap-8">
            {cursos.map((curso, i) => (
              <article key={i} className="bg-white shadow-sm rounded-xl p-6 flex flex-col items-center text-center border border-[#e5e7eb]">
                <img src={curso.img} alt={curso.titulo} className="w-24 h-24 object-contain mb-4" />
                <h2 className="text-xl font-semibold text-[var(--color-gray-800)] mb-2">
                  {curso.titulo.toLowerCase().includes('redes') ? (
                    <button
                      className="text-[var(--color-gray-800)] select-none cursor-pointer hover:underline bg-transparent border-none p-0 m-0"
                      onClick={() => setShowRedesModal(true)}
                    >
                      {curso.titulo}
                    </button>
                  ) : (
                    <a href={curso.link} className="hover:underline" >{curso.titulo}</a>
                  )}
                </h2>
                <img src="https://res.cloudinary.com/dzoupwn0e/image/upload/v1752612129/UTN-iso-new_naumay.webp" alt="UTN Logo" className="w-48 h-16 object-contain mx-auto mb-4" />
                <p className="text-gray-700 text-sm mb-4 font-medium">{curso.material}</p>
                <div className="bg-[var(--color-gray-800)] text-white font-bold rounded-lg px-4 py-2 mb-2 text-lg shadow mt-4">
                  PRÓXIMO CURSO INICIA<br />{curso.fecha}
                </div>
              </article>
            ))}
            {/* Recursos */}
            <article className="bg-white shadow-sm rounded-xl p-6 flex flex-col items-center text-center border border-[#e5e7eb]">
              <img src={recursos.img} alt={recursos.titulo} className="w-24 h-24 object-contain mb-4" />
              <h2 className="text-xl font-semibold text-[var(--color-gray-800)] mb-2">
                <Link to="/recursos" state={{fromMenu: false}} className="hover:underline">{recursos.titulo}</Link>
              </h2>
              <img src="https://res.cloudinary.com/dzoupwn0e/image/upload/v1752612129/UTN-iso-new_naumay.webp" alt="UTN Logo" className="w-48 h-16 object-contain mx-auto mb-4" />
              <p className="text-gray-700 text-sm mb-4 font-medium">{recursos.material}</p>
            </article>
          </div>
          <section className="bg-white shadow-sm rounded-xl p-6 mt-8 text-gray-800 text-center space-y-4 border border-[#e5e7eb]">
            <h2 className="text-2xl font-bold text-[var(--color-gray-800)]">Próximos cursos</h2>
            <p className="text-lg font-semibold">Curso Actualización, Armado y Reparación de PC: inicia 12 Agosto 2025</p>
            <p className="text-lg font-semibold">Curso Administrador de Redes y Seguridad Informática inicia 21 Agosto 2025</p>
            <a
              href="https://sicu.mdp.utn.edu.ar/ingresoext/?_gl=1*m7itm0*_ga*MTUyNzI0NDg5NS4xNzE5MDEwOTYz*_ga_LGWMLJRF0J*MTcxOTAxMDk2Mi4xLjEuMTcxOTAxMTAxMy4wLjAuMA.."
              className="inline-block bg-[var(--color-gray-800)] text-white font-bold px-6 py-2 rounded-lg shadow hover:bg-gray-700 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Abierta la inscripción AQUÍ
            </a>
            <p className="text-sm mt-2">ESTE SITIO WEB NO TIENE NINGUNA RELACIÓN CON las instituciones mencionadas.<br />HA SIDO CREADO POR EL DOCENTE PARA BRINDAR SOPORTE A SUS ALUMNOS.<br /><span className="text-[var(--color-gray-800)]">Acceso únicamente con usuario y contraseña otorgado por el docente.</span></p>
          </section>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8">
            <img src="https://res.cloudinary.com/dzoupwn0e/image/upload/v1751571604/Banner-Reparacion_k1mmee.webp" alt="Banner Reparación" className="w-full md:w-1/2 rounded-xl shadow object-contain" />
            <img src="https://res.cloudinary.com/dzoupwn0e/image/upload/v1751571596/FYER-REDES-NUEVO_wwcgwj.webp" alt="Banner Redes" className="w-full md:w-1/2 rounded-xl shadow object-contain" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cursos; 