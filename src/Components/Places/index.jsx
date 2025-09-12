import { useContext } from "react";
import contentData from '../../data/content.json';
import { ToursContext } from "../../Context";
import { motion } from 'framer-motion'
import { Link } from "react-router-dom";
import { withBase } from '../../Utils/path';
const categories = [
  { key: 'laPaz', name: 'La Paz', image: '/assets/images/cabos/Picture6.jpg' },
  { key: 'sanJose', name: 'San José', image: '/assets/images/cabos/Picture8.png' },
  { key: 'losCabos', name: 'Cabo San Lucas', image: '/assets/images/cabos/Picture13.png' },
  { key: 'todosSantos', name: 'Todos Santos', image: '/assets/images/cabos/Picture15.png' }
];
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
const Places = () =>{    
    const { language } = useContext(ToursContext);
    const content = contentData[language] || contentData['en']; 
    const theme = themes.darkBlue; 
    return (     
        <section 
            id="tours" 
            className="w-full scroll-mt-20 relative z-[1] overflow-hidden"
            style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.6)), url(${withBase('/assets/images/cabos/cabos7.jpg')})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
            }}> 
            <div className="px-10 bg-gradient-to-r from-[#256A77] to-[#256A77]/90 ">
                <motion.div
                className="container py-1 z-[2] flex items-center"
                initial={{ x: -120 , opacity: 0 }} //si lo ponia en 100 ampliaba el viewport y se veia mal el navbar
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.1 }}
                viewport={{ once: true }}
                >
                    <h2 className="font-light font-[quicksand] text-[2.5rem] sm:text-[3.5rem] text-center sm:text-left" style={{ color: theme.accent }}>Lugares</h2>
                    <div className="hidden md:block mt-[1rem] ml-[1rem] h-[1px] w-[30%] bg-[white] bg-gradient-to-r from-[#ffffff] to-[#256A77] "></div>
                </motion.div>
            </div>    
            <div className="px-10 pb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-6 mt-4">
                {categories.map((category, index) => (
                    <div key="1" className="relative w-full h-60 rounded-xl overflow-hidden shadow-lg group cursor-pointer">        
                        <Link to={`/Tours/1`}>
                            <img                            
                                src={withBase(category.image)} 
                                alt="lugar1"
                                className=" w-full h-[100%] object-cover transform group-hover:scale-105 transition duration-500"
                            />
                            <div className="absolute top-0 inset-0 flex items-center justify-center">
                                <div className="w-full h-[25%] flex items-center justify-center bg-white text-center py-3 font-semibold font-[quicksand] text-[1.1rem] "
                                style={{
                                    backgroundColor: theme.cardBg,
                                    color: theme.cardText,
                                    opacity: 0.8
                                }}>
                                    <span className="relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 group-hover:after:w-full">
                                        {category.name}
                                    </span>
                                </div>
                            </div>
                        </Link>            
                    </div>
                ))}
            </div>
        </section>
    )
}
export default Places