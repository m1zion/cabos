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

function terms() {  
    const { language } = useContext(ToursContext);
    const medical = contentData.medical;
    const t = medical[0].translations[language] || medical[0].translations.en;
    
    return (
        <Layout>
        <div className="text-justify font-[quicksand] w-[100%] md:w-[80%] h-[100%]  text-[black]/70 bg-[white]/0 z-10 p-10">
        <p className="text-[1.1rem] font-semibold">Términos y Condiciones de Uso</p>
        <p className="font-semibold">Los Cabos Moments</p>
        <p className="pt-2"> Última actualización: 01 de Septiembre de 2025</p>
        <p className="pt-4">1. Objeto</p>
        <p>Los presentes Términos y Condiciones regulan el acceso y uso del sitio web de Los Cabos Moments [coloca aquí tu dominio], así como la contratación de los servicios turísticos, experiencias y paquetes publicados en él.</p>  
        <p className="pt-2">2. Aceptación</p> 
        <p>El acceso, navegación y/o utilización del sitio implica la aceptación expresa de estos Términos y Condiciones. Si no estás de acuerdo, deberás abstenerte de utilizarlo.</p>
        <p className="pt-2">3. Naturaleza de los servicios</p>
        <p>Los Cabos Moments funge como intermediario entre el usuario y los proveedores de servicios turísticos (hoteles, restaurantes, transportación, tours, operadores locales, entre otros).</p>
        <p>Cada servicio se encuentra sujeto a la disponibilidad, políticas y condiciones específicas de cada proveedor.</p>
        <p>Los Cabos Moments no se hace responsable de modificaciones, retrasos, cancelaciones o incumplimientos atribuibles a los proveedores externos.</p>
        <p className="pt-2">4. Uso del sitio web</p>
        <p>El usuario se obliga a:</p>
        <ul className="list-disc pl-8">
          <li>Hacer uso lícito del sitio y de los servicios ofrecidos.</li>
          <li>No realizar actividades fraudulentas, de suplantación de identidad o que atenten contra el funcionamiento del sitio.</li>
          <li>Proporcionar información veraz, exacta y completa al momento de realizar solicitudes o reservas.</li>
        </ul>
        <p className="pt-2">5. Propiedad intelectual</p>
        <p>El contenido del sitio, incluyendo textos, logotipos, fotografías, material audiovisual y diseño gráfico, es propiedad de Los Cabos Moments o de terceros con licencia de uso. Queda prohibida su reproducción, distribución o explotación sin autorización previa y por escrito.</p>
        <p className="pt-2">6. Precios y comisiones</p>
        <p>Los precios mostrados en el sitio están sujetos a cambios sin previo aviso hasta la confirmación de la reserva.</p>
        <p>Algunas experiencias incluyen comisiones para agencias o intermediarios, mismas que serán informadas con anticipación.</p>
        <p className="pt-2">7. Política de cancelaciones y reembolsos</p>
        <p>Cada experiencia, tour o servicio contratado a través de Los Cabos Moments está sujeta a la política de cancelación específica del proveedor.</p>
        <p>En general, aplican las siguientes reglas:</p>
        <ul className="list-disc pl-8">
          <li>Cancelaciones con más de 15 días de anticipación: reembolso total, descontando posibles cargos administrativos o bancarios.</li>
          <li>Cancelaciones entre 14 y 7 días antes del servicio: reembolso del 50%.</li>
          <li>Cancelaciones con menos de 7 días de anticipación o no presentación (no-show): no hay reembolso.</li>
          <li>En casos de fuerza mayor (clima extremo, cierre de actividades por disposiciones gubernamentales u otros eventos ajenos al cliente), Los Cabos Moments hará las gestiones necesarias con los proveedores para reprogramar la experiencia o emitir un reembolso parcial o total, según las políticas del prestador de servicios.</li>
        </ul>
        <p>Los reembolsos se procesarán a través del mismo método de pago utilizado por el cliente y podrán tardar hasta 30 días hábiles, dependiendo de la institución bancaria.</p>
        <p className="pt-2">8. Limitación de responsabilidad</p>
        <p>Los Cabos Moments no garantiza la disponibilidad ininterrumpida del sitio.</p>
        <p>No será responsable por daños, pérdidas o perjuicios derivados de la contratación con terceros, accidentes, enfermedades, retrasos, cambios de itinerario o cualquier otra circunstancia fuera de su control directo.</p>  
        <p className="pt-2">9. Enlaces externos</p>
        <p>El sitio puede contener enlaces a páginas web de terceros. Los Cabos Moments no asume responsabilidad sobre el contenido, políticas o servicios ofrecidos en dichos sitios.</p>
        <p className="pt-2">10. Privacidad y protección de datos</p>
        <p>El tratamiento de los datos personales recabados a través del sitio se regirá por nuestro Aviso de Privacidad, disponible en [coloca aquí enlace a tu aviso de privacidad].</p>
        <p className="pt-2">11. Modificaciones</p>
        <p>Los Cabos Moments podrá modificar en cualquier momento los presentes Términos y Condiciones. Las modificaciones serán efectivas a partir de su publicación en el sitio web.</p>
        <p className="pt-2">12. Legislación aplicable y jurisdicción</p>
        <p>Este documento se rige por las leyes de los Estados Unidos Mexicanos. Para la interpretación y cumplimiento de los presentes Términos y Condiciones, las partes se someten a la jurisdicción de los tribunales competentes en Los Cabos, Baja California Sur, renunciando a cualquier otro fuero que pudiera corresponderles.</p>                     
        </div>        
        <WhatsApp/>
        </Layout>
    )
}
export default terms