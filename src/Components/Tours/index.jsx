import { useContext } from "react";
import contentData from '../../data/content.json';
import { ToursContext } from "../../Context";
import { motion } from 'framer-motion'
import { Link } from "react-router-dom";
import bgImage from '../../assets/icons/background.svg'; 

const categories = [
  { key: 'sunsetCruises', image: '/cabos/assets/images/sunset.jpg' },
  { key: 'waterExperiences', image: '/cabos/assets/images/snorkel.jpg' },
  { key: 'boatYatch', image: '/cabos/assets/images/boat.jpg' },
  { key: 'whaleWatching', image: '/cabos/assets/images/sea.jpg' },
  { key: 'camelHorse', image: '/cabos/assets/images/camel.jpg' },
  { key: 'atvRazors', image: '/cabos/assets/images/utv.jpg' },
  { key: 'dayTrip', image: '/cabos/assets/images/land.jpg' },
];

//#03A6A6  #07bcbc
//#64a2ad
//#d3c199
const Tours = () =>{    
    const { language } = useContext(ToursContext);
    const content = contentData[language] || contentData['en']; 
    return (     
        <section 
            id="tours" 
            className="w-full px-10 py-5 scroll-mt-20 relative z-[1] overflow-hidden"
        >  
            <svg
                viewBox="0 0 6000 6000"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-full h-full object-cover z-[-2]"
                preserveAspectRatio="xMidYMid slice"
            >
                <rect fill="#0cb1b1" width="6000" height="6000" />
                <path
                fill="#18c8c8"
                d="M2282.16,2002C15.65,3086.41,4567.5,5430.64,2244.68,6000h2529.36c-24.06-223.49-52.49-451.81-76.51-679.61C4157.87,3502.14,2793.4,1040.78,4251.82,343c419.75-200.83,1089.15-154.81,1748.18-92.84V0C5621.27,416.55,3265.98,531.3,2282.16,2002z"
                />
                <path
                fill="#18c8c8"
                d="M5154.82,1191c-1413.83,676.45-174.62,3010.39,394.15,4809H6000V1045.41C5673.6,1047.13,5378.66,1083.91,5154.82,1191z"
                />
            </svg>  
            <motion.div
                className="container py-8 z-[2]"
                initial={{ x: -120 , opacity: 0 }} //si lo ponia en 100 ampliaba el viewport y se veia mal el navbar
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.1 }}
                viewport={{ once: true }}
            >
                <h2 className="font-[outfit] font-semibold text-[2.5rem] sm:text-[3.5rem] text-white text-center sm:text-left">{content.toursTitle}</h2>
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
                            <div className="w-full bg-white bg-opacity-90 text-center py-3 text-[#03A6A6] font-semibold text-xl">
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