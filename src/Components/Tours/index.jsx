import { useContext } from "react";
import contentData from '../../data/content.json';
import { ToursContext } from "../../Context";
import { motion } from 'framer-motion'
import { Link } from "react-router-dom";

const categories = [
  { key: 'sunsetCruises', image: '/cabos/assets/images/sunset.jpg' },
  { key: 'waterExperiences', image: '/cabos/assets/images/snorkel.jpg' },
  { key: 'boatYatch', image: '/cabos/assets/images/boat.jpg' },
  { key: 'whaleWatching', image: '/cabos/assets/images/sea.jpg' },
  { key: 'camelHorse', image: '/cabos/assets/images/camel.jpg' },
  { key: 'atvRazors', image: '/cabos/assets/images/utv.jpg' },
  { key: 'dayTrip', image: '/cabos/assets/images/land.jpg' },
];

const themes = {
  sand: {
    background: '#F4EFDF',
    accent: '#BDA268',
    cardText: '#BDA268',
    cardBg: '#FFFFFF',
  },
  blue: {
    background: '#E6ECEB',
    accent: '#5C7687',
    cardText: '#5C7687',
    cardBg: '#FFFFFF',
  },
  darkBlue: {
    background: '#728E9F',
    accent: '#E6ECEB',
    cardText: '#728E9F',
    cardBg: '#FFFFFF',
  },
};
const Tours = () =>{    
    const { language } = useContext(ToursContext);
    const content = contentData[language] || contentData['en']; 

    //OPCION DE COLORES 2
//  #E0E7E6
//  #BAD1D9 #E6ECEB
//  #728E9F   #5C7687
//  #F4EFDF
//  #F4DEB9
//  #C8B58B #BDA268
    const theme = themes.darkBlue; // Try themes.blue or themes.darkBlue
    return (     
        <section 
            id="tours" 
            className="w-full px-10 py-5 scroll-mt-20 relative z-[1] overflow-hidden"
            style={{ 
                backgroundImage: "url('./public/assets/icons/abstract-envelope.svg')" ,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',}}
            //style={{ backgroundColor: theme.background }}
        >               
            <motion.div
                className="container py-8 z-[2]"
                initial={{ x: -120 , opacity: 0 }} //si lo ponia en 100 ampliaba el viewport y se veia mal el navbar
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.1 }}
                viewport={{ once: true }}
            >
                <h2 className="font-[outfit] text-[2.5rem] sm:text-[3.5rem] text-center sm:text-left" style={{ color: theme.accent }}>{content.toursTitle}</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-6 mt-4">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="relative w-full h-60 rounded-xl overflow-hidden shadow-lg group cursor-pointer"
                    >
                        <Link to={`/Tours/${category.key}`}>
                        <img
                            src={category.image}
                            alt={content.categories[category.key]}
                            className="w-full h-[80%] object-cover transform group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute inset-0 flex items-end justify-center">
                            <div className="w-full bg-white bg-opacity-90 text-center py-3 font-semibold text-xl"
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