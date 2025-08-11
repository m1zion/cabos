import { useContext ,useState, useRef } from "react";
import contentData from '../../data/content.json';
import { ToursContext } from "../../Context";
import Logo2  from '../../assets/icons/bg3.svg?react';
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
      <div id="aboutUs" className="relative flex w-full min-h-[300px] scroll-mt-20">
        <div className=" w-full bg-gradient-to-t from-[#DDE7E6 ] to-[#DDE7E6 ]  flex flex-col justify-center">
            <motion.div                   
                initial={{ x: -120, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: 'easeOut', delay: .9  }}
            >
                <h1 className=" pl-10 pr-10 pt-5 font-[quicksand]  text-[2.1rem] sm:text-[3.1rem] text-[#256A77]">
                {content.aboutUsTitle}
                </h1>
             </motion.div>
            <h2 className=" pl-10 pr-10 font-[quicksand] text-[1.1rem]  text-[#256A77] text-justify  font-medium">{content.aboutUsContent}</h2>
            {/* Collapsible section */}
            <div
                ref={contentRef}
                className="overflow-hidden transition-all duration-700 ease-in-out"
                style={{ maxHeight }}
            >
                <p className=" pl-10 pr-10 pt-5 font-[quicksand] text-[1.1rem] text-[#256A77] text-justify  whitespace-pre-line font-medium">
                {content.aboutUsContent2}
                </p>
            </div>
            <button
                onClick={toggleExpanded}
                className=" pl-10 pr-10 pb-10 mt-3 text-sm text-[#256A77] underline self-start"
            >
                {isExpanded ? "Read less" : "Read more"}
            </button>     
        </div>   
    </div>
    )
}
export default About