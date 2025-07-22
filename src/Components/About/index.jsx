import { useContext ,useState, useRef } from "react";
import contentData from '../../data/content.json';
import { ToursContext } from "../../Context";
import HotelIcon  from '../../assets/icons/hotel1.svg?react';
import YatchIcon  from '../../assets/icons/yatch.svg?react';
import SnorkelIcon  from '../../assets/icons/snorkel.svg?react';
import FoodIcon  from '../../assets/icons/food.svg?react';
import Logo2  from '../../assets/icons/logo2.svg?react';
import TransportIcon  from '../../assets/icons/transport.svg?react';
import { motion } from "framer-motion";
const icons = [
  { Component: HotelIcon, x: 100, y: -110 },
  { Component: YatchIcon, x: 150, y: -55 },
  { Component: SnorkelIcon, x: 180, y: 0 },
  { Component: FoodIcon, x: 150, y: 57 },
  { Component: TransportIcon, x: 100, y: 115 },
];
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
    //console.log(contentData);
    //#03A6A6
    return (
      <div id="aboutUs" className="flex w-full min-h-[300px] scroll-mt-20">
        <div className="relative  w-full md:w-2/3 bg-gradient-to-l from-[#02897c] to-[#64a2ad] p-10 flex flex-col justify-center">
        <Logo2
            className="absolute opacity-7 text-white w-[300px] h-[280px] right-[3px] top-[3px] pointer-events-none select-none"
        />
            <motion.div                   
                initial={{ x: -120, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: 'easeOut', delay: .3  }}
            >
            <h1 className="font-[outfit] font-semibold  text-[2.5rem] sm:text-[3.5rem] text-white">
            {content.aboutUsTitle}
            </h1>
             </motion.div>
            <h2 className="font-[quicksand] text-[#e6f9f7]">{content.aboutUsContent}</h2>
            {/* Collapsible section */}
            <div
                ref={contentRef}
                className="overflow-hidden transition-all duration-700 ease-in-out"
                style={{ maxHeight }}
            >
                <p className="font-[quicksand] text-[#e6f9f7] whitespace-pre-line">
                {content.aboutUsContent2}
                </p>
            </div>
            <button
                onClick={toggleExpanded}
                className="mt-3 text-sm text-white underline self-start"
            >
                {isExpanded ? "Read less" : "Read more"}
            </button>     
        </div>        
        <div className="hidden md:block w-1/3 relative bg-white flex items-center justify-center overflow-hidden">
            <div
            className="absolute left-[-100px] top-0 h-full w-[200px] bg-[#02897c]"
            style={{ clipPath: 'ellipse(100% 100% at 0% 75%)' }}
            ></div>            
            <div className=" w-full h-full relative">
                {icons.map(({ Component, x, y }, index) => (
                <motion.div
                    key={index}
                    className="absolute"
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: x+50, y: y+120, opacity: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.2, ease: 'easeOut' }}
                >
                    <Component className="w-12 h-12 text-[#64a2ad]" />
                </motion.div>
                ))}
            </div>           
        </div>
    </div>
    )
}
export default About