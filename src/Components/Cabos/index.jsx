
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
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
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
        <div className="block w-[100%] h-[550px] xl:h-[650px]  text-[#378BA1]">
            <div className="w-full h-full bg-[#F0F5] flex ">
                <div className="overflow-visible bg-[#DDE7E6] h-[100%] w-[60%] ">
                    <div className="overflow-visible flex h-[100%] relative">
                        <h1 className="z-10 font-bold text-[1.5rem] mb-3 pr-2 inline-block whitespace-nowrap overflow-visible">Sus Experiencias con Los Cabos Moments</h1>    
                                 
                        <img
                            src={bgImage}
                            alt="Wave Divider"
                            className="z-9 overflow-visible absolute top-0 -right-38 object-cover h-[100%]"
                        />  
                    </div>  
                                                 
                </div>                       
                <div className="w-[40%] relative overflow-hidden">
                    <img
                    src={Logo6}
                    alt="Hero"
                    className="absolute  inset-0 w-full h-full object-cover"
                    />                      
                </div>
            </div>
        </div>
    )
}
export default Cabos