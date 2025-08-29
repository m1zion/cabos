import { useContext } from "react";
import contentData from '../../data/medical.json';
import { ToursContext } from "../../Context";
import { withBase } from '../../Utils/path';
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import Logo from '/assets/images/medical/portrait.jpg'
//OPCION DE COLORES 2.1
//#DDE7E6 #ADD2DA #378BA1 #F8EEDD #FFDCB6 #D2B387
//Hover #286A77
//Hover bright #EEF4F3
//text #256A77
const Medical = () =>{
    const { language } = useContext(ToursContext);
    const medical = contentData.medical;
    const t = medical[0].translations[language] || medical[0].translations.en;
    /*<div className="flex justify-center w-[100%] h-[580px] bg-[#E8E1CE]">
        <div className="bg-[white] w-[95%] h-[95%]  rounded-lg">*/
    return (      
        <section 
        id="Medical" 
        className="font-[quicksand] relative flex justify-start scroll-mt-20 h-[550px] w-[100%] ">    
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
  ) 
}
export default Medical
