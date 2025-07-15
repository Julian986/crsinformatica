import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const materialesModulo1 = [
  {
    titulo: '1 - INTRODUCCIÓN A LA MATERIA',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751667532/Rep_1_yctxuf.webp',
    link: 'apuntes%20reparacion/1%20-Reparacion%20de%20PC%20-%20Presentacion.rar',
  },
  {
    titulo: '2 - INTRODUCCIÓN A LA INFORMÁTICA',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751667531/Rep_2_dwobmk.webp',
    link: 'apuntes%20reparacion/2%20-%20Introduccion%20a%20la%20Informatica.rar',
  },
  {
    titulo: '3 - HERRAMIENTAS NECESARIAS',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751667534/Rep-3_lyn9cq.webp',
    link: 'apuntes%20reparacion/3%20-%20Herramientas%20para%20la%20mochila%20y%20el%20laboratorio.rar',
  },
  {
    titulo: '4 - HARDWARE COMPLETO',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751667533/Rep_4_gs6hez.webp',
    link: 'apuntes%20reparacion/4%20-%20Hardware%20completo.rar',
  },
  {
    titulo: '5 - ARQUITECTURA Y MONTAJE',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751667532/Rep-6_kzcrnz.webp',
    link: 'apuntes%20reparacion/5%20-%20Arquitectura%20y%20Montaje.rar',
  },
  {
    titulo: '6 - CABLES DEL GABINETE DE LA PC',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751667532/Rep_7_wp8tux.webp',
    link: 'apuntes%20reparacion/6%20-%20CABLES%20DEL%20GABINETE%20DEL%20PC.rar',
  },
  {
    titulo: '7 - CPU DE 32 Y 64 BITS',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751667532/Rep_8_slfpin.webp',
    link: 'apuntes%20reparacion/7%20-%20CPU%20sea%20de%2032%20o%2064%20bits.rar',
  },
  {
    titulo: '8 - FUENTES ATX',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751667532/Rep_11_csdw3v.webp',
    link: 'apuntes%20reparacion/8%20-%20Fuentes%20ATX.rar',
  },
  {
    titulo: '9 - MOTHERBOARD',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751667532/Rep_5_sbastg.webp',
    link: 'apuntes%20reparacion/10%20-%20Motherboard-%20Partes%20y%20componentes.rar',
  },
  {
    titulo: '10 - CONFIGURACION DE LA BIOS',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751667532/Rep-9_znmb5d.webp',
    link: 'apuntes%20reparacion/11%20-%20Configuracion%20de%20la%20BIOS.rar',
  },
  {
    titulo: '11 - BIOS UEFI',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751667531/Rep_10_igqxzz.webp',
    link: 'apuntes%20reparacion/12%20-%20Bios%20UEFI.rar',
  },
  {
    titulo: '13 - MEMORIAS RAM',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751667531/Rep_13_xjbcel.webp',
    link: 'apuntes%20reparacion/13-%20Memorias%20RAM.rar',
  },
  {
    titulo: '14 - TIPOS DE DISPOSITIVOS DE ALMACENAMIENTO',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751667530/Rep_14_l0wcmr.webp',
    link: 'apuntes%20reparacion/14%20-%20Dispositivos%20de%20almacenamiento.rar',
  },
  {
    titulo: '15 - DISCOS RÍGIDOS',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751667529/Rep_15_lnyy11.webp',
    link: 'apuntes%20reparacion/15%20-%20Discos%20Rigidos.rar',
  },
  {
    titulo: '16 - DISCOS SSD',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751667529/Rep_16_i4ctmg.webp',
    link: 'apuntes%20reparacion/16%20-%20Discos%20SSD.rar',
  },
  {
    titulo: '17 - FORMATOS DE PARTICIONES DE WINDOWS',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751667529/Rep_17_wki6v4.webp',
    link: 'apuntes%20reparacion/17%20-%20Formatos%20de%20particiones%20en%20Windows.rar',
  },
  {
    titulo: '18 - RESOLUCIÓN DE PROBLEMAS DISCOS RÍGIDOS',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751667530/Rep_18_qght1p.webp',
    link: 'apuntes%20reparacion/18%20-%20Resolucion%20de%20problemas%20Discos%20Rigidos.rar',
  },
  {
    titulo: '19 - FORMATEO BAJO NIVEL',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751667531/Rep_19-large_uuuos0.webp',
    link: 'apuntes%20reparacion/19%20-%20Formateo%20de%20disco%20rigido%20a%20bajo%20nivel.rar',
  },
  {
    titulo: '20 - TECNOLOGÍA RAID',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751667531/Rep_20_ntej91.webp',
    link: 'apuntes%20reparacion/20%20-%20Tecnologia%20Raid.rar',
  },
  {
    titulo: '21 - USO DEL TESTER',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751667530/Rep_12_vkyoym.webp',
    link: 'apuntes%20reparacion/9%20-%20Uso%20del%20tester.rar',
  },
  {
    titulo: '22 - GRABADORAS DE DVD',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751667530/Rep_21_lix2sj.webp',
    link: 'apuntes%20reparacion/21%20-%20Grabadoras%20de%20DVD.rar',
  },
  {
    titulo: '22 - PLACAS DE EXPANSIÓN',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751667531/Rep_22_xzox1h.webp',
    link: 'apuntes%20reparacion/22%20-%20PLACAS%20DE%20EXPANSION%20DE%20PC.rar',
  },
  {
    titulo: '23 - INTRODUCCIÓN SOFTWARE',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751667530/23_ggbrkd.webp',
    link: 'apuntes%20reparacion/24%20-%20Introduccion%20Software.rar',
  },
  {
    titulo: '25 - SISTEMAS OPERATIVOS',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751667530/Rep_26_ztvw6i.webp',
    link: 'apuntes%20reparacion/25%20-%20Sistemas%20Operativos.rar',
  },
  {
    titulo: '26 - INSTALACION WINDOWS 10',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751667529/Rep_27_crr0ra.webp',
    link: 'apuntes%20reparacion/26%20-%20Como%20instalar%20Windows%2010.rar',
  },
  {
    titulo: '27 - INSTALACION DE DIFERENTES SISTEMAS OPERATIVOS',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751667529/Rep_28_xsv1x5.webp',
    link: 'apuntes%20reparacion/27%20-%20INSTALACION%20DIFERENTES%20SIST%20OPERATIVOS.rar',
  },
  {
    titulo: '28 - INSTALACION WINDOWS XP',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751667529/Rep_29_rewk1i.webp',
    link: 'apuntes%20reparacion/28%20-%20Instalacion%20Windows%20XP.rar',
  },
  {
    titulo: '29 - QUE HACER DESPUES DE INSTALAR WINDOWS',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751667534/que_hacer_despues_hk5tk8.webp',
    link: 'apuntes%20reparacion/29%20-%20Que%20hacer%20despues%20de%20instalar%20Windows.rar',
  },
  {
    titulo: '30 - CREAR PENDRIVE BOOTEABLE CON RUFUS',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751667533/Rep_30_llrjta.webp',
    link: 'apuntes%20reparacion/30%20-%20Instalar%20Windows%20con%20Rufus.rar',
  },
  {
    titulo: '31 - CREAR DISCO DE ARRANQUE USB CON VARIOS S.O.',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751667533/Rep_31_ueeqhf.webp',
    link: 'apuntes%20reparacion/31%20-%20Crear%20un%20disco%20de%20arranque%20USB%20con%20varios%20SO.rar',
  },
  {
    titulo: '32 - WINDOWS 11',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751667533/Rep_32_p8k5cp.webp',
    link: 'apuntes%20reparacion/32%20-%20Windows%2011.rar',
  },
  {
    titulo: '33 - PACK DE SOFTWARE',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751667586/pack_software_j1tns7.webp',
    link: '',
  },
  {
    titulo: '34 - REGISTRO DE WINDOWS',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751667533/Rep_34_fxws7y.webp',
    link: 'apuntes%20reparacion/34%20-%20Registro%20de%20Windows.rar',
  },
  {
    titulo: '35 - MS CONFIG',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751667534/Rep_37_eptw70.webp',
    link: 'apuntes%20reparacion/35%20-%20MSconfig.rar',
  },
  {
    titulo: '36 - SERVICIOS DE WINDOWS',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751667533/Rep_35_nsyadu.webp',
    link: 'apuntes%20reparacion/36%20-%20Servicios%20de%20Windows.rar',
  },
  {
    titulo: '37 - FIREWALL',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751667581/Rep_52_wbluxk.webp',
    link: 'apuntes%20reparacion/43%20-%20firewall.rar',
  },
  {
    titulo: '38 - SISTEMA OPERATIVO MS-DOS',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751667587/Rep_38_xjudqy.webp',
    link: 'apuntes%20reparacion/37%20-%20MS-DOS.rar',
  },
  {
    titulo: '39 - CHKDSK',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751667588/Rep_40_bxb6fq.webp',
    link: 'apuntes%20reparacion/38%20-%20chkdsk.rar',
  },
  {
    titulo: '39 - REPARACION DE WINDOWS DESDE MEDIOS EXTERNOS',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751667578/rep_44_usnu4p.webp',
    link: 'apuntes%20reparacion/39%20-%20reparacion%20de%20Windows%2010%20desde%20medios%20externos.rar',
  },
  {
    titulo: '40 - ATRIBUTOS DE ARCHIVOS',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751667584/ATRIBUTOS_DE_ARCHIVOS_vzwotr.webp',
    link: '',
  },
  {
    titulo: '41 - ELIMINAR LA PARTICIÓN DE RECUPERACION',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751667578/Rep_41_bqkppp.webp',
    link: 'apuntes%20reparacion/41%20-%20Eliminar%20la%20particion%20de%20recuperacion%20en%20windows%2010.rar',
  },
  {
    titulo: '42 - VIRUS INFORMATICOS',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751667578/Rep_45_rnnz37.webp',
    link: 'apuntes%20reparacion/42%20-%20Virus%20informaticos.rar',
  },
  {
    titulo: '44 - ANALISIS DE LA FALLA DE UNA COMPUTADORA',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751667578/Rep_46_tllkya.webp',
    link: 'apuntes%20reparacion/44%20-%20ANALISIS%20DE%20LA%20FALLA%20DE%20UNA%20COMPUTADORA.rar',
  },
  {
    titulo: '45 - MANTENIMIENTO DEL PC',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751667579/Rep_47_gfubzs.webp',
    link: '',
  },
  {
    titulo: '46 - APLICACIONES EN SEGUNDO PLANO',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751667577/rep_42_sbl1ma.webp',
    link: '',
  },
  {
    titulo: '47 - QUE ES BACKUP',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751667579/Rep_48_v0fqht.webp',
    link: '',
  },
  {
    titulo: '48 - BACKUP DE CORREOS EN OUTLOOK',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751667580/Rep_49_tgpohz.webp',
    link: '',
  },
  {
    titulo: '49 - COMANDO XCOPY',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751667581/Rep_50_jfraf6.webp',
    link: '',
  },
  {
    titulo: '50 - REPARACION DE NOTEBOOK',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751667580/Rep_51_xwu2vm.webp',
    link: '',
  },
  {
    titulo: '51 - EQUIPOS ALL IN ONE',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751667584/ALL_IN_ONE_nxzh2g.webp',
    link: '',
  },
  {
    titulo: '52 - INTRODUCCION A LINUX',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751667582/Rep_53_arhvgf.webp',
    link: '',
  },
  {
    titulo: '53 - COMO HACER FUNCIONAR LAS ACTUALIZACIONES EN WINDOWS 7',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751667584/ACTUALIZACIONES_WINDOWS_7_ks3ns7.webp',
    link: '',
  },
  {
    titulo: '54 - WINDOWS SANDBOX',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751667584/WINDOWS_SANDBOX_xkpawi.webp',
    link: '',
  },
  {
    titulo: '55 - QUITAR CONTRASEÑA DE WINDOWS',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751667587/quitar_contrasena_eplr4e.webp',
    link: '',
  },
  {
    titulo: '56 - ACTIVAR PLAN ENERGÍA MÁXIMA',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751667586/MAXIMO_RENDIMIENTO_bkdejh.webp',
    link: '',
  },
  {
    titulo: '57 - INSTALACIÓN MICROSOFT OFFICE',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751667585/INSTALACION_OFFICE_rtr0bv.webp',
    link: '',
  },
  {
    titulo: '58 - MOTHERBOARD NO DA VIDEO',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751667586/mother_no_da_video_c6pqwm.webp',
    link: '',
  },
  {
    titulo: '59 - VENTA DE EQUIPAMIENTO INFORMATICO',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751667582/Rep_56_tvnjnl.webp',
    link: '',
  },
  {
    titulo: '60 - REPARACIÓN DE PC COMO SALIDA LABORAL',
    img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751667583/Rep_57_ls3he8.webp',
    link: '',
  },
  // ... puedes seguir agregando los materiales aquí ...
];

