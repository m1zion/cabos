import { useContext } from "react";
import Layout from '../../Components/Layout'
import restaurantsData from '../../data/restaurants.json';
import { ToursContext } from "../../Context";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet.css";
import 'react-multi-carousel/lib/styles.css';
import contentData from '../../data/content.json';
import WhatsApp from "../../Components/WhatsApp";
import { Link } from "react-router-dom";
import { MapPinIcon  } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
const icons = import.meta.glob('../../assets/icons/*.svg', {
  eager: true,
  import: 'default',
});
function restaurants() {  
    const { language } = useContext(ToursContext);
    const content = contentData[language] || contentData['en']; 
    const restaurants = restaurantsData.restaurants
    const MoneyIcon = icons['../../assets/icons/money.svg'];
    const FoodIcon = icons['../../assets/icons/food2.svg'];
    // md:w-2/3 
    return (
        <Layout>              
          <div className="relative h-[270px] w-full flex items-center justify-start bg-cover bg-center"  
          style={{ backgroundImage: `url('/cabos/assets/images/restaurants/collage/collage.jpg')` }}>
            <div className="absolute inset-0 bg-black/20">
              <div
                className="w-full h-full"
                style={{
                  background: 'radial-gradient(circle at left, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.2) 100%)'
                }}
              ></div>
            </div>
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute z-10 text-white text-4xl font-semibold uppercase pl-8 pt-1"
            >
              Restaurants
            </motion.h1>
          </div>
          <div className="px-6  w-full  py-10 grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center bg-[#D9CCB6]">   
             {restaurants.map((restaurant) => {
                const t = restaurant.translations[language] || restaurant.translations.en;
                //#D9CCB6
                //#573808
                 
                return (                
                    <div
                      key={restaurant.id}
                      className="font-[quicksand] border border-[#ffffff22] rounded-xl bg-gradient-to-br from-[#4A3623] to-[#3b2b1f] sm:flex justify-between sm:flex-row-reverse w-[330px] sm:w-full lg:w-full/2 rounded-xl shadow-lg overflow-hidden"
                    >                      
                      <img
                        src={restaurant.images.portrait}
                        alt={t.title}
                        className="w-full sm:w-[300px] md:w[300px] h-60 object-cover"
                      />
                      <div className="flex flex-col justify-between h-50 sm:h-full p-4">
                        <div className="flex-col justify-start">
                          <h2 className="text-lg font-semibold text-[#F2A516] pb-2">{t.title}</h2>                
                          {FoodIcon && (
                            <div className="flex items-center gap-2 text-[#F9E9C8]">
                            <img src={FoodIcon} alt="food" className="w-5 h-5" />
                            <span className="text-sm"> {t.kitchen}</span>
                            </div>
                          )}                                      
                          <div className="flex items-center gap-2 text-[#F9E9C8]">
                            <MapPinIcon  className="block size-5" /> 
                            <p className="text-sm"> {restaurant.category}</p>
                          </div>
                          {MoneyIcon && (
                            <div className="flex items-center gap-2 text-[#F9E9C8]">
                            <img src={MoneyIcon} alt="money" className="w-5 h-5" />
                            <span className="text-sm"> {t.price}</span>
                            </div>
                          )}                                  
                        </div>                                  
                        <Link to={`/bookRestaurant/${restaurant.id}`} >
                              <button className="hover:bg-[#ffffff1a] text-[#F9E9C8] cursor-pointer border border-[#F9E9C8] h-10 p-1 w-full sm:w-[140px] rounded-md">
                                  View More
                              </button>
                        </Link>                                   
                      </div>
                    </div>
                );
              })}        
          </div>
          <WhatsApp/>
        </Layout>
    )
}
export default restaurants