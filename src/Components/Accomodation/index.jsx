import { useContext, useState, useEffect } from "react";
import contentData from '../../data/content.json';
import accomodationData from '../../data/accomodation.json';
import { ToursContext } from "../../Context";
import { MapPinIcon  } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'


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
    
    const RoomIcon = icons['../../assets/icons/bed.svg'];
    const BathIcon = icons['../../assets/icons/bathroom.svg'];
    const ParkingIcon = icons['../../assets/icons/parking.svg'];

    return (
        <section id="accomodation" className="flex-column p-10 scroll-mt-20 w-full bg-[#eaf8f8]">
            <h1 className="font-[outfit] font-semibold text-[2.5rem] sm:text-[3.5rem] text-[#03A6A6]">
                {content.accomodationTitle}
            </h1>
            <h1>
                {content.accomodationContent}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 justify-items-center">
            {accomodations.map((accomodation) => {
                const t = accomodation.translations[language] || accomodation.translations.en;
                return (
                    <div key={accomodation.id} className="w-[100%]  border border-gray-100 bg-white rounded-sm shadow-lg overflow-hidden transform transition duration-400 hover:-translate-y-1">
                        <img src={accomodation.images.portrait} alt={t.title} className="w-full h-60 object-cover" />
                        <div className="p-4 space-y-2">
                            <div className="flex justify-between pr-[5px] items-center">
                                <h3 className="text-md md:text-xl font-semibold text-[#049DBF]">{t.title}</h3>      
                            </div>
                            <div className="flex gap-2"> 
                                <MapPinIcon  className="block size-5" />
                                <p className="text-gray-600">{t.location}</p> 
                            </div>
                            
                           <div className="flex items-center gap-4 text-gray-500 text-sm mt-2">
                                {RoomIcon && (
                                    <div className="flex items-center gap-1">
                                    <img src={RoomIcon} alt="rooms" className="w-4 h-4" />
                                    <span>{t.beds} •</span>
                                    </div>
                                )}
                                {BathIcon && (
                                    <div className="flex items-center gap-1">
                                    <img src={BathIcon} alt="bathrooms" className="w-4 h-4" />
                                    <span>{t.bathrooms} •</span>
                                    </div>
                                )}
                                {ParkingIcon && (
                                    <div className="flex items-center gap-1">
                                    <img src={ParkingIcon} alt="parking" className="w-4 h-4" />
                                    <span>{t.parking}</span>
                                    </div>
                                )}
                            </div>   
                            <Link to={`/Accommodation/${accomodation.id}`}>
                                <button className="mt-2 px-4 py-2 border border-[#049DBF] text-[#049DBF] rounded-md cursor-pointer">
                                    View listing
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