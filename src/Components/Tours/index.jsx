import { useContext } from "react";
import contentData from '../../data/content.json';
import { ToursContext } from "../../Context";
import { motion } from 'framer-motion'
import { Link } from "react-router-dom";
import { withBase } from '../../utils/path';
import bgImage from '../../assets/icons/abstract-envelope-sand.svg?react';
//import Logo2  from '../../assets/icons/bg3.svg?react';

const categories = [
  { key: 'sunsetCruises', image: '/assets/images/sunset.jpg' },
  { key: 'waterExperiences', image: '/assets/images/snorkel.jpg' },
  { key: 'boatYatch', image: '/assets/images/boat.jpg' },
  { key: 'whaleWatching', image: '/assets/images/sea.jpg' },
  { key: 'camelHorse', image: '/assets/images/camel.jpg' },
  { key: 'atvRazors', image: '/assets/images/utv.jpg' },
  { key: 'dayTrip', image: '/assets/images/land.jpg' },
];
//OPCION DE COLORES 2.1
//#DDE7E6 #ADD2DA #378BA1 #F8EEDD #FFDCB6 #D2B387
//Hover #286A77
//text #256A77
const themes = {
  sand: {
    background: '#F4EFDF',
    accent: '#BDA268',
    cardText: '#BDA268',
    cardBg: '#FFFFFF',
  },
  darkBlue: {
    background: '#378BA1',
    accent: '#ffffff',
    cardText: '#256A77',
    cardBg: '#FFFFFF',
  },
};
const Tours = () =>{    
    const { language } = useContext(ToursContext);
    const content = contentData[language] || contentData['en']; 

    const theme = themes.darkBlue; // Try themes.blue or themes.darkBlue
    return (     
        <section 
            id="tours" 
            className="w-full px-10 py-5 scroll-mt-20 relative z-[1] overflow-hidden"
            style={{
                backgroundImage: `url(${withBase('/assets/icons/abstract-envelope-sand.svg')})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
            //style={{ backgroundColor: theme.background }}
        >               
            <motion.div
                className="container py-7 z-[2]"
                initial={{ x: -120 , opacity: 0 }} //si lo ponia en 100 ampliaba el viewport y se veia mal el navbar
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.1 }}
                viewport={{ once: true }}
            >
                <h2 className=" font-[quicksand] text-[2.5rem] sm:text-[3.5rem] text-center sm:text-left" style={{ color: theme.accent }}>{content.toursTitle}</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-6 mt-4">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="relative w-full h-60 rounded-xl overflow-hidden shadow-lg group cursor-pointer"
                    >
                        <Link to={`/Tours/${category.key}`}>
                            <img
                            
                                src={withBase(category.image)} 
                                //src={category.image}
                                alt={content.categories[category.key]}
                                className="w-full h-[80%] object-cover transform group-hover:scale-105 transition duration-500"
                            />
                            <div className="absolute inset-0 flex items-end justify-center">
                            <div className="w-full bg-white bg-opacity-90 text-center py-3 font-semibold font-[quicksand] text-[1.1rem]"
                             style={{
                                backgroundColor: theme.cardBg,
                                color: theme.cardText,
                                opacity: 0.9
                            }}>
                                {content.categories[category.key]}
                            </div>
                        </div>
                        </Link>            
                    </div>
                ))}
            </div>
        </section>
    )
}
export default Tours