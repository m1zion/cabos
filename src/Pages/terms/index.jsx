import { useContext } from "react";
import Layout from '../../Components/Layout'
import { ToursContext } from "../../Context";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet.css";
import WhatsApp from '../../Components/WhatsApp';
import contentData from '../../data/terms.json';
import 'react-multi-carousel/lib/styles.css';

function terms() {  
    const { language } = useContext(ToursContext);
    const content = contentData[language] || contentData['en']; // fallback to English
    return (
        <Layout>
        <div className="text-justify font-[quicksand] w-[100%] md:w-[80%] h-[100%]  text-[black]/70 bg-[white]/0 z-10 p-10">
        <p className="text-[1.1rem] font-semibold">{content.text1}</p>
        <p className="font-semibold">{content.text2}</p>
        <p className="pt-2">{content.text3}</p>
        <p className="pt-4">{content.text4}</p>
        <p>{content.text5}</p>  
        <p className="pt-2">{content.text6}</p> 
        <p>{content.text7}</p>
        <p className="pt-2">{content.text8}</p>
        <p>{content.text9}</p>
        <p>{content.text10}</p>
        <p>{content.text11}</p>
        <p className="pt-2">{content.text12}</p>
        <p>{content.text13}</p>
        <ul className="list-disc pl-8">
          <li>{content.text14}</li>
          <li>{content.text15}</li>
          <li>{content.text16}</li>
        </ul>
        <p className="pt-2">{content.text17}</p>
        <p>{content.text18}</p>
        <p className="pt-2">{content.text19}</p>
        <p>{content.text20}</p>
        <p>{content.text21}</p>
        <p className="pt-2">{content.text22}</p>
        <p>{content.text23}</p>
        <p>{content.text24}</p>
        <ul className="list-disc pl-8">
          <li>{content.text25}</li>
          <li>{content.text26}</li>
          <li>{content.text27}</li>
          <li>{content.text28}</li>
        </ul>
        <p>{content.text29}</p>
        <p className="pt-2">{content.text30}</p>
        <p>{content.text31}</p>
        <p>{content.text32}</p>  
        <p className="pt-2">{content.text33}</p>
        <p>{content.text34}</p>
        <p className="pt-2">{content.text35}</p>
        <p>{content.text36}</p>
        <p className="pt-2">{content.text37}</p>
        <p>{content.text38}</p>
        <p className="pt-2">{content.text39}</p>
        <p>{content.text40}</p>                     
        </div>        
        <WhatsApp/>
        </Layout>
    )
}
export default terms