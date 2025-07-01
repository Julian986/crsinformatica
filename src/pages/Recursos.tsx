import React from 'react';

// Recursos para Reparación de PC
const recursosPC = [
  { titulo: 'DRIVER TALENT', img: 'images/driver%20talent.jpg', link: 'Software/20%20-%20Driver.Talent.Pro.v8.1.11.24.Multilingual.Incl.Crack.rar' },
  { titulo: 'BLEACHBIT', img: 'images/BLEACHBIT.jpeg', link: 'Software/10%20-%20BleachBit.rar' },
  { titulo: 'PACK ACTIVADORES WINDOWS Y OFFICE', img: 'images/ACTIVATOR.jpg', link: 'Software/32%20-%20Pack%20Activadores%20Windows-Office.rar' },
  { titulo: 'WISE REGISTRY CLEANER', img: 'images/WISE%20REGISTRY%20CLEANER.png', link: 'Software/49%20-%20Wise.Registry.Cleaner.Pro.v10.8.1.702.Multilingual.Incl.Patch.rar' },
  { titulo: 'ADWCLEANER', img: 'images/ADWCLEANER.png', link: 'Software/6%20-%20adwcleaner.rar' },
  { titulo: 'FREE PC AUDIT', img: 'images/FREE%20PC%20AUDIT.jpg', link: 'Software/23%20-%20free%20pc%20audit.rar' },
  { titulo: 'DOUBLE DRIVER', img: 'images/DOUBLE%20DRIVER.jpg', link: 'Software/18%20-%20Double%20Driver.rar' },
  { titulo: 'ACRONIS TRUE IMAGE WIN PE', img: 'images/ACRONIS.png', link: 'https://drive.google.com/file/d/1zRYun-kITX1CYEzOA8jQBGXeZd3rgtfY/view?usp=sharing' },
  { titulo: 'ANTIVIRUS DE MICROSOFT PARA WINDOWS 7', img: 'images/SECURITY%20ESSENTIALS.png', link: 'Software/8%20-%20Antivirus%20Microsoft%20para%20W%207.rar' },
  { titulo: 'WINRAR', img: 'images/winrar.jpg', link: 'Software/48%20-%20WinRAR.v6.00.FINAL.ES.x86.x64.REGGED.exe' },
  { titulo: 'CD BURNER XP', img: 'images/CD%20BURNER.jpg', link: 'Software/13%20-%20CD%20Burner.rar' },
  { titulo: 'NIRSOFT BLUE SCREEN VIEWER', img: 'images/nirsoft2.gif', link: 'Software/11%20-%20BlueScreenView.rar' },
  { titulo: 'CPU THERMOMETER', img: 'images/CPU%20THERMOMETHER.png', link: 'Software/14%20-%20Core-Temp-setup.zip' },
  { titulo: 'CPU-Z', img: 'images/CPU-Z.jpeg', link: 'Software/15%20-%20cpu-z_2.11-en.rar' },
  { titulo: 'NAVEGADOR FIREFOX', img: 'images/FIREFOX.jpg', link: 'https://www.mozilla.org/es-AR/firefox/new/' },
  { titulo: 'CRYSTAL DISK INFO', img: 'images/CRYSTAL%20DISK.jpg', link: 'Software/16%20-%20Crystal%20Disk%20Info.rar' },
  { titulo: 'NINITE', img: 'images/NINITE.jpg', link: 'Software/Ninite/ninite.txt' },
  { titulo: 'CCLEANER', img: 'images/CCLEANER.jpg', link: 'Software/12%20-%20ccleaner.rar' },
  { titulo: 'HDD LOW LEVEL FORMAT', img: 'images/HDD%20LOW%20LEVEL.jpg', link: 'Software/24%20-%20HDD%20Low%20Level%20Format.4.30.rar' },
  { titulo: 'HDD REGENERATOR', img: 'images/HDD%20REGENERATOR.jpg', link: 'Software/25%20-%20HDD.Regenerator%20v2017.rar' },
  { titulo: 'O&O APPBUSTER', img: 'images/appbuster.png', link: 'Software/30%20-%20O%20&%20O%20Appbuster.rar' },
  { titulo: 'PRODUCT KEY VIEWER', img: 'images/PRODUCT%20KEY.jpg', link: 'Software/34%20-%20Product%20Key.rar' },
  { titulo: 'OFFICE TOOLS', img: 'images/OFFICE%20TOOLS.jpg', link: 'Software/31%20-%20Office%20Tools.rar' },
  { titulo: 'RUFUS', img: 'images/RUFUS.jpg', link: 'Software/35%20-%20Rufus-4.5.rar' },
  { titulo: 'ANTIVIRUS MC AFEE STINGER PORTABLE', img: 'images/43mcafee%20stinger.png', link: 'Software/27%20-%20McAfeeStingerPortable.rar' },
  { titulo: 'ANTIVIRUS DR. WEB CURE IT', img: 'images/DR%20WEB.jpg', link: 'https://free.drweb-av.es/download+cureit+free/' },
  { titulo: 'ANTIVIRUS ESET ONLINE SCANNER', img: 'images/ESET.png', link: 'Software/22%20-%20Eset%20online%20scanner.rar' },
  { titulo: 'YUMI', img: 'images/Yumi.png', link: 'Software/YUMI-exFAT-1.0.2.9.exe' },
  { titulo: 'VENTOY', img: 'images/ventoy.png', link: 'Software/38%20-%20ventoy-1.0.76-windows.zip' },
  { titulo: 'SNAPPY DRIVERS INSTALLER', img: 'images/snappy-driver-installer-2019_600.jpeg', link: 'https://sdi-tool.org/' },
  { titulo: 'HIRENS BOOT VERSIONES ANTIGUAS', img: 'images/HIRENS%20BOOT.jpg', link: 'https://www.hirensbootcd.org/old-versions/' },
  { titulo: 'HIRENS BOOT WIN 10 PE X64', img: 'images/HIRENS%20BOOT%20PE.png', link: 'https://drive.google.com/file/d/1p4h3vPqDVusvCYoYOTXLaW3vwpURGNE0/view?usp=sharing' },
  { titulo: 'WINDOWS XP SERVICE PACK 3 ISO', img: 'images/WindowsXP.png', link: 'Software/46%20-%20Windows_XP_SP3_ESP.rar' },
  { titulo: 'DESCARGAR ISO WINDOWS 10 32 Y 64 BITS ORIGINAL', img: 'images/windows-10.png', link: 'https://www.microsoft.com/es-es/software-download/windows10' },
  { titulo: 'DESCARGAR ISO WINDOWS 11 24H2', img: 'images/WINDOWS%2011.png', link: 'https://www.microsoft.com/es-es/software-download/windows11' },
  { titulo: 'WINDOWS 7 32 BITS, DESCARGA DESDE GOOGLE DRIVE', img: 'images/WINDOWS%207.jpg', link: 'https://drive.google.com/file/d/1_TkKC1Dx5iS7E1I9I6kkRXkLY1xPWffa/view?usp=sharing' },
  { titulo: 'WINDOWS 7 64 BITS, DESCARGA DESDE GOOGLE DRIVE', img: 'images/WINDOWS%207.jpg', link: 'https://drive.google.com/file/d/116_uvW34zvRnQDUUiLyaKMg39VB1XIP4/view?usp=sharing' },
  { titulo: 'WINDOWS 10 32 BITS, DESCARGA DESDE GOOGLE DRIVE', img: 'images/windows-10.png', link: 'https://drive.google.com/file/d/1Am2QlMUG1KT5CrC4g2Pbdzc1YPu3Mf3i/view?usp=sharing' },
  { titulo: 'WINDOWS 10 64 BITS, DESCARGA DESDE GOOGLE DRIVE', img: 'images/windows-10.png', link: 'https://drive.google.com/file/d/1M-_AUQS6B5_fMMqvLR5Qu0k5YX9k-f07/view?usp=sharing' },
  { titulo: 'WINDOWS 11 23H2, DESCARGA DESDE GOOGLE DRIVE', img: 'images/WINDOWS%2011.png', link: 'https://drive.google.com/file/d/1xyARXOMH02V2UaCmvAkPvffNPH_mJgvC/view?usp=sharing' },
  { titulo: 'WINDOWS 11 24H2, DESCARGA DESDE GOOGLE DRIVE', img: 'images/WINDOWS%2011.png', link: 'https://drive.google.com/file/d/1BHYXIyZ8fpbCJD6v1lSsh_e6KAQ1FzaU/view?usp=sharing' },
  { titulo: 'WINDOWS 11 22H2 DESBLOQUEADO', img: 'images/WINDOWS%2011.png', link: 'https://drive.google.com/file/d/1eBp06yJgnfyK7sAhFoDaWUAe5vliakAf/view?usp=sharing' },
  { titulo: 'WINDOWS 11 24H2 DESBLOQUEADO', img: 'images/WINDOWS%2011.png', link: 'https://drive.google.com/file/d/1oFkXNp-l8bRd9S4I-Cr66p99aWpGygKZ/view?usp=sharing' },
  { titulo: 'WIN PE 10 SERGUEI STRELEC', img: 'images/serguei%20strelec.png', link: '' },
  { titulo: 'EASUS DATA RECOVERY WIZARD', img: 'images/DATA%20RECOVERY.jpg', link: 'https://drive.google.com/file/d/1XivR4OdvA7-zkfP7elpDl3DfGn5IW8jE/view?usp=sharing' },
  { titulo: 'NORTON GHOST 5 BOOT CD', img: 'images/norton%20ghost-2.jpg', link: 'https://drive.google.com/file/d/1tdhDjjN4bJb74JE3O2eZb56jTLNVobVw/view?usp=sharing' },
  { titulo: 'RESET WINDOWS UPDATE TOOL', img: 'images/reset%20windows%20update.png', link: 'Software/Reset%20Windows%20Update%20Tool.zip' },
  { titulo: 'ACTUALIZACIONES WINDOWS 7 32 BITS', img: 'images/actualizaciones%20w7.png', link: 'https://drive.google.com/file/d/1dq9O-UErX4KwmvMde1vpcdaHjaWITUEM/view?usp=sharing' },
  { titulo: 'ACTUALIZACIONES WINDOWS 7 64 BITS', img: 'images/actualizaciones%20w7.png', link: 'https://drive.google.com/file/d/1cFrXv-WLnzU0Ykr-mjUqmE9JyNVRvOZb/view?usp=sharing' },
  { titulo: 'AUTOLOGON', img: 'images/windows-10.png', link: 'https://drive.google.com/file/d/1i1V3vHiEYGfPYnT2Iamur3CcnjkphAfn/view?usp=sharing' },
  { titulo: 'MICROSOFT OFFICE 2013 - 2016 - 2019 - 2021', img: 'images/Microsoft.Office.2021.Pro.Plus.PerpetualVL.png', link: 'Software/28%20-%20Microsoft%20Office%202013-2016-2019%2032%20y%2064%20bits%20ESP.rar' },
  { titulo: 'PASSWORD VIEWER', img: 'images/PASSWORD%20VIEWER.jpg', link: 'https://drive.google.com/file/d/1oOKrwWYkf0LcwLOkEtvevtADmNcCxQDw/view?usp=sharing' },
  { titulo: 'STARTUP', img: 'images/STARTUP.png', link: 'https://drive.google.com/file/d/1tacguFhwbj9HsrQc2AL2wxTUNT0YobZa/view?usp=sharing' },
  { titulo: 'UNPARK CPU', img: 'images/UNPARK%20CPU.png', link: 'https://drive.google.com/file/d/1-I51norZiwxNsSACigjXCus6gZgUxEwe/view?usp=sharing' },
  { titulo: 'WINDOWS 11 MENU CLASICO', img: 'images/tmpD626.png', link: 'https://drive.google.com/file/d/1JY-TUHJ4Y1LE85sGQ-G8M8baUc0kr8kp/view?usp=sharing' },
  { titulo: 'LISTADO DE SERVICIOS DE WINDOWS 11', img: 'images/SERVICIOS%20WINDOWS%2011.png', link: 'Lista%20precios/Listado%20de%20Servicios%20de%20Windows.rar' },
  { titulo: 'LISTADO DE PRECIOS AL PÚBLICO', img: 'images/costos%20servicios.png', link: 'Lista%20precios/listado%20de%20precios%20actualizado.rar' },
];

