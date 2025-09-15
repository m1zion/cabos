
import { useContext } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ToursContext } from "../../Context";
import contentData from '../../data/content.json';
import Logo from '/assets/images/cabos/cabos1.jpg';
import Logo2 from '/assets/images/cabos/cabos2.jpg';
import Logo3 from '/assets/images/cabos/cabos3.jpg';
import Logo4 from '/assets/images/cabos/cabos4.jpg';
import Logo5 from '/assets/images/cabos/cabos5.jpg';
import Logo6 from '/assets/images/cabos/cabos6.jpg';
import bgImage from '/assets/images/cabos/Vector.svg'; 
import bgImage2 from '/assets/images/cabos/Vector2.svg'; 
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import videoSrc from '../../assets/videos/video.mp4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { motion } from "framer-motion";
import { withBase } from '../../Utils/path';
const Cabos = () =>{  
    //OPCION DE COLORES 2.1
    //#DDE7E6 #ADD2DA #378BA1 #F8EEDD #FFDCB6 #D2B387
    //Hover #286A77
    //text #256A77
    const { language } = useContext(ToursContext);
    const content = contentData[language] || contentData['en']; // fallback to English
    const responsive = {
        desktop: {breakpoint: { max: 3500, min: 1024 }, items: 1, },
        tablet: {breakpoint: { max: 1024, min: 464 }, items: 1, },
        mobile: {breakpoint: { max: 464, min: 0 }, items: 1, },
    };
    return (
        <Carousel 
            infinite              
            autoPlay={false}
            className="w-[100%] h-[600px] xl:h-[650px]"            
            customRightArrow={
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#ADD2DA]/50 text-white p-2 w-[45px] rounded-full shadow-lg hover:bg-[#ADD2DA] cursor-pointer">
                    <ChevronRightIcon size={18} />
                </button>
            }
            customLeftArrow={
            <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#ADD2DA]/50 text-white w-[45px] p-2 rounded-full shadow-lg hover:bg-[#ADD2DA] cursor-pointer">
                <ChevronLeftIcon size={20} />
            </button>
            }
            responsive={responsive}
        >       
            {/*=====================HERO=====================*/}
            <div className="relative w-full h-[600px] xl:h-[650px] overflow-hidden shadow-lg">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                >
                    <source src={videoSrc} type="video/mp4" />
                  
                </video>
            </div> 
            {/*=====================CONTENIDO 1=====================*/}
            <div key="1" className="w-full h-[600px] xl:h-[650px]">
                <img
                src={Logo}
                className={`w-[100%] h-[600px] xl:h-[650px] object-cover`}
                />
            </div>                  
        </Carousel>
    )
}
export default Cabos