import { useContext ,useState, useRef } from "react";
import contentData from '../../data/content.json';
import { ToursContext } from "../../Context";
import { motion } from "framer-motion";
//OPCION DE COLORES 2.1
//#DDE7E6 #ADD2DA #378BA1 #F8EEDD #FFDCB6 #D2B387
//Hover #286A77
//text #256A77
const About = () =>{
    const { language } = useContext(ToursContext);
    const content = contentData[language] || contentData['en']; // fallback to English
    const [isExpanded, setIsExpanded] = useState(false);
    const contentRef = useRef(null);  
    //const [loaded, setLoaded] = useState(false);
    const toggleExpanded = () => {
        if (isExpanded) {
        setMaxHeight("0px");
        } else {
        setMaxHeight(`${contentRef.current.scrollHeight}px`);
        }
        setIsExpanded(!isExpanded);
    };
    const [maxHeight, setMaxHeight] = useState("0px");
    return (
      <div id="aboutUs" className="flex w-full min-h-[300px] scroll-mt-20">      
        <div 
            className="relative w-[full] md:w-[50%] gap-1  bg-gradient-to-r from-[#ffffff] to-[#fdfcee]  flex flex-col justify-start items-start">
            <motion.div                   
                initial={{ x: -120, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: 'easeOut', delay: .9  }}
            >
                <h1 className=" pl-10 pr-10 pt-5 font-[quicksand]  text-[2.5rem] sm:text-[3.5rem] text-[#927B46]">
                {content.aboutUsTitle}
                </h1>
            </motion.div>
            <h2 className="pl-10 pr-10 font-[quicksand] text-[1rem]  text-[#927B46] text-justify  font-medium">{content.aboutUsContent}</h2>
            {/* Collapsible section */}
            <div
                /*ref={contentRef}
                style={{ maxHeight }}*/
                className="overflow-hidden transition-all duration-700 ease-in-out"               
            >
                <p className="pb-10 pl-10 pr-10 pt-5 font-[quicksand] text-[1rem] text-[#927B46] text-justify  whitespace-pre-line font-medium">
                {content.aboutUsContent2}
                </p>
            </div>
            <button
                onClick={toggleExpanded}
                className="hidden pl-10 pr-10 pb-10 mt-3 text-sm text-[#927B46] underline self-start"
            >
                {isExpanded ? "Read less" : "Read more"}
            </button>     
            <img className="md:hidden absolute left-[29%] sm:left-[40%] -translate-x-1/2  ml-[5rem] opacity-12 w-[100%] max-w-[450px] h-auto"src="/cabos/assets/images/Logo.png"/>
        </div>     
        
        <div className="bg-[#fdfcee] w-[0%] md:w-[50%] flex justify-center items-center pt-15  pb-5">
             <motion.img
        src="/cabos/assets/images/Logo.png"
        className="w-[90%] max-w-[300px] h-auto"
        alt="Logo"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
      />
        </div>     
    </div>
    )
}
export default About