// Web Apps
const recursosWeb = [
  { titulo: 'CUAL ES MI IP?', img: 'images/testeo%20web.png', link: 'https://www.cual-es-mi-direccion-ip.com/' },
  { titulo: 'TESTEO DE PUERTOS', img: 'images/testeo%20puertos.png', link: 'https://www.yougetsignal.com/tools/open-ports/%20' },
  { titulo: 'VELOCIDAD INTERNET', img: 'images/velocidad%20internet.png', link: 'https://www.speedtest.net/es' },
  { titulo: 'ESTADO SERVIDOR NO-IP', img: 'images/estado%20servidor%20no%20ip.png', link: 'https://status.noip.com/' },
  { titulo: 'ESTADO DE SERVICIOS', img: 'images/estado%20de%20servicios.png', link: 'https://downdetector.com.ar/' },
  { titulo: 'LOCALIZACIÓN DE IP', img: 'images/geolocalizacion%20ip.png', link: 'https://www.geolocation.com/es' },
  { titulo: 'CHEQUEO DE SPAM', img: 'images/chequeo%20spam.png', link: 'https://check.spamhaus.org/' },
  { titulo: 'CHEQUEO DE DNS', img: 'images/chequeo%20dns.png', link: 'https://www.whatsmydns.net/' },
];

