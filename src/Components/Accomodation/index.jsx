import { useContext, useState, useEffect } from "react";
import contentData from '../../data/content.json';
import accomodationData from '../../data/accomodation.json';
import { ToursContext } from "../../Context";
import { MapPinIcon  } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { withBase } from '../../utils/path';

//OPCION DE COLORES 2.1
//#DDE7E6 #ADD2DA #378BA1 #F8EEDD #FFDCB6 #D2B387
//Hover #286A77
//Hover bright #EEF4F3
//text #256A77
const icons = import.meta.glob('../../assets/icons/*.svg', {
  eager: true,
  import: 'default',
});
const Accomodation = () =>{
    const { language } = useContext(ToursContext);
    const [accomodations, setAccomodations] = useState([]);
    const content = contentData[language] || contentData['en']; // fallback to English
    useEffect(() => {
        const activeAccomodations = accomodationData.accomodations.filter(accomodation => accomodation.status === "active");
        setAccomodations(activeAccomodations);
     }, []);    
    const RoomIcon = icons['../../assets/icons/bed_color.svg'];
    const BathIcon = icons['../../assets/icons/bathroom_color.svg'];
    const ParkingIcon = icons['../../assets/icons/parking_color.svg'];

    return (
        <section id="accomodation" className="font-[quicksand] flex-column p-10 scroll-mt-20 w-full  bg-gradient-to-t from-[#DDE7E6] to-[#fff]">
            <motion.div
                className="container py-4 z-[2]"
                initial={{ x: -120 , opacity: 0 }} //si lo ponia en 100 ampliaba el viewport y se veia mal el navbar
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.1 }}
                viewport={{ once: true }}
            >                  
            <h1 className="text-[2.5rem] sm:text-[3.5rem] text-[#256A77] text-center sm:text-left">{content.accomodationTitle}</h1>
            </motion.div>           
            <h1 className="text-[1rem] text-[#256A77]">
                {content.accomodationContent}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 justify-items-center">
            {accomodations.map((accomodation) => {
                const t = accomodation.translations[language] || accomodation.translations.en;
                return (
                    <div key={accomodation.id} className="w-[100%]  border border-gray-100 bg-white rounded-sm shadow-lg overflow-hidden transform transition duration-400 hover:-translate-y-1">
                        <img src={withBase(accomodation.images.portrait)} alt={t.title} className="w-full h-60 object-cover" />
                        <div className="text-[#256A77] p-4 space-y-2">
                            <div className="flex justify-between pr-[5px] items-center">                               
                                <h3 className="text-md md:text-xl font-semibold text-[1.1rem]">{t.title}</h3>    
                            </div>
                            <div className="flex gap-2"> 
                                <MapPinIcon  className="block size-5" />
                                <p className="text-gray-600">{t.location}</p> 
                            </div>                            
                           <div className="pl-[3px] flex items-center gap-4 text-gray-500 text-[1rem] mt-2">
                                {RoomIcon && (
                                    <div className="flex items-center gap-1">
                                    <img src={RoomIcon} alt="rooms" className="w-4 h-4" />
                                    <span>{t.beds}</span>
                                    <span className="pl-2">•</span>
                                    </div>
                                )}
                                {BathIcon && (
                                    <div className="flex items-center gap-1">
                                    <img src={BathIcon} alt="bathrooms" className="w-4 h-4" />
                                    <span>{t.bathrooms}</span>
                                    </div>
                                )}
                                {(ParkingIcon && t.parking != '') && (
                                    <div className="flex items-center gap-1">
                                    <span className="pr-2">•</span> <img src={ParkingIcon} alt="parking" className="w-4 h-4" />
                                    <span>{t.parking}</span>
                                    </div>
                                )}
                            </div>   
                            <Link to={`/Accommodation/${accomodation.id}`}>
                                <button className="hover:bg-[#EEF4F3] mt-2 px-4 py-2 border border-[#256A77] text-[#256A77] rounded-md cursor-pointer">
                                    {content.viewListing}
                                </button>
                            </Link>
                        </div>
                    </div>
                );
                })}
            </div>
        </section>
    )
}
export default Accomodation