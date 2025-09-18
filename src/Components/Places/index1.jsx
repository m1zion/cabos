import { useContext, useState } from "react";
import contentData from '../../data/content.json';
import { ToursContext } from "../../Context";
import { motion } from 'framer-motion'
import { Link } from "react-router-dom";
import { withBase } from '../../Utils/path';
const categories = [
  { key: 'sanJose', name: 'San José del Cabo', image: '/assets/images/cabos/picture8a.jpg' },
  { key: 'losCabos', name: 'Cabo San Lucas', image: '/assets/images/cabos/cabos1a.jpg' },
  { key: 'laPaz', name: 'La Paz', image: '/assets/images/cabos/Picture6.jpg' },
  { key: 'todosSantos', name: 'Todos Santos', image: '/assets/images/cabos/Picture15a.png' }
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
  lightBlue: {
    background: '#378BA1',
    accent: '#ffffff',
    cardText: '#fff',
    cardBg: 'transparent',
  },
};
const Places = () =>{    
    const { language } = useContext(ToursContext);
    const content = contentData[language] || contentData['en']; 
    const theme = themes.lightBlue; 
    const [showModal, setShowModal] = useState(false);
    const handleImageClick = () => {
        setShowModal(true);
    };
    return (     
        <section id="tours" className="w-full scroll-mt-20 relative z-[1] overflow-hidden"> 
            <div className="px-10 pb-2 bg-gradient-to-r from-[#256A77] to-[#256A77]/90 ">
                <motion.div
                className="container z-[2] flex items-center"
                initial={{ x: -120 , opacity: 0 }} //si lo ponia en 100 ampliaba el viewport y se veia mal el navbar
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.1 }}
                viewport={{ once: true }}
                >
                    <h2 className="font-light font-[quicksand] text-[2.5rem] sm:text-[3.5rem] text-center sm:text-left" style={{ color: theme.accent }}>Destinos</h2>
                    <div className="hidden md:block mt-[1rem] ml-[1rem] h-[1px] w-[30%] bg-[white] bg-gradient-to-r from-[#ffffff] to-[#256A77] "></div>
                </motion.div>
                <div className="px-2 mt-1 text-[#378BA1] font-semibold bg-[#F4EFDF] rounded-md w-[100%] sm:w-[250px] h-[40px] flex items-center justify-start sm:justify-between gap-5">
                    ¿Donde Esta?
                    <img  onClick={() => handleImageClick()} src={withBase("/assets/icons/map.svg")} alt="map" className="w-8 h-8 cursor-pointer"/>
                </div>
            </div>              
            <div className=" px-3 md:px-0 pb-0 pt-4 md:pt-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-3 sm:gap-0">
                {categories.map((category, index) => (
                    <div key="1" className="rounded-md  sm:rounded-[0px] relative w-full h-100 md:h-120 overflow-hidden shadow-lg group cursor-pointer">        
                        <Link to={`/Places/${category.key}`}>
                            <img                            
                                src={withBase(category.image)} 
                                alt="lugar1"
                                className=" w-full h-[100%] object-cover transform group-hover:scale-105 transition duration-500"
                            />
                            <div className="absolute top-0 inset-0 flex items-end justify-center bg-[black]/18 hover:bg-[black]/1">
                                <div className="w-full h-[15%] flex items-center justify-center bg-white text-center py-3 font-semibold font-[quicksand] text-[1.1rem] "
                                style={{
                                    backgroundColor: theme.cardBg,
                                    color: theme.cardText
                                }}>
                                    <span className="font-bold text-[1.2rem]">
                                        {category.name}
                                    </span>
                                </div>
                            </div>
                        </Link>            
                    </div>
                ))}
            </div>


            {showModal && (
            <div className="fixed inset-0 bg-black/90 bg-opacity-50 z-[999] flex items-center justify-center p-4">
                <button
                className="absolute top-4 right-4 text-white text-2xl cursor-pointer"
                onClick={() => setShowModal(false)}
                >
                ✕
                </button>
                <div className="w-full max-w-4xl">
                <img
                    src={withBase('/assets/images/cabos/Picture0.png')}
                    onClick={() => setShowModal(false)}
                    alt={`Mapa`}
                    className="w-full h-auto rounded-md shadow-lg object-contain max-h-[80vh]"
                />
                </div>
            </div>
            )}

        </section>
    )
}
export default Places