// Recursos para Redes y otros
const recursosRedes = [
  { titulo: 'SERVIDOR FTP LITE', img: 'images/FTP%20SERVER%20LITE.jpg', link: 'Software/64%20-%20ftp%20server%203%20lite.zip' },
  { titulo: 'CLIENTE FTP', img: 'images/FTP.png', link: 'Software/62%20-%20cliente%20FTP.rar' },
  { titulo: 'WINDOWS ADMIN CENTER', img: 'images/Windows%20admin%20center.png', link: 'Software/68%20-%20Windows%20Admin%20Center.rar' },
  { titulo: 'TCP VIEW', img: 'images/tcp%20view.png', link: 'Software/66%20-%20TCPView.rar' },
  { titulo: 'MESSAGE ANALYZER', img: 'images/MESSAGE%20ANALYZER.png', link: 'Software/65%20-%20Message%20Analyzer.rar' },
  { titulo: 'WIRESHARK', img: 'images/WIRESHARK.jpg', link: 'Software/71%20-%20Wireshark-4.2.4-x64.rar' },
  { titulo: 'CISCO PACKET TRACER', img: 'images/cisco-packet-tracer.png', link: 'Software/61%20-%20Cisco.Packet.Tracer.v8.1.0.0721-722.Incl.Patch.rar' },
  { titulo: 'TEAMVIEWER FREE', img: 'images/teamviewer.jpg', link: 'https://www.teamviewer.com/latam/download/windows/' },
  { titulo: 'WAKE ON LAN', img: 'images/wake%20on%20line.png', link: 'Software/73%20-%20WOLSetup15.rar' },
  { titulo: 'RADMIN', img: 'images/RADMIN.png', link: 'https://www.radmin.com/es/download/' },
  { titulo: 'ADVANCED IP SCANNER', img: 'images/ADVANCED%20IP%20SCANNER.jpg', link: 'Software/60%20-%20Advanced_IP_Scanner_2.5.3850.rar' },
  { titulo: 'ARCHIVO GPEDIT.EXE', img: 'images/gpedit.msc-download.jpg', link: 'Software/4%20-%20add_gpedit_msc.zip' },
  { titulo: 'DYNAMIC DNS DE NO-IP.COM', img: 'images/DNS%20IP.jpg', link: 'https://www.noip.com/es-MX/download?page=win' },
  { titulo: 'VIRTUAL BOX', img: 'images/virtualbox-logo.png', link: 'Software/67%20-%20VirtualBox-7.0.10-158379-Win.rar' },
  { titulo: 'VNC', img: 'images/vnc.png', link: 'https://www.realvnc.com/es/connect/download/vnc/' },
  { titulo: 'DESCARGA ISO WINDOWS SERVER 2022', img: 'images/win2022.png', link: 'https://www.microsoft.com/es-es/evalcenter/evaluate-windows-server-2022' },
  { titulo: 'SOLARWINDS DESKTOP TOOLSET DEMO', img: 'images/SOLARWINDS.png', link: 'Software/SolarWinds-DesktopToolset-v2024.1.rar' },
  { titulo: 'WINDOWS SERVER 2016 FULL', img: 'images/Windows%20server%202016.jpg', link: 'https://drive.google.com/file/d/1DPUKwbjnGn_HO76QVUXQXC42-ogr2BT8/view?usp=sharing' },
];