const ReparacionPC: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  const materialImg = 'http://crsinformatica.com.ar/curso/reparacion/images/Rep%201.png';
  return (
    <main className="min-h-screen bg-[#f8f9fa]">
      {/* Header Integrado */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 md:px-8 py-4 md:py-6 relative min-h-[48px] flex items-center">
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
            Reparación de PC
          </h1>
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-6 md:py-8">
        <div className="flex flex-col gap-8">
          <header className="mb-6 text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-left mt-[34px]">Curso de actualización, armado y reparación de PC - UTN</h2>
            <p className="text-lg font-semibold text-gray-700 text-left">En esta página encontrarás todo el material visto en clase en formato PDF para descargar y algunos archivos más que serán de utilidad.</p>
            <p className="mt-2 text-base text-gray-700 text-left">Estos archivos están comprimidos en formato WINRAR y con la contraseña:</p>
            <p className="font-mono text-lg text-gray-900 bg-gray-200 rounded px-2 py-1 inline-block text-left">www.CRSinformatica.com.ar</p>
            <p className="text-sm mt-1 text-gray-600 text-left">Respetar mayúsculas y minúsculas.</p>
            <p className="mt-4 font-bold text-gray-900 text-left">Prof. Cecilio San Martin</p>
          </header>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-left">Archivos en formato PDF para descargar</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {materialesModulo1.map((mat, i) => (
                <div
                  key={i}
                  className="bg-white border-[#e5e7eb] hover:shadow-lg hover:bg-[#f1f5f9] transition flex flex-col items-center p-4 gap-2 group cursor-pointer"
                >
                  <img src={mat.img} alt={mat.titulo} className="w-40 h-28 object-contain rounded mb-2 group-hover:scale-105 transition" />
                  <span className="text-center font-semibold text-gray-700 group-hover:text-gray-900 text-base">{mat.titulo}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default ReparacionPC; 