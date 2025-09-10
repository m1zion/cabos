
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
        <div className="block w-[100%] h-[550px] xl:h-[650px]">
            <Carousel 
            infinite              
            autoPlay={false}
            className="w-[100%] h-[550px] xl:h-[650px]"            
            customRightArrow={
                <button
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#ADD2DA]/50 text-white p-2 w-[45px] rounded-full shadow-lg hover:bg-[#ADD2DA] cursor-pointer"
                >
                <ChevronRightIcon size={18} />
                </button>
            }
            customLeftArrow={
            <button
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#ADD2DA]/50 text-white w-[45px] p-2 rounded-full shadow-lg hover:bg-[#ADD2DA] cursor-pointer"
            >
                <ChevronLeftIcon size={20} />
            </button>
            }
            responsive={responsive}>
                {/*=====================CONTENIDO 1=====================*/}
                <div key="1" className="w-[100%] relative z-0">
                    <img
                    src={Logo}
                    className={`w-[100%] h-[550px] xl:h-[650px] object-cover`}
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-black/20 z-10"></div>
                    <div className="flex h-[100%] items-center absolute top-0 z-20 text-white text-start">
                        <div className='pl-14 pr-14 pt-5 pb-5 bg-black/50 flex items-end justify-center flex-wrap gap-2 sm:gap-3 '>
                            <h1 className="text-2xl sm:text-3xl font-bold mb-5 ">Descubra Los Cabos & Baja California Sur</h1>
                            <h1 className=" mb-[12px] ">¡Bienvenido a Los Cabos, uno de los destinos más fascinantes de México!
                                Aquí, en el extremo sur de la península de Baja California Sur, el desierto se encuentra con el mar azul profundo, y formaciones rocosas espectaculares como el famoso Arco de Los Cabos emergen del agua - un paisaje que nunca deja de impresionar.
                            </h1>
                            <h1 className=" mb-[12px] ">Lo que hace a Los Cabos tan especial es su mezcla única de naturaleza virgen, resorts de lujo, gastronomía de primer nivel y experiencias auténticas. A diferencia de Cancún, conocido por sus grandes zonas hoteleras, Los Cabos ofrece la combinación perfecta de lujo, autenticidad y aventura.
                            </h1>
                        </div>                      
                    </div>
                </div>
                {/*=====================CONTENIDO 2=====================*/}
                <div key="1" className="flex w-[100%]"> 
                    <div className='bg-[#DDE7E6]/50 text-[1rem] w-[60%] flex-col items-start justify-center p-15'>
                        <div className="flex">
                            <h1 className="font-bold text-[2rem] mb-3 pr-2">Descubre la</h1>                        
                            <h1 className="text-[#378BA1] font-bold text-[2rem] mb-3">Vida Salvaje</h1>
                        </div>
                        <div className="mb-[.5rem] h-[2px] w-[60%] bg-[white] bg-gradient-to-r from-[#378BA1] to-[#DDE7E6]/50 "></div>
                        <h1 className="pt-5 text-justify">Los Cabos es uno de los pocos lugares en el mundo donde usted puede observar ballenas de cerca de diciembre a abril – una experiencia verdaderamente inolvidable.</h1>
                        <h1 className="pt-1 text-justify">Entre octubre y marzo, también tiene la oportunidad de nadar con los gentiles tiburones ballena en La Paz.</h1>
                        <h1 className="pt-1 text-justify">La región es hogar de delfines, tortugas marinas y peces de colores, y es considerada uno de los mejores sitios de buceo y esnórquel de México.</h1>
                    </div>
                    <div className="w-[40%]">
                        <img
                        src={Logo4}
                        className={`w-[100%] h-[550px] xl:h-[650px] object-cover`}
                        />
                    </div>  
                </div>
                {/*=====================CONTENIDO 4=====================*/}
                <div  key="4" className="w-[100%] relative w-full h-[100%] flex">
                    <div className="w-[50%] flex flex-col justify-center px-12 bg-white relative z-10">
                        <div className="flex">
                        <h1 className="font-bold text-[1.5rem] mb-3 pr-2 inline-block whitespace-nowrap">Sus Experiencias con</h1>                        
                        <h1 className="text-[#378BA1] font-bold text-[1.5rem] mb-3 whitespace-nowrap">Los Cabos Moments</h1>
                        </div>
                        <h1 className="pt-5 text-justify">En Los Cabos Moments no solo le inspiramos, sino que le ayudamos a convertir su viaje en realidad. Puede reservar todo con nosotros de manera sencilla y personalizada:</h1>
                        <ul className="pl-10 pt-[1rem] list-disc">
                            <li>Alojamientos en Airbnb con excelentes reseñas</li>
                            <li>Transporte privado desde y hacia el aeropuerto</li>
                            <li>Tours y experiencias: avistamiento de ballenas, esnórquel, paseos en barco, talleres de pizza, clases de salsa y bachata</li>
                            <li>Servicios exclusivos: organización de mayordomo, regalos y decoraciones, incluso fuegos artificiales privados</li>
                            <li>Reservaciones en los restaurantes más destacados de la región</li>
                        </ul> 
                    </div>                       
                    <div className="w-[50%] relative overflow-hidden bg-white">
                        {/* Image */}
                        <img
                        src={Logo6}
                        alt="Hero"
                        className="absolute  inset-0 w-full h-full object-cover"
                        />
                        {/* Wave Shape Divider */}
                        <svg
                        className="absolute left-0 top-0 h-full w-28 text-white " // was w-24
                        viewBox="0 0 100 1000"
                        preserveAspectRatio="none"
                        fill="currentColor"
                        >
                            {/*<path d="M100,0 C40,250 60,750 0,1000 L0,0 Z" />*/}
                            {/*<path d="M100,0 C60,200 40,300 0,500 C40,700 60,800 100,1000 L0,1000 L0,0 Z" />*/}
                            <path d="M100,0 Q0,500 100,1000 L0,1000 L0,0 Z"/>
                            {/*<path d="M100,0 L50,250 L100,500 L50,750 L100,1000 L0,1000 L0,0 Z" />*/}
                            {/*<path d="M100,0 L0,1000 L0,0 Z" />*/} 
                        </svg>
                    </div>
                </div>
                {/*=====================CONTENIDO 5=====================*/}
                <div  key="4" className=" w-full h-[100%] flex">
                    <div className="w-[60%] bg-[#F0F5] flex text-[#378BA1]">
                        <div className="bg-[blue] h-[100%] w-[80%]">
                            <div className="flex h-[100%]">
                                <h1 className="font-bold text-[1.5rem] mb-3 pr-2 inline-block whitespace-nowrap overflow-visible">Sus Experiencias con</h1>                        
                                <h1 className="font-bold text-[1.5rem] mb-3 whitespace-nowrap">Los Cabos Moments</h1>
                            </div>                            
                        </div>                        
                        <img
                            src={bgImage}
                            alt="Wave Divider"
                            className="border object-cover  h-[100%] w-[20%]"
                        />                        
                    </div>                       
                    <div className="w-[40%] relative overflow-hidden">
                        <img
                        src={Logo6}
                        alt="Hero"
                        className="absolute  inset-0 w-full h-full object-cover"
                        />                      
                    </div>
                </div>
            </Carousel>
        </div>
    )
}
export default Cabos