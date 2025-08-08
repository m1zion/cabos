import { useContext ,useState, useRef } from "react";
import contentData from '../../data/content.json';
import { ToursContext } from "../../Context";
import Logo2  from '../../assets/icons/bg3.svg?react';
import { motion } from "framer-motion";

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
      <div id="aboutUs" className="flex w-full min-h-[300px] scroll-mt-20">
        <div className="relative  w-full bg-gradient-to-t from-[#E6ECEB ] to-[#E6ECEB ]  flex flex-col justify-center">
            <Logo2
                className="absolute inset-0 w-full h-full opacity-25 text-white pointer-events-none select-none"
   
            />
            <motion.div                   
                initial={{ x: -120, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: 'easeOut', delay: .9  }}
            >
                <h1 className=" pl-10 pr-10 pt-5 font-[outfit]  text-[2.5rem] sm:text-[3.5rem] text-[#728E9F]">
                {content.aboutUsTitle}
                </h1>
             </motion.div>
            <h2 className=" pl-10 pr-10 font-[quicksand] text-[#728E9F] text-justify  font-medium">{content.aboutUsContent}</h2>
            {/* Collapsible section */}
            <div
                ref={contentRef}
                className="overflow-hidden transition-all duration-700 ease-in-out"
                style={{ maxHeight }}
            >
                <p className=" pl-10 pr-10 pt-5 font-[quicksand] text-[#728E9F] text-justify  whitespace-pre-line font-medium">
                {content.aboutUsContent2}
                </p>
            </div>
            <button
                onClick={toggleExpanded}
                className=" pl-10 pr-10 pb-10 mt-3 text-sm text-[#728E9F] underline self-start"
            >
                {isExpanded ? "Read less" : "Read more"}
            </button>     
        </div>   
    </div>
    )
}
export default About