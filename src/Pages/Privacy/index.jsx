import { useContext } from "react";
import Layout from '../../Components/Layout'
import { ToursContext } from "../../Context";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet.css";
import WhatsApp from '../../Components/WhatsApp';
import contentData from '../../data/medical.json';
import { withBase } from '../../Utils/path';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// Set default icon manually
const images = [
  '/assets/images/medical/portrait2.jpg',
  '/assets/images/medical/portrait3.jpg',
  '/assets/images/medical/portrait4.jpg'
];

function privacy() {  
    const { language } = useContext(ToursContext);
    const medical = contentData.medical;
    const t = medical[0].translations[language] || medical[0].translations.en;
    
    return (
        <Layout>
        <div className="text-justify font-[quicksand] w-[100%] md:w-[80%] h-[100%]  text-[black]/70 bg-[white]/0 z-10 p-10">
        <p className="text-[1.1rem] font-semibold">Aviso de Privacidad</p>
        <p className="font-semibold">Los Cabos Moments</p>
        <p className="pt-2"> Última actualización: 01 de Septiembre de 2025</p>
        <p className="pt-4">En cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, Los Cabos Moments (en lo sucesivo, “el Responsable”), con domicilio en [coloca tu dirección física o administrativa], pone a disposición de los usuarios el presente Aviso de Privacidad.</p>
        <p className="pt-2">1. Datos personales que recabamos</p>
        <p>Para brindar nuestros servicios, podremos solicitar los siguientes datos personales:</p>
        <ul className="list-disc pl-8">
          <li>Nombre completo</li>
          <li>Correo electrónico</li>
          <li>Número telefónico</li>
          <li>País de residencia</li>
          <li>Información de pago (en caso de procesar reservas directamente)</li>
          <li>Preferencias de viaje o servicios turísticos solicitados</li>
        </ul>
        <p className="pt-2">2. Finalidades del tratamiento</p>
        <p>Los datos personales serán utilizados para:</p>
        <ul className="list-disc pl-8">
          <li>Gestionar solicitudes de información, cotizaciones y reservas.</li>
          <li>Confirmar y procesar servicios turísticos, experiencias y traslados.</li>
          <li>Emitir facturación correspondiente (en caso de requerirse).</li>
          <li>Dar seguimiento a dudas, comentarios o quejas.</li>
          <li>Informar sobre promociones, paquetes y novedades de Los Cabos Moments (cuando el usuario haya dado su consentimiento expreso).</li>
        </ul>
        <p className="pt-2">3. Transferencia de datos</p>
        <p>Tus datos personales podrán ser compartidos con terceros únicamente en los siguientes casos:</p>
        <ul className="list-disc pl-8">
          <li>Proveedores de servicios turísticos (hoteles, operadores de tours, transportación, restaurantes) para gestionar la reserva solicitada.</li>
          <li>Autoridades competentes, en caso de requerimiento legal.</li>
        </ul>
        <p>En ningún caso venderemos, rentaremos o cederemos tu información personal a terceros ajenos al servicio solicitado.</p>
        <p className="pt-2">4. Medidas de seguridad</p>
        <p>Implementamos medidas técnicas, administrativas y físicas para proteger los datos personales contra daño, pérdida, alteración, destrucción o uso no autorizado.</p>
        <p className="pt-2">5. Derechos ARCO</p>
        <p>El titular de los datos personales tiene derecho a:</p>
        <ul className="list-disc pl-8">
          <li>Acceder a sus datos.</li>
          <li>Rectificarlos en caso de ser inexactos.</li>
          <li>Cancelarlos cuando considere que no se requieren para las finalidades mencionadas.</li>
          <li>Oponerse al tratamiento de los mismos.</li>
        </ul>
        <p>Para ejercer tus derechos ARCO, puedes enviar una solicitud al correo: loscabosmoments@gmail.com.</p>
        <p>La solicitud deberá incluir: nombre completo, descripción clara de los datos respecto de los cuales deseas ejercer derechos, copia de una identificación oficial y cualquier otro documento que facilite la localización de tus datos.</p>
        <p className="pt-2">6. Limitación del uso o divulgación de datos</p>
        <p>Si deseas dejar de recibir comunicaciones promocionales por parte de Los Cabos Moments, puedes solicitarlo al correo loscabosmoments@gmail.com o a través de los mecanismos indicados en los mensajes electrónicos que enviemos.</p>
        <p className="pt-2">7. Cambios al Aviso de Privacidad</p>
        <p>Este Aviso de Privacidad podrá ser modificado en cualquier momento para cumplir con actualizaciones legales o cambios en los servicios de Los Cabos Moments. Dichas modificaciones estarán disponibles en nuestro sitio web www.loscabosmoments.com.</p>
        <p className="pt-2">8. Consentimiento</p>
        <p>Al proporcionar tus datos personales en este sitio web o a través de cualquier canal de contacto con Los Cabos Moments, manifiestas tu consentimiento expreso para el tratamiento de los mismos conforme al presente Aviso de Privacidad.</p>
        </div>        
        <WhatsApp/>
        </Layout>
    )
}
export default privacy