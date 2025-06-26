import { useContext, useEffect, useState } from "react";
import contentData from '../../data/content.json';
import { ToursContext } from "../../Context";
import toursData from '../../data/tours.json';
import { motion } from 'framer-motion'
/*const icons = import.meta.glob('../../assets/icons/*.svg', {
  eager: true,
  import: 'default',
});*/
const Tours = () =>{    
    const { language } = useContext(ToursContext);
    const [tours, setTours] = useState([]);
    const content = contentData[language] || contentData['en']; // fallback to English
    useEffect(() => {
        // Filter only active tours
        const activeTours = toursData.tours.filter(tour => tour.status === "active");
        setTours(activeTours);
     }, []);    
    return (
        <section id="tours" className="w-full bg-gradient-to-l from-[#03A6A6] to-[#07bcbc] px-10 py-5">
        <motion.div
            className="container py-8"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1 }}
            viewport={{ once: true }}
        >
        <h2 className="font-[outfit] font-semibold text-[2.5rem] sm:text-[3.5rem] text-white text-center sm:text-left">{content.toursTitle}</h2>
        </motion.div>       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-4 justify-items-center">
            {tours.map((tour) => {
                const iconPath = `../../assets/icons/${tour.icon}`;
                //const icon = icons[iconPath];
                const t = tour.translations[language] || tour.translations.en;
                return (
                    <div key={tour.id} className="max-w-[330px] bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-103">
                        <img src={tour.images.portrait} alt={t.title} className="w-full h-60 object-cover" />
                        <div className="p-4 space-y-2">
                            <div className="flex justify-between pr-[5px]">
                                <h3 className="text-xl font-semibold text-[#049DBF]">{t.title}</h3>      
                                {/*<img src={icon} alt={tour.icon} className="w-7 h-7 object-contain text-[#049DBF]"/>*/}
                            </div>
                            <p className="text-gray-600">{t.description}</p>
                            <p className="text-sm text-gray-500">{t.duration} • {t.age} • {t.dificulty}</p>
                            <p className="text-primary font-bold text-[#049DBF]">{t.price}</p>
                            <button className="mt-2 px-4 py-2 bg-[#e59e1a] text-white rounded-md hover:bg-[#F2A516] transition duration-200">
                                Show More
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
        </section>
    )
}
export default Tours