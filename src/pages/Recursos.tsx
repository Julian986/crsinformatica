import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Recursos para Reparación de PC
const recursosPC = [
  { titulo: 'DRIVER TALENT', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671312/driver_talent_crltii.webp', link: 'Software/20%20-%20Driver.Talent.Pro.v8.1.11.24.Multilingual.Incl.Crack.rar' },
  { titulo: 'BLEACHBIT', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671227/BLEACHBIT_qavoks.webp', link: 'Software/10%20-%20BleachBit.rar' },
  { titulo: 'PACK ACTIVADORES WINDOWS Y OFFICE', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671221/ACTIVATOR_zxylgs.webp', link: 'Software/32%20-%20Pack%20Activadores%20Windows-Office.rar' },
  { titulo: 'WISE REGISTRY CLEANER', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671218/WISE_REGISTRY_CLEANER_qqicmt.webp', link: 'Software/49%20-%20Wise.Registry.Cleaner.Pro.v10.8.1.702.Multilingual.Incl.Patch.rar' },
  { titulo: 'ADWCLEANER', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671223/ADWCLEANER_kuvaoc.webp', link: 'Software/6%20-%20adwcleaner.rar' },
  { titulo: 'FREE PC AUDIT', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671313/FREE_PC_AUDIT_fmp8sz.webp', link: 'Software/23%20-%20free%20pc%20audit.rar' },
  { titulo: 'DOUBLE DRIVER', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671272/DOUBLE_DRIVER_eoltyt.webp', link: 'Software/18%20-%20Double%20Driver.rar' },
  { titulo: 'ACRONIS TRUE IMAGE WIN PE', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671220/ACRONIS_gig2qp.webp', link: 'https://drive.google.com/file/d/1zRYun-kITX1CYEzOA8jQBGXeZd3rgtfY/view?usp=sharing' },
  { titulo: 'ANTIVIRUS DE MICROSOFT PARA WINDOWS 7', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671354/SECURITY_ESSENTIALS_r2ttfr.webp', link: 'Software/8%20-%20Antivirus%20Microsoft%20para%20W%207.rar' },
  { titulo: 'WINRAR', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671214/winrar_olqrpg.webp', link: 'Software/48%20-%20WinRAR.v6.00.FINAL.ES.x86.x64.REGGED.exe' },
  { titulo: 'CD BURNER XP', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671229/CD_BURNER_wriaaz.webp', link: 'Software/13%20-%20CD%20Burner.rar' },
  { titulo: 'NIRSOFT BLUE SCREEN VIEWER', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671325/nirsoft2_go6kfi.webp', link: 'Software/11%20-%20BlueScreenView.rar' },
  { titulo: 'CPU THERMOMETER', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671232/CPU_THERMOMETHER_gziawp.webp', link: 'Software/14%20-%20Core-Temp-setup.zip' },
  { titulo: 'CPU-Z', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671232/CPU-Z_amqkws.webp', link: 'Software/15%20-%20cpu-z_2.11-en.rar' },
  { titulo: 'NAVEGADOR FIREFOX', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671316/FIREFOX_snls66.webp', link: 'https://www.mozilla.org/es-AR/firefox/new/' },
  { titulo: 'CRYSTAL DISK INFO', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671232/CRYSTAL_DISK_t1g3ky.webp', link: 'Software/16%20-%20Crystal%20Disk%20Info.rar' },
  { titulo: 'NINITE', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671323/NINITE_df3aat.webp', link: 'Software/Ninite/ninite.txt' },
  { titulo: 'CCLEANER', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671228/CCLEANER_emnogk.webp', link: 'Software/12%20-%20ccleaner.rar' },
  { titulo: 'HDD LOW LEVEL FORMAT', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671320/HDD_LOW_LEVEL_te2jbh.webp', link: 'Software/24%20-%20HDD%20Low%20Level%20Format.4.30.rar' },
  { titulo: 'HDD REGENERATOR', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671320/HDD_REGENERATOR_e6svih.webp', link: 'Software/25%20-%20HDD.Regenerator%20v2017.rar' },
  { titulo: 'O&O APPBUSTER', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671223/appbuster_pede1u.webp', link: 'Software/30%20-%20O%20&%20O%20Appbuster.rar' },
  { titulo: 'PRODUCT KEY VIEWER', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671327/PRODUCT_KEY_lybuni.webp', link: 'Software/34%20-%20Product%20Key.rar' },
  { titulo: 'OFFICE TOOLS', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671325/OFFICE_TOOLS_xv68od.webp', link: 'Software/31%20-%20Office%20Tools.rar' },
  { titulo: 'RUFUS', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671329/RUFUS_bjqiv1.webp', link: 'Software/35%20-%20Rufus-4.5.rar' },
  { titulo: 'ANTIVIRUS MC AFEE STINGER PORTABLE', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671219/43mcafee_stinger_urhsvr.webp', link: 'Software/27%20-%20McAfeeStingerPortable.rar' },
  { titulo: 'ANTIVIRUS DR. WEB CURE IT', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671312/DR_WEB_ss8pcd.webp', link: 'https://free.drweb-av.es/download+cureit+free/' },
  { titulo: 'ANTIVIRUS ESET ONLINE SCANNER', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671312/ESET_d9fuwf.webp', link: 'Software/22%20-%20Eset%20online%20scanner.rar' },
  { titulo: 'YUMI', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671218/Yumi_vbjynh.webp', link: 'Software/YUMI-exFAT-1.0.2.9.exe' },
  { titulo: 'VENTOY', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671167/ventoy_adklhu.webp', link: 'Software/38%20-%20ventoy-1.0.76-windows.zip' },
  { titulo: 'SNAPPY DRIVERS INSTALLER', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751672110/snappy-driver-installer-2019_600_usudac.webp', link: 'https://sdi-tool.org/' },
  { titulo: 'HIRENS BOOT VERSIONES ANTIGUAS', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671322/HIRENS_BOOT_ynyrus.webp', link: 'https://www.hirensbootcd.org/old-versions/' },
  { titulo: 'HIRENS BOOT WIN 10 PE X64', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671321/HIRENS_BOOT_PE_ivnbgi.webp', link: 'https://drive.google.com/file/d/1p4h3vPqDVusvCYoYOTXLaW3vwpURGNE0/view?usp=sharing' },
  { titulo: 'WINDOWS XP SERVICE PACK 3 ISO', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671214/WindowsXP_vzk6lc.webp', link: 'Software/46%20-%20Windows_XP_SP3_ESP.rar' },
  { titulo: 'DESCARGAR ISO WINDOWS 10 32 Y 64 BITS ORIGINAL', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671214/windows-10_lyhwtc.webp', link: 'https://www.microsoft.com/es-es/software-download/windows10' },
  { titulo: 'DESCARGAR ISO WINDOWS 11 24H2', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671170/WINDOWS_11_rjvrfp.webp', link: 'https://www.microsoft.com/es-es/software-download/windows11' },
  { titulo: 'WINDOWS 7 32 BITS, DESCARGA DESDE GOOGLE DRIVE', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671170/WINDOWS_7_yz9dnb.webp', link: 'https://drive.google.com/file/d/1_TkKC1Dx5iS7E1I9I6kkRXkLY1xPWffa/view?usp=sharing' },
  { titulo: 'WINDOWS 7 64 BITS, DESCARGA DESDE GOOGLE DRIVE', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671170/WINDOWS_7_yz9dnb.webp', link: 'https://drive.google.com/file/d/116_uvW34zvRnQDUUiLyaKMg39VB1XIP4/view?usp=sharing' },
  { titulo: 'WINDOWS 10 32 BITS, DESCARGA DESDE GOOGLE DRIVE', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671214/windows-10_lyhwtc.webp', link: 'https://drive.google.com/file/d/1Am2QlMUG1KT5CrC4g2Pbdzc1YPu3Mf3i/view?usp=sharing' },
  { titulo: 'WINDOWS 10 64 BITS, DESCARGA DESDE GOOGLE DRIVE', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671214/windows-10_lyhwtc.webp', link: 'https://drive.google.com/file/d/1M-_AUQS6B5_fMMqvLR5Qu0k5YX9k-f07/view?usp=sharing' },
  { titulo: 'WINDOWS 11 23H2, DESCARGA DESDE GOOGLE DRIVE', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671170/WINDOWS_11_rjvrfp.webp', link: 'https://drive.google.com/file/d/1xyARXOMH02V2UaCmvAkPvffNPH_mJgvC/view?usp=sharing' },
  { titulo: 'WINDOWS 11 24H2, DESCARGA DESDE GOOGLE DRIVE', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671170/WINDOWS_11_rjvrfp.webp', link: 'https://drive.google.com/file/d/1BHYXIyZ8fpbCJD6v1lSsh_e6KAQ1FzaU/view?usp=sharing' },
  { titulo: 'WINDOWS 11 22H2 DESBLOQUEADO', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671170/WINDOWS_11_rjvrfp.webp', link: 'https://drive.google.com/file/d/1eBp06yJgnfyK7sAhFoDaWUAe5vliakAf/view?usp=sharing' },
  { titulo: 'WINDOWS 11 24H2 DESBLOQUEADO', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671170/WINDOWS_11_rjvrfp.webp', link: 'https://drive.google.com/file/d/1oFkXNp-l8bRd9S4I-Cr66p99aWpGygKZ/view?usp=sharing' },
  { titulo: 'WIN PE 10 SERGUEI STRELEC', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751672110/serguei_strelec_m3hgqr.webp', link: '' },
  { titulo: 'EASUS DATA RECOVERY WIZARD', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671233/DATA_RECOVERY_etaczi.webp', link: 'https://drive.google.com/file/d/1XivR4OdvA7-zkfP7elpDl3DfGn5IW8jE/view?usp=sharing' },
  { titulo: 'NORTON GHOST 5 BOOT CD', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671324/norton_ghost-2_wkxmst.webp', link: 'https://drive.google.com/file/d/1tdhDjjN4bJb74JE3O2eZb56jTLNVobVw/view?usp=sharing' },
  { titulo: 'RESET WINDOWS UPDATE TOOL', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671328/reset_windows_update_toley2.webp', link: 'Software/Reset%20Windows%20Update%20Tool.zip' },
  { titulo: 'ACTUALIZACIONES WINDOWS 7 32 BITS', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671222/actualizaciones_w7_1_b1rytx.webp', link: 'https://drive.google.com/file/d/1dq9O-UErX4KwmvMde1vpcdaHjaWITUEM/view?usp=sharing' },
  { titulo: 'ACTUALIZACIONES WINDOWS 7 64 BITS', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671222/actualizaciones_w7_1_b1rytx.webp', link: 'https://drive.google.com/file/d/1cFrXv-WLnzU0Ykr-mjUqmE9JyNVRvOZb/view?usp=sharing' },
  { titulo: 'AUTOLOGON', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671214/windows-10_lyhwtc.webp', link: 'https://drive.google.com/file/d/1i1V3vHiEYGfPYnT2Iamur3CcnjkphAfn/view?usp=sharing' },
  { titulo: 'MICROSOFT OFFICE 2013 - 2016 - 2019 - 2021', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671323/Microsoft.Office.2021.Pro.Plus.PerpetualVL_es89cp.webp', link: 'Software/28%20-%20Microsoft%20Office%202013-2016-2019%2032%20y%2064%20bits%20ESP.rar' },
  { titulo: 'PASSWORD VIEWER', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671325/PASSWORD_VIEWER_t5pjuf.webp', link: 'https://drive.google.com/file/d/1oOKrwWYkf0LcwLOkEtvevtADmNcCxQDw/view?usp=sharing' },
  { titulo: 'STARTUP', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751672110/STARTUP_rdut52.webp', link: 'https://drive.google.com/file/d/1tacguFhwbj9HsrQc2AL2wxTUNT0YobZa/view?usp=sharing' },
  { titulo: 'UNPARK CPU', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671166/UNPARK_CPU_eukpmz.webp', link: 'https://drive.google.com/file/d/1-I51norZiwxNsSACigjXCus6gZgUxEwe/view?usp=sharing' },
  { titulo: 'WINDOWS 11 MENU CLASICO', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671165/tmpD626_ceh86v.webp', link: 'https://drive.google.com/file/d/1JY-TUHJ4Y1LE85sGQ-G8M8baUc0kr8kp/view?usp=sharing' },
  { titulo: 'LISTADO DE SERVICIOS DE WINDOWS 11', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671723/SERVICIOS_WINDOWS_11_vocfy7.webp', link: 'Lista%20precios/Listado%20de%20Servicios%20de%20Windows.rar' },
  { titulo: 'LISTADO DE PRECIOS AL PÚBLICO', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671231/costos_servicios_qzrb6f.webp', link: 'Lista%20precios/listado%20de%20precios%20actualizado.rar' },
];

// Web Apps
const recursosWeb = [
  { titulo: 'CUAL ES MI IP?', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671164/testeo_web_vjapd5.webp', link: 'https://www.cual-es-mi-direccion-ip.com/' },
  { titulo: 'TESTEO DE PUERTOS', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671164/testeo_puertos_gjvkqx.webp', link: 'https://www.yougetsignal.com/tools/open-ports/%20' },
  { titulo: 'VELOCIDAD INTERNET', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671167/velocidad_internet_lrs724.webp', link: 'https://www.speedtest.net/es' },
  { titulo: 'ESTADO SERVIDOR NO-IP', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671313/estado_servidor_no_ip_yxkdit.webp', link: 'https://status.noip.com/' },
  { titulo: 'ESTADO DE SERVICIOS', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671312/estado_de_servicios_bjqvqz.webp', link: 'https://downdetector.com.ar/' },
  { titulo: 'LOCALIZACIÓN DE IP', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671316/geolocalizacion_ip_rhiuqv.webp', link: 'https://www.geolocation.com/es' },
  { titulo: 'CHEQUEO DE SPAM', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671230/chequeo_spam_fsobpq.webp', link: 'https://check.spamhaus.org/' },
  { titulo: 'CHEQUEO DE DNS', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671229/chequeo_dns_icifgc.webp', link: 'https://www.whatsmydns.net/' },
];

// Recursos para Redes y otros
const recursosRedes = [
  { titulo: 'SERVIDOR FTP LITE', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671316/FTP_SERVER_LITE_lfrylu.webp', link: 'Software/64%20-%20ftp%20server%203%20lite.zip' },
  { titulo: 'CLIENTE FTP', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671317/FTP_vmape1.webp', link: 'Software/62%20-%20cliente%20FTP.rar' },
  { titulo: 'WINDOWS ADMIN CENTER', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671184/Windows_admin_center_cr3e9y.webp', link: 'Software/68%20-%20Windows%20Admin%20Center.rar' },
  { titulo: 'TCP VIEW', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751672110/MESSAGE_ANALYZER_ubrbch.webp', link: 'Software/66%20-%20TCPView.rar' },
  { titulo: 'MESSAGE ANALYZER', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751672110/MESSAGE_ANALYZER_ubrbch.webp', link: 'Software/65%20-%20Message%20Analyzer.rar' },
  { titulo: 'WIRESHARK', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671215/WIRESHARK_xqis87.webp', link: 'Software/71%20-%20Wireshark-4.2.4-x64.rar' },
  { titulo: 'CISCO PACKET TRACER', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671231/cisco-packet-tracer_slvtxy.webp', link: 'Software/61%20-%20Cisco.Packet.Tracer.v8.1.0.0721-722.Incl.Patch.rar' },
  { titulo: 'TEAMVIEWER FREE', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671160/teamviewer_acra0q.webp', link: 'https://www.teamviewer.com/latam/download/windows/' },
  { titulo: 'WAKE ON LAN', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671169/wake_on_line_ruidw8.webp', link: 'Software/73%20-%20WOLSetup15.rar' },
  { titulo: 'RADMIN', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671328/RADMIN_thcb9h.webp', link: 'https://www.radmin.com/es/download/' },
  { titulo: 'ADVANCED IP SCANNER', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671224/ADVANCED_IP_SCANNER_ul3uzi.webp', link: 'Software/60%20-%20Advanced_IP_Scanner_2.5.3850.rar' },
  { titulo: 'ARCHIVO GPEDIT.EXE', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671319/gpedit.msc-download_dmganp.webp', link: 'Software/4%20-%20add_gpedit_msc.zip' },
  { titulo: 'DYNAMIC DNS DE NO-IP.COM', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671234/DNS_IP_pu4rot.webp', link: 'https://www.noip.com/es-MX/download?page=win' },
  { titulo: 'VIRTUAL BOX', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671167/virtualbox-logo_uta0re.webp', link: 'Software/67%20-%20VirtualBox-7.0.10-158379-Win.rar' },
  { titulo: 'VNC', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671167/vnc_b8svdi.webp', link: 'https://www.realvnc.com/es/connect/download/vnc/' },
  { titulo: 'DESCARGA ISO WINDOWS SERVER 2022', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671170/win2022_sohkow.webp', link: 'https://www.microsoft.com/es-es/evalcenter/evaluate-windows-server-2022' },
  { titulo: 'SOLARWINDS DESKTOP TOOLSET DEMO', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751672109/SOLARWINDS_igeojr.webp', link: 'Software/SolarWinds-DesktopToolset-v2024.1.rar' },
  { titulo: 'WINDOWS SERVER 2016 FULL', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671214/Windows_server_2016_iownat.webp', link: 'https://drive.google.com/file/d/1DPUKwbjnGn_HO76QVUXQXC42-ogr2BT8/view?usp=sharing' },
];

// Arduino
const recursosArduino = [
  { titulo: 'FRITZING', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671316/Fritzing_mjtfey.webp', link: 'Software/FRITZING%201.0.4.rar' },
  { titulo: 'BIBLIOTECAS FRITZING', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671229/Bibliotecas_fritzing_yftp0k.webp', link: 'Software/BIBLIOTECAS%20FRITZING.rar' },
  { titulo: 'ARDUINO IDE', img: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1751671225/ARDUINO_IDE_ibwkvn.webp', link: 'Software/2%20-%20Arduino-ide_2.3.4_Windows_64bit.rar' },
];

const Recursos: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
/*   const recursoImg = 'http://crsinformatica.com.ar/images/slide828e7e6e41baaaeff0b8d986ee6d2.jpg'; */

  return (
    <main className="min-h-screen bg-white">
      {/* Header Integrado */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-6 relative min-h-[48px] flex items-center">
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
            Recursos
          </h1>
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-8">
        <div className="flex flex-col gap-8">
          <header className="mb-6 text-left">
            {/* <img src="images/recursos_EESA-2.png" alt="Recursos" className="w-full max-w-md mb-4" /> */}
            <h2 className="text-2xl md:text-3xl font-bold text-[#22292f] mb-6 mt-[34px]">Software de utilidad para Técnicos en informática</h2>
            <p className="text-base font-semibold mb-2">Selección de links de descarga de software útil para el técnico de PC y Redes.</p>
            <p className="text-base mb-2">Algunos archivos están comprimidos en formato WINRAR y con la contraseña:</p>
            <p className="font-mono text-lg text-white bg-gray-800 rounded px-2 py-1 inline-block mb-2">www.CRSinformatica.com.ar</p>
            <p className="text-sm mb-2">Respetar mayúsculas y minúsculas.</p>
            <p className="font-bold text-white">Prof. Cecilio San Martin</p>
          </header>
          <section>
            <h2 className="text-xl font-bold text-[#22292f] mb-4 text-left">Programas para curso Reparación de PC</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {recursosPC.map((recurso, i) => (
                <div key={i} className="bg-white border-[#e5e7eb] rounded-xl shadow hover:shadow-lg hover:bg-[#f1f5f9] transition flex flex-col items-center p-4 gap-2 group cursor-pointer">
                  <img src={recurso.img} alt={recurso.titulo} className="w-44 h-44 object-contain rounded mb-2 group-hover:scale-105 transition" />
                  <span className="text-center font-semibold text-[#6b7280] group-hover:text-white text-base">{recurso.titulo}</span>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#22292f] mb-4 text-left">Aplicaciones Web</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {recursosWeb.map((recurso, i) => (
                <div key={i} className="bg-white border-[#e5e7eb] rounded-xl shadow hover:shadow-lg hover:bg-[#f1f5f9] transition flex flex-col items-center p-4 gap-2 group cursor-pointer">
                  <img src={recurso.img} alt={recurso.titulo} className="w-44 h-44 object-contain rounded mb-2 group-hover:scale-105 transition" />
                  <span className="text-center font-semibold text-[#6b7280] group-hover:text-white text-base">{recurso.titulo}</span>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#22292f] mb-4 text-left">Programas para Curso Administrador de Redes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {recursosRedes.map((recurso, i) => (
                <div key={i} className="bg-white border-[#e5e7eb] rounded-xl shadow hover:shadow-lg hover:bg-[#f1f5f9] transition flex flex-col items-center p-4 gap-2 group cursor-pointer">
                  <img src={recurso.img} alt={recurso.titulo} className="w-44 h-44 object-contain rounded mb-2 group-hover:scale-105 transition" />
                  <span className="text-center font-semibold text-[#6b7280] group-hover:text-white text-base">{recurso.titulo}</span>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#22292f] mb-4 text-left">Programas de Arduino</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {recursosArduino.map((recurso, i) => (
                <div key={i} className="bg-white border-[#e5e7eb] rounded-xl shadow hover:shadow-lg hover:bg-[#f1f5f9] transition flex flex-col items-center p-4 gap-2 group cursor-pointer">
                  <img src={recurso.img} alt={recurso.titulo} className="w-44 h-44 object-contain rounded mb-2 group-hover:scale-105 transition" />
                  <span className="text-center font-semibold text-[#6b7280] group-hover:text-white text-base">{recurso.titulo}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Recursos; 