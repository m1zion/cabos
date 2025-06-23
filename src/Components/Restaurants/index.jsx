import { useContext, useState, useEffect } from "react";
import contentData from '../../data/content.json';
import { ToursContext } from "../../Context";

const Restaurants = () =>{
    const { language } = useContext(ToursContext);
    const content = contentData[language] || contentData['en'];
    return (
        <section id="restaurants" className="relative flex justify-end scroll-mt-20 h-[400px] w-full bg-[#eaf8f8]">
           
            <div className="overflow-visible whitespace-nowrap absolute left-[0px] w-0 sm:w-[30%] h-[100%] text-white z-1 bg-[#003939]">
                <h3 className="mt-10 text-[3rem] font-semibold font-[outfit] pl-15"> {content.restaurantsTitle}</h3>
                <p className="mt-6 font-[quicksand] pl-15">
                    Cabos is known for its extraordinary cuisine, host of michelin restaurants
                </p>
                <p className="mt-2 font-[quicksand] pl-15">
                    premium steaks, and also regional and street food,
                </p>
                <p className="mt-2 font-[quicksand] pl-15">
                     Enjoy premium food and local flavors in our seaside restaurants.
                </p>
                <button className="ml-15 hover:bg-white/10 cursor-pointer mt-8 border border-[white] p-1 w-[120px] rounded-md">
                    Explore
                </button>
            </div>
            <div
                className="absolute right-[0px] w-[100%] sm:w-[70%]  h-full bg-cover bg-center flex items-center"
                style={{
                    backgroundImage: "url('../../src/assets/images/restaurants/portrait.jpg')",
                }}
                >            
            </div>

           {/*} <div className="flex">
                <div className="flex-column w-[35%] pr-4">
                    <h1 className="font-[outfit] font-semibold text-[3.5rem] text-[#03A6A6]">
                        {content.restaurantsTitle}
                    </h1>
                    <label>
                        {content.restaurantsContent}      
                    </label>
                </div>
                <div className="flex w-[65%] items-center gap-1">
                    <img src="../../src/assets/images/restaurants/portrait.jpg" alt="restaurants w-full h-60 object-cover" />
                </div>
            </div>*/}
            
        </section>
    )
}
export default Restaurants