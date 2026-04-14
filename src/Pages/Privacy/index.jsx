import { useContext } from "react";
import Layout from '../../Components/Layout'
import { ToursContext } from "../../Context";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet.css";
import WhatsApp from '../../Components/WhatsApp';
import contentData from '../../data/policy.json';


function privacy() {  
    const { language } = useContext(ToursContext);
    const content = contentData[language] || contentData['en'];
    return (
        <Layout>
        <div className="text-justify font-[quicksand] w-[100%] md:w-[80%] h-[100%]  text-[black]/70 bg-[white]/0 z-10 p-10">
        <p className="text-[1.1rem] font-semibold">{content.privacy1}</p>
        <p className="font-semibold">{content.privacy2}</p>
        <p className="pt-2">{content.privacy3}</p>
        <p className="pt-4">{content.privacy4}</p>
        <p className="pt-2">{content.privacy5}</p>
        <p>{content.privacy6}</p>
        <ul className="list-disc pl-8">
          <li>{content.privacy7}</li>
          <li>{content.privacy8}</li>
          <li>{content.privacy9}</li>
          <li>{content.privacy10}</li>
          <li>{content.privacy11}</li>
          <li>{content.privacy12}</li>
        </ul>
        <p className="pt-2">{content.privacy13}</p>
        <p>{content.privacy14}</p>
        <ul className="list-disc pl-8">
          <li>{content.privacy15}</li>
          <li>{content.privacy16}</li>
          <li>{content.privacy17}</li>
          <li>{content.privacy18}</li>
          <li>{content.privacy19}</li>
        </ul>
        <p className="pt-2">{content.privacy20}</p>
        <p>{content.privacy21}</p>
        <ul className="list-disc pl-8">
          <li>{content.privacy22}</li>
          <li>{content.privacy23}</li>
        </ul>
        <p>{content.privacy24}</p>
        <p className="pt-2">{content.privacy5}</p>
        <p>{content.privacy26}</p>
        <p className="pt-2">{content.privacy27}</p>
        <p>{content.privacy28}</p>
        <ul className="list-disc pl-8">
          <li>{content.privacy29}</li>
          <li>{content.privacy30}</li>
          <li>{content.privacy31}</li>
          <li>{content.privacy32}</li>
        </ul>
        <p>{content.privacy33}</p>
        <p>{content.privacy34}</p>
        <p className="pt-2">{content.privacy35}</p>
        <p>{content.privacy36}</p>
        <p className="pt-2">{content.privacy37}</p>
        <p>{content.privacy38}</p>
        <p className="pt-2">{content.privacy39}</p>
        <p>{content.privacy40}</p>
        </div>        
        <WhatsApp/>
        </Layout>
    )
}
export default privacy