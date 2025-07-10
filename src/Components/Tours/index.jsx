import { useContext, useEffect, useState } from "react";
import contentData from '../../data/content.json';
import { ToursContext } from "../../Context";
import toursData from '../../data/tours.json';
import { motion } from 'framer-motion'
import { Link } from "react-router-dom";


const categories = [
    { name: 'Sea Adventure', image: './src/assets/images/sea.jpg', category: 'sea' },
    { name: 'Yatch & Boat', image: './src/assets/images/boat.jpg', category: 'boat' },
    { name: 'Land Adventure', image: './src/assets/images/land.jpg', category: 'land' },
    { name: 'City Tour', image: './src/assets/images/city.jpg', category: 'city' },
];

const Tours = () =>{    
    const { language } = useContext(ToursContext);
    const [tours, setTours] = useState([]);
    const content = contentData[language] || contentData['en']; // fallback to English
    return (     
        <section id="tours" className="w-full bg-gradient-to-l from-[#03A6A6] to-[#07bcbc] px-10 py-5 scroll-mt-20">
        <motion.div
            className="container py-8"
            initial={{ x: -120 , opacity: 0 }} //si lo ponia en 100 ampliaba el viewport y se veia mal el navbar
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1 }}
            viewport={{ once: true }}
        >
            <h2 className="font-[outfit] font-semibold text-[2.5rem] sm:text-[3.5rem] text-white text-center sm:text-left">{content.toursTitle}</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            {categories.map((category, index) => (
                <div
                    key={index}
                    className="relative w-full h-60 rounded-xl overflow-hidden shadow-lg group cursor-pointer"
                >

                     <Link to={`/Tours/${category.category}`}>

                       <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 flex items-end justify-center">
                        <div className="w-full bg-white bg-opacity-90 text-center py-3 text-[#03A6A6] font-semibold text-xl">
                            {category.name}
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