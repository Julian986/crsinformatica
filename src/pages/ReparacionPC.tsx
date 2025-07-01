import React from 'react';
import { useNavigate } from 'react-router-dom';

const materialesModulo1 = [
  {
    titulo: '1 - INTRODUCCIÓN A LA MATERIA',
    img: 'http://crsinformatica.com.ar/curso/images/Rep%201.png',
    link: 'apuntes%20reparacion/1%20-Reparacion%20de%20PC%20-%20Presentacion.rar',
  },
  {
    titulo: '2 - INTRODUCCIÓN A LA INFORMÁTICA',
    img: 'http://crsinformatica.com.ar/curso/images/Rep%202.png',
    link: 'apuntes%20reparacion/2%20-%20Introduccion%20a%20la%20Informatica.rar',
  },
  {
    titulo: '3 - HERRAMIENTAS NECESARIAS',
    img: 'http://crsinformatica.com.ar/curso/images/Rep%203.png',
    link: 'apuntes%20reparacion/3%20-%20Herramientas%20para%20la%20mochila%20y%20el%20laboratorio.rar',
  },
  {
    titulo: '4 - HARDWARE COMPLETO',
    img: 'http://crsinformatica.com.ar/curso/images/Rep%204.png',
    link: 'apuntes%20reparacion/4%20-%20Hardware%20completo.rar',
  },
  {
    titulo: '5 - ARQUITECTURA Y MONTAJE',
    img: 'http://crsinformatica.com.ar/curso/images/Rep%206.png',
    link: 'apuntes%20reparacion/5%20-%20Arquitectura%20y%20Montaje.rar',
  },
  {
    titulo: '6 - CABLES DEL GABINETE DE LA PC',
    img: 'http://crsinformatica.com.ar/curso/images/Rep%207.png',
    link: 'apuntes%20reparacion/6%20-%20CABLES%20DEL%20GABINETE%20DEL%20PC.rar',
  },
  {
    titulo: '7 - CPU DE 32 Y 64 BITS',
    img: 'http://crsinformatica.com.ar/curso/images/Rep%208.png',
    link: 'apuntes%20reparacion/7%20-%20CPU%20sea%20de%2032%20o%2064%20bits.rar',
  },
  {
    titulo: '8 - FUENTES ATX',
    img: 'http://crsinformatica.com.ar/curso/images/Rep%2011.png',
    link: 'apuntes%20reparacion/8%20-%20Fuentes%20ATX.rar',
  },
  {
    titulo: '9 - MOTHERBOARD',
    img: 'http://crsinformatica.com.ar/curso/images/Rep%205.png',
    link: 'apuntes%20reparacion/10%20-%20Motherboard-%20Partes%20y%20componentes.rar',
  },
  {
    titulo: '10 - CONFIGURACION DE LA BIOS',
    img: 'http://crsinformatica.com.ar/curso/images/Rep%209.png',
    link: 'apuntes%20reparacion/11%20-%20Configuracion%20de%20la%20BIOS.rar',
  },
  {
    titulo: '11 - BIOS UEFI',
    img: 'http://crsinformatica.com.ar/curso/images/Rep%2010.png',
    link: 'apuntes%20reparacion/12%20-%20Bios%20UEFI.rar',
  },
  {
    titulo: '13 - MEMORIAS RAM',
    img: 'http://crsinformatica.com.ar/curso/images/Rep%2013.png',
    link: 'apuntes%20reparacion/13-%20Memorias%20RAM.rar',
  },
  {
    titulo: '14 - TIPOS DE DISPOSITIVOS DE ALMACENAMIENTO',
    img: 'http://crsinformatica.com.ar/curso/images/Rep%2014.png',
    link: 'apuntes%20reparacion/14%20-%20Dispositivos%20de%20almacenamiento.rar',
  },
  {
    titulo: '15 - DISCOS RÍGIDOS',
    img: 'http://crsinformatica.com.ar/curso/images/Rep%2015.png',
    link: 'apuntes%20reparacion/15%20-%20Discos%20Rigidos.rar',
  },
  {
    titulo: '16 - DISCOS SSD',
    img: 'http://crsinformatica.com.ar/curso/images/Rep%2016.png',
    link: 'apuntes%20reparacion/16%20-%20Discos%20SSD.rar',
  },
  {
    titulo: '17 - FORMATOS DE PARTICIONES DE WINDOWS',
    img: 'http://crsinformatica.com.ar/curso/images/Rep%2017.png',
    link: 'apuntes%20reparacion/17%20-%20Formatos%20de%20particiones%20en%20Windows.rar',
  },
  {
    titulo: '18 - RESOLUCIÓN DE PROBLEMAS DISCOS RÍGIDOS',
    img: 'http://crsinformatica.com.ar/curso/images/Rep%2018.png',
    link: 'apuntes%20reparacion/18%20-%20Resolucion%20de%20problemas%20Discos%20Rigidos.rar',
  },
  {
    titulo: '19 - FORMATEO BAJO NIVEL',
    img: 'http://crsinformatica.com.ar/curso/images/Rep%2019-large.png',
    link: 'apuntes%20reparacion/19%20-%20Formateo%20de%20disco%20rigido%20a%20bajo%20nivel.rar',
  },
  {
    titulo: '20 - TECNOLOGÍA RAID',
    img: 'http://crsinformatica.com.ar/curso/images/Rep%2020.png',
    link: 'apuntes%20reparacion/20%20-%20Tecnologia%20Raid.rar',
  },
  {
    titulo: '21 - USO DEL TESTER',
    img: 'http://crsinformatica.com.ar/curso/images/Rep%2012.png',
    link: 'apuntes%20reparacion/9%20-%20Uso%20del%20tester.rar',
  },
  {
    titulo: '22 - GRABADORAS DE DVD',
    img: 'http://crsinformatica.com.ar/curso/images/Rep%2021.png',
    link: 'apuntes%20reparacion/21%20-%20Grabadoras%20de%20DVD.rar',
  },
  {
    titulo: '22 - PLACAS DE EXPANSIÓN',
    img: 'http://crsinformatica.com.ar/curso/images/Rep%2022.png',
    link: 'apuntes%20reparacion/22%20-%20PLACAS%20DE%20EXPANSION%20DE%20PC.rar',
  },
  {
    titulo: '23 - INTRODUCCIÓN SOFTWARE',
    img: 'http://crsinformatica.com.ar/curso/images/23.png',
    link: 'apuntes%20reparacion/24%20-%20Introduccion%20Software.rar',
  },
  {
    titulo: '25 - SISTEMAS OPERATIVOS',
    img: 'http://crsinformatica.com.ar/curso/images/Rep%2026.png',
    link: 'apuntes%20reparacion/25%20-%20Sistemas%20Operativos.rar',
  },
  {
    titulo: '26 - INSTALACION WINDOWS 10',
    img: 'http://crsinformatica.com.ar/curso/images/Rep%2027.png',
    link: 'apuntes%20reparacion/26%20-%20Como%20instalar%20Windows%2010.rar',
  },
  {
    titulo: '27 - INSTALACION DE DIFERENTES SISTEMAS OPERATIVOS',
    img: 'http://crsinformatica.com.ar/curso/images/Rep%2028.png',
    link: 'apuntes%20reparacion/27%20-%20INSTALACION%20DIFERENTES%20SIST%20OPERATIVOS.rar',
  },
  {
    titulo: '28 - INSTALACION WINDOWS XP',
    img: 'http://crsinformatica.com.ar/curso/images/Rep%2029.png',
    link: 'apuntes%20reparacion/28%20-%20Instalacion%20Windows%20XP.rar',
  },
  {
    titulo: '29 - QUE HACER DESPUES DE INSTALAR WINDOWS',
    img: 'http://crsinformatica.com.ar/curso/images/que%20hacer%20despues.png',
    link: 'apuntes%20reparacion/29%20-%20Que%20hacer%20despues%20de%20instalar%20Windows.rar',
  },
  {
    titulo: '30 - CREAR PENDRIVE BOOTEABLE CON RUFUS',
    img: 'http://crsinformatica.com.ar/curso/images/Rep%2030.png',
    link: 'apuntes%20reparacion/30%20-%20Instalar%20Windows%20con%20Rufus.rar',
  },
  {
    titulo: '31 - CREAR DISCO DE ARRANQUE USB CON VARIOS S.O.',
    img: 'http://crsinformatica.com.ar/curso/images/Rep%2031.png',
    link: 'apuntes%20reparacion/31%20-%20Crear%20un%20disco%20de%20arranque%20USB%20con%20varios%20SO.rar',
  },
  {
    titulo: '32 - WINDOWS 11',
    img: 'http://crsinformatica.com.ar/curso/images/Rep%2032.png',
    link: 'apuntes%20reparacion/32%20-%20Windows%2011.rar',
  },
  {
    titulo: '33 - PACK DE SOFTWARE',
    img: 'http://crsinformatica.com.ar/curso/images/pack%20software.png',
    link: '',
  },
  {
    titulo: '34 - REGISTRO DE WINDOWS',
    img: 'http://crsinformatica.com.ar/curso/images/Rep%2034.png',
    link: 'apuntes%20reparacion/34%20-%20Registro%20de%20Windows.rar',
  },
  {
    titulo: '35 - MS CONFIG',
    img: 'http://crsinformatica.com.ar/curso/images/Rep%2037.png',
    link: 'apuntes%20reparacion/35%20-%20MSconfig.rar',
  },
  {
    titulo: '36 - SERVICIOS DE WINDOWS',
    img: 'http://crsinformatica.com.ar/curso/images/Rep%2035.png',
    link: 'apuntes%20reparacion/36%20-%20Servicios%20de%20Windows.rar',
  },
  {
    titulo: '37 - FIREWALL',
    img: 'http://crsinformatica.com.ar/curso/images/Rep%2052.png',
    link: 'apuntes%20reparacion/43%20-%20firewall.rar',
  },
  {
    titulo: '38 - SISTEMA OPERATIVO MS-DOS',
    img: 'http://crsinformatica.com.ar/curso/images/Rep%2038.png',
    link: 'apuntes%20reparacion/37%20-%20MS-DOS.rar',
  },
  {
    titulo: '39 - CHKDSK',
    img: 'http://crsinformatica.com.ar/curso/images/Rep%2040.png',
    link: 'apuntes%20reparacion/38%20-%20chkdsk.rar',
  },
  {
    titulo: '39 - REPARACION DE WINDOWS DESDE MEDIOS EXTERNOS',
    img: 'http://crsinformatica.com.ar/curso/images/rep%2044.png',
    link: 'apuntes%20reparacion/39%20-%20reparacion%20de%20Windows%2010%20desde%20medios%20externos.rar',
  },
  {
    titulo: '40 - ATRIBUTOS DE ARCHIVOS',
    img: 'http://crsinformatica.com.ar/curso/images/ATRIBUTOS%20DE%20ARCHIVOS.png',
    link: '',
  },
  {
    titulo: '41 - ELIMINAR LA PARTICIÓN DE RECUPERACION',
    img: 'http://crsinformatica.com.ar/curso/images/Rep%2041.png',
    link: 'apuntes%20reparacion/41%20-%20Eliminar%20la%20particion%20de%20recuperacion%20en%20windows%2010.rar',
  },
  {
    titulo: '42 - VIRUS INFORMATICOS',
    img: 'http://crsinformatica.com.ar/curso/images/Rep%2045.png',
    link: 'apuntes%20reparacion/42%20-%20Virus%20informaticos.rar',
  },
  {
    titulo: '44 - ANALISIS DE LA FALLA DE UNA COMPUTADORA',
    img: 'http://crsinformatica.com.ar/curso/images/Rep%2046.png',
    link: 'apuntes%20reparacion/44%20-%20ANALISIS%20DE%20LA%20FALLA%20DE%20UNA%20COMPUTADORA.rar',
  },
  {
    titulo: '45 - MANTENIMIENTO DEL PC',
    img: 'http://crsinformatica.com.ar/curso/images/Rep%2047.png',
    link: '',
  },
  {
    titulo: '46 - APLICACIONES EN SEGUNDO PLANO',
    img: 'http://crsinformatica.com.ar/curso/images/rep%2042.png',
    link: '',
  },
  {
    titulo: '47 - QUE ES BACKUP',
    img: 'http://crsinformatica.com.ar/curso/images/Rep%2048.png',
    link: '',
  },
  {
    titulo: '48 - BACKUP DE CORREOS EN OUTLOOK',
    img: 'http://crsinformatica.com.ar/curso/images/Rep%2049.png',
    link: '',
  },
  {
    titulo: '49 - COMANDO XCOPY',
    img: 'http://crsinformatica.com.ar/curso/images/Rep%2050.png',
    link: '',
  },
  {
    titulo: '50 - REPARACION DE NOTEBOOK',
    img: 'http://crsinformatica.com.ar/curso/images/Rep%2051.png',
    link: '',
  },
  {
    titulo: '51 - EQUIPOS ALL IN ONE',
    img: 'http://crsinformatica.com.ar/curso/images/ALL%20IN%20ONE.png',
    link: '',
  },
  {
    titulo: '52 - INTRODUCCION A LINUX',
    img: 'http://crsinformatica.com.ar/curso/images/Rep%2053.png',
    link: '',
  },
  {
    titulo: '53 - COMO HACER FUNCIONAR LAS ACTUALIZACIONES EN WINDOWS 7',
    img: 'http://crsinformatica.com.ar/curso/images/ACTUALIZACIONES%20WINDOWS%207.png',
    link: '',
  },
  {
    titulo: '54 - WINDOWS SANDBOX',
    img: 'http://crsinformatica.com.ar/curso/images/WINDOWS%20SANDBOX.png',
    link: '',
  },
  {
    titulo: '55 - QUITAR CONTRASEÑA DE WINDOWS',
    img: 'http://crsinformatica.com.ar/curso/images/quitar%20contrasena.png',
    link: '',
  },
  {
    titulo: '56 - ACTIVAR PLAN ENERGÍA MÁXIMA',
    img: 'http://crsinformatica.com.ar/curso/images/MAXIMO%20RENDIMIENTO.png',
    link: '',
  },
  {
    titulo: '57 - INSTALACIÓN MICROSOFT OFFICE',
    img: 'http://crsinformatica.com.ar/curso/images/INSTALACION%20OFFICE.png',
    link: '',
  },
  {
    titulo: '58 - MOTHERBOARD NO DA VIDEO',
    img: 'http://crsinformatica.com.ar/curso/images/mother%20no%20da%20video.png',
    link: '',
  },
  {
    titulo: '59 - VENTA DE EQUIPAMIENTO INFORMATICO',
    img: 'http://crsinformatica.com.ar/curso/images/Rep%2056.png',
    link: '',
  },
  {
    titulo: '60 - REPARACIÓN DE PC COMO SALIDA LABORAL',
    img: 'http://crsinformatica.com.ar/curso/images/Rep%2057.png',
    link: '',
  },
  // ... puedes seguir agregando los materiales aquí ...
];

