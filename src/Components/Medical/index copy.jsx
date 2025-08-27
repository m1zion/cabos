import { useContext } from "react";
import contentData from '../../data/medical.json';
import { ToursContext } from "../../Context";
import { withBase } from '../../Utils/path';
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
//OPCION DE COLORES 2.1
//#DDE7E6 #ADD2DA #378BA1 #F8EEDD #FFDCB6 #D2B387
//Hover #286A77
//Hover bright #EEF4F3
//text #256A77
const Medical = () =>{
    const { language } = useContext(ToursContext);
    const medical = contentData.medical;
    const t = medical[0].translations[language] || medical[0].translations.en;
    return (
        <section id="restaurants" className="font-[quicksand] relative flex justify-start scroll-mt-20 h-[550px] w-full">    
          <div className="border border-[blue]/0 overflow-visible absolute left-[0px] w-0 sm:w-[50%] h-[100%] text-[#256A77] z-1">
              
              <div className="border border-[red]/0 w-[350px] sm:w-[600px] xl:w-[800px]">
                <div className="flex gap-3 mt-10 text-[1.5rem] sm:text-[2.5rem] pl-10">
                  <img  className="h-15 w-auto"
                  src={withBase('/assets/images/arteMedico.png')} alt="artemedico"></img>
                  <p>{t.title}</p>
                </div>
                <p className="text-justify mt-6 text-[1.2rem] pl-10">{t.text2}</p>
                <p className="text-justify mt-1 text-[.9rem]  pl-10">{t.text3}</p>
                <p className="text-justify mt-5 text-[1rem]  pl-10">{t.text4}</p>
              </div>
              <Link to={`/Restaurants`}>
              <button className="ml-10 hover:bg-[#ADD2DA]/20 cursor-pointer mt-8 border border-[#256A77] p-1 w-[120px] rounded-md">
                Conoce Mas
              </button>
              </Link>
          </div>      

          <div
          className="absolute right-0 w-full sm:w-[60%] h-full flex items-center bg-cover bg-center"
          style={{
            backgroundImage: window.innerWidth >= 640
              ? `linear-gradient(to right,
              rgba(255,255,255,1) 20%, 
              rgba(255,255,255,1) 20%, 
              rgba(255,255,255,0) 50%
              , rgba(255,255,255,0) 100%), url(${withBase(
                  '/assets/images/medical/portrait.jpg'
                )})`
              : `url(${withBase('/assets/images/medical/portrait.jpg')})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            
            opacity: window.innerWidth < 640 ? 0.4 : 1, // makes image transparent on small devices
              }}
          />

        </section>
) 
}
export default Medical


     {/*0% → 20% = solid white (so the far left is covered).
        20% → 50% = smooth fade from white to transparent.
        50% → 100% = fully transparent (showing the image).*/}
