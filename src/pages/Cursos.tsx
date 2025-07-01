import React from 'react';
import { Link } from 'react-router-dom';

const cursos = [
  {
    titulo: 'Curso de actualización, Armado y reparación de PC',
    fecha: '12/AGOSTO/2025',
    img: 'http://crsinformatica.com.ar/curso/images/gif%20animado%20reparacion.gif',
    banner: 'http://crsinformatica.com.ar/curso/images/Banner%20Reparacion.png',
    link: '/reparacion',
    material: 'Descarga del material de estudio del curso en formato PDF.- UNICAMENTE A USUARIOS AUTORIZADOS-',
  },
  {
    titulo: 'Curso de administrador de redes y seguridad informática',
    fecha: '21/AGOSTO/2025',
    img: 'http://crsinformatica.com.ar/curso/images/Gif%20animado%20redes.gif',
    banner: 'http://crsinformatica.com.ar/curso/images/FYER%20REDES%20NUEVO.png',
    link: 'redes/index.html',
    material: 'Descarga del material de estudio del curso en formato PDF.- UNICAMENTE A USUARIOS AUTORIZADOS-',
  },
];

const recursos = {
  titulo: 'Recursos',
  img: 'http://crsinformatica.com.ar/curso/images/gif%20animado%20recursos.gif',
  link: 'recursos/index.html',
  material: 'LINKS DE DESCARGA DE SOFTWARE LIBRE O VERSIONES DE PRUEBA DE SOFTWARE UTIL PARA EL USUARIO. UNICAMENTE PARA USUARIOS AUTORIZADOS - INGRESO CON USUARIO Y CONTRASEÑA',
};

const Cursos: React.FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0a0f1c] py-8 px-4 md:px-8">
      <section className="max-w-6xl mx-auto flex flex-col gap-8">
        <header className="mb-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-2">Próximos Cursos</h1>
          <p className="text-center text-white/80 font-medium">Inscribite y capacitá tu futuro con nosotros</p>
        </header>
        <div className="grid md:grid-cols-3 gap-8">
          {cursos.map((curso, i) => (
            <article key={i} className="bg-white/5 backdrop-blur-sm rounded-xl shadow p-6 flex flex-col items-center text-center">
              <img src={curso.img} alt={curso.titulo} className="w-24 h-24 object-contain mb-4" />
              <h2 className="text-xl font-semibold text-[#2563eb] mb-2">
                {curso.titulo.toLowerCase().includes('redes') ? (
                  <span className="text-[#2563eb] select-none cursor-default">{curso.titulo}</span>
                ) : (
                  <a href={curso.link} className="hover:underline" >{curso.titulo}</a>
                )}
              </h2>
              <img src="http://crsinformatica.com.ar/curso/images/logo%20utn%20invertido.png" alt="UTN Logo" className="w-48 h-16 object-contain mx-auto mb-2" />
              <p className="text-white/90 text-sm mb-2 font-medium">{curso.material}</p>
              <div className="bg-[#2563eb] text-white font-bold rounded-lg px-4 py-2 mb-2 text-lg shadow">
                PRÓXIMO CURSO INICIA<br />{curso.fecha}
              </div>
            </article>
          ))}
          {/* Recursos */}
          <article className="bg-white/5 backdrop-blur-sm rounded-xl shadow p-6 flex flex-col items-center text-center">
            <img src={recursos.img} alt={recursos.titulo} className="w-24 h-24 object-contain mb-4" />
            <h2 className="text-xl font-semibold text-[#2563eb] mb-2">
              <Link to="/recursos" className="hover:underline">{recursos.titulo}</Link>
            </h2>
            <img src="http://crsinformatica.com.ar/curso/images/logo%20utn%20invertido.png" alt="UTN Logo" className="w-48 h-16 object-contain mx-auto mb-2" />
            <p className="text-white/90 text-sm mb-2 font-medium">{recursos.material}</p>
          </article>
        </div>
        <section className="bg-[#1e293b]/80 rounded-xl p-6 mt-8 text-white text-center space-y-4">
          <h2 className="text-2xl font-bold text-[#2563eb]">Próximos cursos</h2>
          <p className="text-lg font-semibold">Curso Actualización, Armado y Reparación de PC: inicia 12 Agosto 2025</p>
          <p className="text-lg font-semibold">Curso Administrador de Redes y Seguridad Informática inicia 21 Agosto 2025</p>
          <a
            href="https://sicu.mdp.utn.edu.ar/ingresoext/?_gl=1*m7itm0*_ga*MTUyNzI0NDg5NS4xNzE5MDEwOTYz*_ga_LGWMLJRF0J*MTcxOTAxMDk2Mi4xLjEuMTcxOTAxMTAxMy4wLjAuMA.."
            className="inline-block bg-[#2563eb] text-white font-bold px-6 py-2 rounded-lg shadow hover:bg-[#3b82f6] transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Abierta la inscripción AQUÍ
          </a>
          <p className="text-sm mt-2">ESTE SITIO WEB NO TIENE NINGUNA RELACIÓN CON las instituciones mencionadas.<br />HA SIDO CREADO POR EL DOCENTE PARA BRINDAR SOPORTE A SUS ALUMNOS.<br /><span className="text-[#2563eb]">Acceso únicamente con usuario y contraseña otorgado por el docente.</span></p>
        </section>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8">
          <img src="http://crsinformatica.com.ar/curso/images/Banner%20Reparacion.png" alt="Banner Reparación" className="w-full md:w-1/2 rounded-xl shadow object-contain" />
          <img src="http://crsinformatica.com.ar/curso/images/FYER%20REDES%20NUEVO.png" alt="Banner Redes" className="w-full md:w-1/2 rounded-xl shadow object-contain" />
        </div>
      </section>
    </main>
  );
};

export default Cursos; 