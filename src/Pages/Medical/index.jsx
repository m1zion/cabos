import { useContext } from "react";
import Layout from '../../Components/Layout'
import { ToursContext } from "../../Context";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet.css";
import 'react-multi-carousel/lib/styles.css';
import WhatsApp from '../../Components/WhatsApp';
import contentData from '../../data/medical.json';
import { withBase } from '../../Utils/path';
import { Link } from "react-router-dom";
import Logo from '/assets/images/medical/portrait.jpg'
// Set default icon manually

const icons = import.meta.glob('../../assets/icons/*.svg', {
  eager: true,
  import: 'default',
});
const responsive = {
  desktop: {breakpoint: { max: 3000, min: 1024 }, items: 1, },
  tablet: {breakpoint: { max: 1024, min: 464 }, items: 1, },
  mobile: {breakpoint: { max: 464, min: 0 }, items: 1, },
};
function medical() {  
    const { language } = useContext(ToursContext);
    const medical = contentData.medical;
    const t = medical[0].translations[language] || medical[0].translations.en;
    return (
        <Layout>
         <section 
        id="restaurants" 
        className="font-[quicksand] relative flex justify-start scroll-mt-20 w-full">    
          <div 
          className="w-[100%] sm:w-[70%] h-[100%]  text-[#256A77] bg-[white]/0 relative z-10 p-10">
            <div className="flex gap-3 mt-10 text-[1.5rem] sm:text-[2.5rem]">
              <img  className="h-15 w-auto"
              src={withBase('/assets/images/arteMedico.png')} alt="artemedico"></img>
              <p>{t.title}</p>
            </div>
            <p className="text-justify mt-6 text-[1.2rem]">{t.text2}</p>
            <p className="text-justify mt-1 text-[.9rem]">{t.text3}</p>
            <p className="text-justify mt-5 text-[1rem]">{t.text4}</p>
            <p className="text-justify mt-5 text-[1rem]">{t.text5}</p>
            <ul class="list-disc pl-10 mt-4">
                <li className="text-justify mt-2 text-[1rem]">{t.brand1}</li>
                <li className="text-justify mt-2 text-[1rem]">{t.brand2}</li>
                <li className="text-justify mt-2 text-[1rem]">{t.brand3}</li>
            </ul>
            <p className="text-justify mt-7 text-[1rem]">{t.text6}</p>
            <p className="text-justify mt-5 text-[1rem]">{t.text7}</p>
            <p className="text-justify mt-2 text-[1rem]">{t.text8}</p>
            <ul class="list-disc pl-10 mt-4">
                {t.list1.map((list1) => {
                    return (  <li className="text-justify mt-2 text-[1rem]">{list1}</li>  );
                })
                }
            </ul>             
            <p className="text-justify mt-5 text-[1rem]">{t.text9}</p>
            <p className="text-justify mt-2 text-[1rem]">{t.text10}</p>
            <ul class="list-disc pl-10 mt-4">
                {t.list2.map((list2) => {
                    return (  <li className="text-justify mt-2 text-[1rem]">{list2}</li>  );
                })
                }
            </ul>  
            <Link to={`/Medical`}>
              <button className="hover:bg-[#ADD2DA]/20 cursor-pointer mt-8 border border-[#256A77] p-1 w-[120px] rounded-md">
                Conoce Mas
              </button>
            </Link>
          </div>
          <div
            className="w-[100%] sm:w-[51%] h-full absolute top-0 right-0"
          >
             <img
            src={Logo}
            className="h-[100%] w-full object-cover  hidden sm:block"
            alt="Logo"
            />
            <img
            src={Logo}
            className="h-[100%] w-full object-cover opacity-18 block sm:hidden"
            alt="Logo"
            />
            <div className="absolute hidden sm:block inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,1)_20%,rgba(255,255,255,1)_20%,rgba(255,255,255,0)_50%,rgba(255,255,255,0)_100%)]"></div>

          </div>
        </section>
        <WhatsApp/>
        </Layout>
    )
}
export default medical