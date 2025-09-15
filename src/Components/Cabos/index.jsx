
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
            <div className="relative w-full h-[600px] xl:h-[650px] flex items-start justify-start overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                >
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>        
                {/* Overlay Content */}
                <div className="h-[90%] flex flex-col relative z-10 text-white text-start pl-8 pr-2 pt-5 sm:pt-17">
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}        
                    >
                        <div className='flex items-end gap-3'>
                            <h1 className="text-3xl text-end sm:text-5xl font mb-3 ">{content.welcome}</h1>
                        </div> 
                        <div className='flex items-end flex-wrap gap-2 sm:gap-3 '>
                            <h1 className="text-5xl sm:text-6xl font-bold mb-1 sm:mb-3 ">Los Cabos</h1>
                            <h1 className="text-5xl sm:text-6xl font-bold mb-1 sm:mb-3 ">Moments</h1>
                        </div>             
                    </motion.div>     
                    <motion.div
                        className="text-lg pt-1 md:pt-1"
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >      
                        <p style={{ fontFamily: 'Great Vibes, cursive' }} className="text-[1.8rem]">{content.slogan}</p>
                    </motion.div>        
                    <motion.ul
                        className="flex items-center gap-2 list-none mt-auto"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.9, duration: 0.9 }}
                    >                               
                        <li>
                            <a
                                href="https://www.instagram.com/loscabos_moments/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-[32px] h-[32px] text-[20px] leading-[30px] text-[#818a91] bg-[#eceeef] rounded-full text-center inline-block transition-all duration-200 hover:text-white hover:bg-[linear-gradient(to_right,_#833ab4,_#fd1d1d,_#fcb045)]"
                            >
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </li> 
                    </motion.ul>         
                </div>                         
                {/*Dark overlay*/}
                <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-0"></div>
            </div> 
            {/*=====================CONTENIDO 1=====================*/}
            <div key="1" className="w-[100%] h-[600px] xl:h-[650px] relative z-0">
                <img
                src={Logo}
                className={`w-[100%] h-[600px] xl:h-[650px] object-cover`}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black/20 z-10"></div>
                <div className="flex h-[100%] items-center absolute top-0 z-20 text-white text-start">
                    <div className='text-justify pl-14 pr-14 pt-2 pb-5 bg-black/50 flex items-end justify-center flex-wrap gap-2 sm:gap-3 '>
                        <h1 className="text-2xl sm:text-3xl font-bold mb-5 ">{content.place1}</h1>
                        <h1 className=" mb-[12px] ">{content.place2} {content.place3}</h1>
                        <h1 className=" mb-[12px] ">{content.place10}
                        </h1>
                    </div>                      
                </div>
            </div>
            {/*=====================CONTENIDO 2=====================*/}
            <div key="1" className="flex w-[100%] h-[600px] xl:h-[650px] text-[white] sm:text-[black]"> 
                <div className='z-10 bg-[black]/10 sm:bg-[#DDE7E6]/50 text-[1rem] w-[100%] sm:w-[60%] flex-col items-start justify-center p-15'>
                    <div className="flex flex-col sm:flex-row  overflow-visible">
                        <h1 className="font-bold text-[2rem] mb-1 sm:mb-3 pr-2 whitespace-nowrap">{content.place4}</h1>                        
                        <h1 className="text-[#DDE7E6] sm:text-[#378BA1] font-bold text-[2rem] mb-3 whitespace-nowrap overflow-visible">{content.place5}</h1>
                    </div>
                    <div className="mb-[.5rem] h-[2px] w-[99%] sm:w-[70%] bg-[white] bg-gradient-to-r from-[#378BA1] to-[#DDE7E6]/50 "></div>
                    <h1 className="pt-5 text-justify">{content.place6}</h1>
                    <h1 className="pt-1 text-justify">{content.place7}</h1>
                    <h1 className="pt-1 text-justify">{content.place8}</h1>
                </div>
                <div className="w-[0%] sm:w-[40%] z-0">
                    <img
                    src={Logo4}
                    className={`w-[100%] h-[600px] xl:h-[650px] object-cover`}
                    />
                </div>  
                <div>
                    <img
                    src={Logo4}
                    className={`absolute right-[0px] w-[100%] sm:w-[0%] w-[100%] h-[600px] xl:h-[650px] object-cover`}
                    />
                </div>         
            </div>
            {/*=====================CONTENIDO 4=====================*/}
            <div className="w-[100%] h-[600px] xl:h-[650px] text-[#378BA1] flex ">
                <div className="overflow-visible lg:bg-[#F7FDFF] h-[100%] w-[100%] lg:w-[60%] ">
                    <div className="overflow-visible flex flex-col h-[100%] relative px-14 pt-5">
                        <div className="z-10 font-bold text-[1.5rem] lg:text-[2rem] overflow-visible">
                            <h1 className="pr-2 inline-block whitespace-nowrap">{content.place11}</h1>    
                            <h1 className="mb-3 pr-2 inline-block whitespace-nowrap">{content.place12}</h1>   
                        </div>                        
                        <h1 className="pt-2 lg:pt-4 text-justify">{content.place13}</h1>
                        <ul className="pl-4 lg:pl-10 pt-[1rem] list-disc text-justify">
                            <li>{content.list1a}</li>
                            <li>{content.list1b}</li>
                            <li>{content.list1c}</li>
                            <li>{content.list1d}</li>
                            <li>{content.list1e}</li>
                        </ul> 
                        <h1 className="hidden sm:block pt-5 text-justify">{content.place14}</h1>
                        <img
                            src={bgImage}
                            alt="Wave Divider"
                            className="hidden lg:block z-9 overflow-visible absolute top-0 -right-38 object-cover h-[100%]"
                        />  
                    </div>                                                   
                </div>                       
                <div className="w-[0%] lg:w-[40%] relative overflow-hidden">
                    <img
                    src={Logo6}
                    alt="Hero"
                    className="absolute  inset-0 w-full h-full object-cover"
                    />                      
                </div>
            </div>     
        </Carousel>
    )
}
export default Cabos