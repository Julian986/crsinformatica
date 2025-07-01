import React from 'react';

const libros = [
  {
    titulo: 'DISEÑO Y SOPORTE DE REDES DE COMPUTADORAS - CCNA CISCO',
    img: 'images/tmpF3BC.png',
    link: 'Libros/Diseno%20y%20soporte%20de%20redes%20de%20computadoras%20-%20K.%20Stewart%20y%20A.%20Adams.rar',
  },
  {
    titulo: 'EL ATACANTE INFORMÁTICO',
    img: 'images/tmp542C.png',
    link: 'Libros/El%20Atacante%20Informatico.rar',
  },
  {
    titulo: 'REDES DE COMPUTADORAS - ANDREW TANENBAUM',
    img: 'images/tmpC0B3.png',
    link: 'Libros/Fundamentos%20de%20Redes%20de%20Computadoras.rar',
  },
  {
    titulo: 'FUNDAMENTOS DE REDES',
    img: 'images/tmpFAE.png',
    link: 'Libros/Fundamentos%20de%20Redes.rar',
  },
  {
    titulo: 'IPv6 PARA OPERADORES DE RED',
    img: 'images/tmpE37C.png',
    link: 'Libros/Ipv6%20operadores%20red.rar',
  },
  {
    titulo: 'REDES DE DATOS Y SUS PROTOCOLOS',
    img: 'images/tmp279B.png',
    link: 'Libros/Redes%20de%20Datos%20y%20sus%20Protocolos.rar',
  },
  {
    titulo: 'REDES INFORMATICAS AVANZADO USERS',
    img: 'images/tmpB239.png',
    link: 'Libros/Redes%20informaticas%20avanzado.rar',
  },
  {
    titulo: 'TECNICO EN REDES Y SEGURIDAD USERS',
    img: 'images/tmpE502.png',
    link: 'Libros/Redes%20Users.rar',
  },
  {
    titulo: 'SEGURIDAD INFORMÁTICA',
    img: 'images/tmp2047.png',
    link: 'Libros/Seguridad%20Informatica%20Mc%20Graw%20Hill.rar',
  },
  {
    titulo: 'ADMINISTRADOR DE SERVIDORES USERS',
    img: 'images/tmp6E2A.png',
    link: 'Libros/Administrador%20de%20Servidores,%20USERS%20-%20Enzo%20Augusto%20Marchionni.rar',
  },
  {
    titulo: 'REDES PARA DUMMIES',
    img: 'images/tmpAAB7.png',
    link: 'Libros/Redes%20Para%20Dummies.rar',
  },
  {
    titulo: 'REDES WIFI EN ENTORNOS WINDOWS USERS',
    img: 'images/tmpF647.png',
    link: 'Libros/Redes%20WIFI%20En%20Entornos%20Windows,%20USERS%20-%20Gustavo%20Carballeiro.rar',
  },
  {
    titulo: 'CONFIGURACIÓN DEL BIOS',
    img: 'images/tmp8134.png',
    link: 'Libros/Configuracion%20del%20Bios.rar',
  },
  {
    titulo: 'MANUAL BLUE GRIFFON',
    img: 'images/tmpB891.png',
    link: 'Libros/Manual%20Blue%20Griffon.rar',
  },
  {
    titulo: 'WINDOWS AVANZADO USERS',
    img: 'images/tmp376.png',
    link: 'Libros/windows-10-avanzado.rar',
  },
  {
    titulo: 'MANUAL DE D.O.S.',
    img: 'images/tmpFC5E.png',
    link: 'Libros/Manual%20Completo%20ms-dos.rar',
  },
  {
    titulo: 'REPARACIÓN DE NOTEBOOKS',
    img: 'images/tmp389D.png',
    link: 'Libros/Reparacion%20de%20Notebooks%20libro%20Users.rar',
  },
  {
    titulo: 'OPCIONES DE LA BIOS',
    img: 'images/tmp8259.png',
    link: 'Libros/Todo%20acerca%20de%20la%20BIOS.rar',
  },
  {
    titulo: 'REDES WIRELESS',
    img: 'images/tmp169B.png',
    link: 'Libros/Redes%20Wireless,%20USERS%20-%20Diego%20Salvetti.rar',
  },
  {
    titulo: 'LISTADO DE PRECIOS ACTUALIZADO',
    img: 'images/tmp6C3E.png',
    link: 'Lista%20precios/listado%20de%20precios%20actualizado.rar',
  },
  {
    titulo: '101 SECRETOS DE HARDWARE',
    img: 'images/tmpADEC.png',
    link: 'Libros/101%20Secretos%20de%20Hardware,%20USERS%20-%20Daniel%20Bustamante,%20Juan%20Ghione.rar',
  },
  {
    titulo: 'ACCESS 2013 GUIA PRACTICA PARA EL USUARIO',
    img: 'images/tmpE9E8.png',
    link: 'Libros/Access%202013%20Guia%20Practica%20Para%20el%20Usuario,%20USERS%20-%20Gustavo%20Carballeiro.rar',
  },
  {
    titulo: 'ACCESS DESDE CERO',
    img: 'images/tmp208A.png',
    link: 'Libros/Access%20Desde%20Cero,%20USERS%20-%20Daniel%20Benchimol.rar',
  },
  {
    titulo: 'ACCESS MANUAL DEL USUARIO',
    img: 'images/tmp237F.png',
    link: 'Libros/Access%20Manual%20de%20Usuario,%20USERS%20-%20Paula%20Fleitas.rar',
  },
  {
    titulo: 'ADMINISTRADOR DE REDES WINDOWS',
    img: 'images/tmp678E.png',
    link: 'Libros/Administrador%20de%20Redes%20Windows,%20USERS%20-%20Paula%20Budris.rar',
  },
  {
    titulo: 'ANÁLISIS Y CAPTURA DE PAQUETES DE DATOS CON WIRESHARK',
    img: 'images/tmp8734.png',
    link: 'Libros/Analisis_and_Captura_Wireshark.rar',
  },
  {
    titulo: 'DISCOS DUROS',
    img: 'images/tmp3BF.png',
    link: 'Libros/Discos%20Duros,%20USERS%20-%20Javier%20Richarte.rar',
  },
  {
    titulo: 'EXCEL 2013 AVANZADO',
    img: 'images/tmp63C2.png',
    link: 'Libros/Excel%202013%20Avanzado,%20USERS%20-%20Gustavo%20Carballeiro.rar',
  },
  {
    titulo: 'EXCEL 2013 GUIA PRACTICA PARA EL USUARIO',
    img: 'images/tmp9E1D.png',
    link: 'Libros/Excel%202013%20Guia%20Practica%20Para%20el%20Usuario,%20USERS%20-%20Gustavo%20Carballeiro.rar',
  },
  {
    titulo: 'EXCEL PASO A PASO',
    img: 'images/tmpD441.png',
    link: 'Libros/Excel%20Paso%20a%20Paso,%20USERS%20-%20Daniel%20Benchimol.rar',
  },
  {
    titulo: 'FUNCIONES EN EXCEL',
    img: 'images/tmpAD3.png',
    link: 'Libros/Funciones%20en%20Excel,%20Gu%C3%ADa%20Practica%20de%20Uso%20y%20Aplicacion,%20USERS%20-%20Claudio%20Sanchez.rar',
  },
  {
    titulo: 'HARDWARE DESDE CERO',
    img: 'images/tmp3CE0.png',
    link: 'Libros/Hardware%20Desde%20Cero,%20USERS%20-%20Damian%20Cottino.rar',
  },
  {
    titulo: 'HARDWARE PASO A PASO',
    img: 'images/tmp6F3C.png',
    link: 'Libros/Hardware%20Paso%20a%20Paso,%20USERS%20-%20Daniel%20Benchimol.rar',
  },
  {
    titulo: 'LINUX DESDE CERO',
    img: 'images/tmpA88D.png',
    link: 'Libros/Linux%20desde%20Cero%20,%20USERS%20-%20Daniel%20Benchimol.rar',
  },
  {
    titulo: 'MACROS EN EXCEL 2013',
    img: 'images/tmpD962.png',
    link: 'Libros/Macros%20en%20Excel%202013,%20USERS%20-%20Viviana%20Zanini.rar',
  },
  {
    titulo: 'MOTHERBOARDS',
    img: 'images/tmpC3A.png',
    link: 'Libros/Motherboards,%20USERS%20-%20Javier%20Richarte.rar',
  },
  {
    titulo: 'OFFICE 365 MANUAL DE USUARIO',
    img: 'images/tmp4ADB.png',
    link: 'Libros/Office%20365%20Manual%20del%20Usuario,%20USERS%20-%20Virginia%20Caccuri.rar',
  },
  {
    titulo: 'OFFICE 2013 - GUIA PRACTICA PARA EL USUARIO',
    img: 'images/tmp8322.png',
    link: 'Libros/Office%202013%20Guia%20Practica%20Para%20el%20Usuario,%20USERS%20-%20Claudio%20Pena.rar',
  },
  {
    titulo: 'OFFICE DESDE CERO',
    img: 'images/tmpC07A.png',
    link: 'Libros/Office%20Desde%20Cero,%20USERS%20-%20Alejandro%20D%27Agostino.rar',
  },
  {
    titulo: 'OFFICE PASO A PASO',
    img: 'images/tmp1C28.png',
    link: 'Libros/Office%20Paso%20a%20Paso,%20USERS%20-%20Daniel%20Benchimol.rar',
  },
  {
    titulo: 'OVER CLOCKING',
    img: 'images/tmp5903.png',
    link: 'Libros/Over%20Clocking,%20USERS%20-%20Manuel%20Martinez.rar',
  },
  {
    titulo: 'PROYECTOS CON OFFICE',
    img: 'images/tmp94A6.png',
    link: 'Libros/Proyectos%20Con%20Office,%20USERS%20-%20Virginia%20Caccuri.rar',
  },
  {
    titulo: 'PROYECTOS CON ACCESS',
    img: 'images/tmpCE.png',
    link: 'Libros/Proyectos%20Con%20Access,%20USERS%20-%20Paula%20Fleitas.rar',
  },
  {
    titulo: 'REDES - ADMINISTRACIÓN DE SERVIDORES',
    img: 'images/tmp3889.png',
    link: 'Libros/Redes%20Administracion%20de%20Servidores,%20USERS%20-%20Valentin%20Almiron.rar',
  },
  {
    titulo: 'REDES - CONFIGURACIÓN Y ADMINISTRACIÓN',
    img: 'images/tmp7091.png',
    link: 'Libros/Redes%20Configuracion%20y%20Administracion,%20USERS%20-%20Valentin%20Almiron.rar',
  },
  {
    titulo: 'REDES DESDE CERO',
    img: 'images/tmpACA1.png',
    link: 'Libros/Redes%20desde%20cero.rar',
  },
  {
    titulo: 'REDES - DISPOSITIVOS E INSTALACIÓN',
    img: 'images/tmpE854.png',
    link: 'Libros/Redes%20Dispositivos%20e%20Instalacion,%20USERS%20-%20Valentin%20Almiron.rar',
  },
  {
    titulo: 'REDES - LA GUIA DEFINITIVA',
    img: 'images/tmp1CB3.png',
    link: 'Libros/Redes%20La%20guia%20definitiva,%20USERS%20-%20Claudio%20Pena.rar',
  },
  {
    titulo: 'REPARACIÓN DE IMPRESORAS LASER',
    img: '',
    link: 'Libros/Reparacion%20de%20Impresoras%20Laser,%20USERS%20-%20Daniel%20Singermann.rar',
  },
  {
    titulo: 'REPARACIÓN DE IMPRESORAS',
    img: 'images/tmp99B5.png',
    link: 'Libros/Reparacion%20de%20Impresoras,%20USERS%20-%20Daniel%20Singermann.rar',
  },
  {
    titulo: 'REPARACION DE PC DESDE CERO',
    img: 'images/tmp24CF.png',
    link: 'Libros/Reparacion%20de%20PC%20Desde%20Cero,%20USERS%20-%20Gustavo%20Carballeiro.rar',
  },
  {
    titulo: 'SECRETOS DE WORD Y EXCEL AL MAXIMO',
    img: 'images/tmp5FA7.png',
    link: 'Libros/Secretos%20de%20Word%20y%20Excel%20al%20Maximo,%20USERS%20-%20Gustavo%20Carballeiro.rar',
  },
  {
    titulo: 'SECRETOS EXCEL DESDE CERO',
    img: 'images/tmp8E78.png',
    link: 'Libros/Secretos%20Excel%20Desde%20Cero,%20USERS%20-%20Claudio%20Sanchez.rar',
  },
  {
    titulo: 'SERVICIO TÉCNICO AVANZADO',
    img: 'images/tmpC44E.png',
    link: 'Libros/Servicio%20Tecnico%20Avanzado,%20USERS%20-%20Gustavo%20Carballeiro%20-%202%20Edicion.rar',
  },
  {
    titulo: 'SITIOS WEB DESDE CERO',
    img: 'images/tmpFBBB.png',
    link: 'Libros/Sitios%20Web%20desde%20Cero,%20USERS%20-%20Daniel%20Benchimol.rar',
  },
  {
    titulo: 'SOLUCIONES PC DESDE CERO',
    img: 'images/tmp2C80.png',
    link: 'Libros/Soluciones%20PC%20Desde%20Cero,%20USERS%20-%20Claudio%20Pena.rar',
  },
  {
    titulo: 'TABLAS Y GRÁFICOS DINÁMICOS EN EXCEL 2013',
    img: 'images/tmp699A.png',
    link: 'Libros/Tablas%20y%20Graficos%20Dinamicos%20en%20Excel%202013,%20USERS%20-%20Viviana%20Zanini.rar',
  },
  {
    titulo: 'TÉCNICO HARDWARE DESDE CERO',
    img: 'images/tmpC140.png',
    link: 'Libros/Tecnico%20Hardware%20Desde%20Cero,%20USERS%20-%20Daniel%20Benchimol.rar',
  },
  {
    titulo: 'TÉCNICO HARDWARE',
    img: 'images/tmpF031.png',
    link: 'Libros/Tecnico%20Hardware,%20USERS%20-%20Javier%20Richarte.rar',
  },
  {
    titulo: 'TÉCNICO PROFESIONAL DE PC',
    img: 'images/tmp2358.png',
    link: 'Libros/Tecnico%20Profesional%20de%20PC,%20USERS%20-%20Gustavo%20Carballeiro.rar',
  },
  {
    titulo: 'TÉCNICO WINDOWS',
    img: 'images/tmp5D35.png',
    link: 'Libros/Tecnico%20Windows,%20USERS%20-%20Claudio%20Alejandro%20Pena%20Millahual.rar',
  },
  {
    titulo: 'TRUCOS Y SECRETOS PC',
    img: 'images/tmp8FDF.png',
    link: 'Libros/Trucos%20y%20Secretos%20PC,%20USERS%20-%20Daniel%20Benchimol.rar',
  },
  {
    titulo: 'UBUNTU LINUX',
    img: 'images/tmpC41F.png',
    link: 'Libros/Ubuntu,%20USERS,%20Daniel%20Benchimol.rar',
  },
  {
    titulo: 'VIRTUALIZACIÓN CON VMWARE',
    img: 'images/tmpFAE0.png',
    link: 'Libros/Virtualizacion%20con%20VMware,%20USERS%20-%20Enzo%20Marchionni,%20Octavio%20Formoso.rar',
  },
  {
    titulo: 'WINDOWS 10 GUIA COMPLETA',
    img: 'images/tmp4557.png',
    link: 'Libros/Windows%2010%20Guia%20Completa,%20USERS%20-%20Claudio%20Alejandro%20Pena%20Millahual.rar',
  },
  {
    titulo: 'DE WINDOWS A LINUX',
    img: 'images/tmp79E5.png',
    link: 'Libros/De_Windows_a_Linux.rar',
  },
  {
    titulo: 'ETHICAL HACKING 2.0',
    img: 'images/tmpB346.png',
    link: 'Libros/Ethical%20hacking%202.0.rar',
  },
  {
    titulo: 'SERVICIO TÉCNICO AVANZADO',
    img: 'images/tmpEFD3.png',
    link: 'Libros/Servicio%20tecnico%20avanzado.rar',
  },
  {
    titulo: 'AUDITORIA DE SEGURIDAD INFORMÁTICA',
    img: 'images/tmp2069.png',
    link: 'Libros/AUDITORIA%20DE%20SEGURIDAD%20INFORMATICA%20alvaro%20Gomez%20Vieites.rar',
  },
  {
    titulo: 'CRIPTOGRAFIA',
    img: 'images/Criptografia%20Desde%20los%20Sistemas%20Clasicos.png',
    link: 'Libros/Criptografia%20Desde%20los%20Sistemas%20Clasicos%20Hasta%20el%20Futuro%20de%20la%20Privacidad,%20USERS%20-%20Federico%20Pacheco.rar',
  },
  {
    titulo: 'WINDOWS SERVER 2022',
    img: 'images/windows%20server%202022%20libro.png',
    link: 'Libros/Windows-Server-2022-Libro-Castellano-by-palentino.rar',
  },
  {
    titulo: 'INSTALACIONES DE FIBRA OPTICA',
    img: 'images/Fibra%20optica.png',
    link: 'Libros/Instalaciones-de-Fibra-Optica.rar',
  },
];

const Libros: React.FC = () => {
  const libroImg = 'http://crsinformatica.com.ar/images/slide828e7e6e41eb41baaaeff0b8d986ee6d2.jpg';

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0a0f1c] py-8 px-4 md:px-8 text-white">
      <section className="max-w-6xl mx-auto flex flex-col gap-8">
        <header className="mb-6 text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-left mt-[34px]">Libros en formato PDF para descargar</h1>
          <p className="text-lg font-semibold text-white/80 text-left">Aquí encontrarás una selección de libros en PDF para descargar, útiles para el estudio y la formación en informática, redes, hardware y software.</p>
        </header>
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {libros.map((libro, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm rounded-xl shadow hover:shadow-lg hover:bg-[#2563eb]/20 transition flex flex-col items-center p-4 gap-2 group cursor-pointer"
              >
                <img src={libroImg} alt={libro.titulo} className="w-44 h-60 object-contain rounded mb-2 group-hover:scale-105 transition" />
                <span className="text-center font-semibold text-[#e3e2e2] group-hover:text-white text-base">{libro.titulo}</span>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
};

export default Libros; 