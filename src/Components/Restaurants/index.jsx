import { useContext} from "react";
import contentData from '../../data/content.json';
import { ToursContext } from "../../Context";
const Restaurants = () =>{
    const { language } = useContext(ToursContext);
    const content = contentData[language] || contentData['en'];
    return (
        <section id="restaurants" className="relative flex justify-start scroll-mt-20 h-[400px] w-full bg-[#eaf8f8]">    
            {/*Aplicamos un width de 0 para que contenga los textos pero el div interno tiene un width fijo */}
            <div className="overflow-visible absolute left-[0px] w-0 sm:w-[30%] h-[100%] text-white z-1 bg-[#003939]">
                <h3 className="mt-10 text-[2.5rem] sm:text-[3.5rem]  font-[outfit] pl-15"> {content.restaurantsTitle}</h3>
                <div className="w-[300px] sm:w-[600px]">
                    <p className="mt-6 font-[quicksand] pl-15">
                        Cabos is known for its extraordinary cuisine, host of michelin restaurantspremium steaks, and also regional and street food, Enjoy premium food and local flavors in our seaside restaurants.
                    </p>
                </div>
                <button className="ml-15 hover:bg-white/10 cursor-pointer mt-8 border border-[white] p-1 w-[120px] rounded-md">
                    Explore
                </button>
            </div>
            <div
                className="absolute right-[0px] w-[100%] sm:w-[70%]  h-full bg-cover bg-center flex items-center"
                style={{backgroundImage: "url('/cabos/assets/images/restaurants/portrait.jpg')",}}> 
                <div className="absolute inset-0 bg-black/40 sm:bg-transparent"></div>            
            </div>                   
        </section>
    )
}
export default Restaurants