// Arduino
const recursosArduino = [
  { titulo: 'FRITZING', img: 'images/Fritzing.png', link: 'Software/FRITZING%201.0.4.rar' },
  { titulo: 'BIBLIOTECAS FRITZING', img: 'images/Bibliotecas%20fritzing.png', link: 'Software/BIBLIOTECAS%20FRITZING.rar' },
  { titulo: 'ARDUINO IDE', img: 'images/ARDUINO%20IDE.png', link: 'Software/2%20-%20Arduino-ide_2.3.4_Windows_64bit.rar' },
];

const Recursos: React.FC = () => {
  const recursoImg = 'http://crsinformatica.com.ar/images/slide828e7e6e41eb41baaaeff0b8d986ee6d2.jpg';

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0a0f1c] py-8 px-4 md:px-8 text-white">
      <section className="max-w-7xl mx-auto flex flex-col gap-8">
        <header className="mb-6 text-left">
          {/* <img src="images/recursos_EESA-2.png" alt="Recursos" className="w-full max-w-md mb-4" /> */}
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-6 mt-[34px]">Software de utilidad para Técnicos en informática</h1>
          <p className="text-base font-semibold mb-2">Selección de links de descarga de software útil para el técnico de PC y Redes.</p>
          <p className="text-base mb-2">Algunos archivos están comprimidos en formato WINRAR y con la contraseña:</p>
          <p className="font-mono text-lg text-white bg-gray-800 rounded px-2 py-1 inline-block mb-2">www.CRSinformatica.com.ar</p>
          <p className="text-sm mb-2">Respetar mayúsculas y minúsculas.</p>
          <p className="font-bold text-white">Prof. Cecilio San Martin</p>
        </header>
        <section>
          <h2 className="text-xl font-bold text-white mb-4 text-left">Programas para curso Reparación de PC</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {recursosPC.map((recurso, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl shadow hover:shadow-lg hover:bg-[#2563eb]/20 transition flex flex-col items-center p-4 gap-2 group cursor-pointer">
                <img src={recursoImg} alt={recurso.titulo} className="w-44 h-44 object-contain rounded mb-2 group-hover:scale-105 transition" />
                <span className="text-center font-semibold text-[#e3e2e2] group-hover:text-white text-base">{recurso.titulo}</span>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white mb-4 text-left">Aplicaciones Web</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {recursosWeb.map((recurso, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl shadow hover:shadow-lg hover:bg-[#2563eb]/20 transition flex flex-col items-center p-4 gap-2 group cursor-pointer">
                <img src={recursoImg} alt={recurso.titulo} className="w-44 h-44 object-contain rounded mb-2 group-hover:scale-105 transition" />
                <span className="text-center font-semibold text-[#e3e2e2] group-hover:text-white text-base">{recurso.titulo}</span>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white mb-4 text-left">Programas para Curso Administrador de Redes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {recursosRedes.map((recurso, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl shadow hover:shadow-lg hover:bg-[#2563eb]/20 transition flex flex-col items-center p-4 gap-2 group cursor-pointer">
                <img src={recursoImg} alt={recurso.titulo} className="w-44 h-44 object-contain rounded mb-2 group-hover:scale-105 transition" />
                <span className="text-center font-semibold text-[#e3e2e2] group-hover:text-white text-base">{recurso.titulo}</span>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white mb-4 text-left">Programas de Arduino</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {recursosArduino.map((recurso, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl shadow hover:shadow-lg hover:bg-[#2563eb]/20 transition flex flex-col items-center p-4 gap-2 group cursor-pointer">
                <img src={recursoImg} alt={recurso.titulo} className="w-44 h-44 object-contain rounded mb-2 group-hover:scale-105 transition" />
                <span className="text-center font-semibold text-[#e3e2e2] group-hover:text-white text-base">{recurso.titulo}</span>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
};

export default Recursos; 