const ReparacionPC: React.FC = () => {
  const navigate = useNavigate();
  const materialImg = 'http://crsinformatica.com.ar/images/slide828e7e6e41eb41baaaeff0b8d986ee6d2.jpg';
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0a0f1c] py-8 px-4 md:px-8 text-white">
      <section className="max-w-5xl mx-auto flex flex-col gap-8">
        <button
          onClick={() => navigate(-1)}
          className="mb-2 flex items-center gap-2 text-white hover:text-[#2563eb] transition-colors text-lg font-semibold focus:outline-none"
          aria-label="Volver"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Volver
        </button>
        <header className="mb-6 text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-left mt-[34px]">Curso de actualización, armado y reparación de PC - UTN</h1>
          <p className="text-lg font-semibold text-left">En esta página encontrarás todo el material visto en clase en formato PDF para descargar y algunos archivos más que serán de utilidad.</p>
          <p className="mt-2 text-base text-left">Estos archivos están comprimidos en formato WINRAR y con la contraseña:</p>
          <p className="font-mono text-lg text-[#2563eb] bg-gray-800 rounded px-2 py-1 inline-block text-left">www.CRSinformatica.com.ar</p>
          <p className="text-sm mt-1 text-left">Respetar mayúsculas y minúsculas.</p>
          <p className="mt-4 font-bold text-white text-left">Prof. Cecilio San Martin</p>
        </header>
        <section>
          <h2 className="text-2xl font-bold text-white mb-4 text-left">Archivos en formato PDF para descargar</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {materialesModulo1.map((mat, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm rounded-xl shadow hover:shadow-lg hover:bg-[#2563eb]/20 transition flex flex-col items-center p-4 gap-2 group cursor-pointer"
              >
                <img src={materialImg} alt={mat.titulo} className="w-44 h-32 object-contain rounded mb-2 group-hover:scale-105 transition" />
                <span className="text-center font-semibold text-[#e3e2e2] group-hover:text-white text-base">{mat.titulo}</span>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
};

export default ReparacionPC; 