import { useContext} from "react";
import contentData from '../../data/content.json';
import { ToursContext } from "../../Context";
import { Link } from "react-router-dom";
//OPCION DE COLORES 2.1
//#DDE7E6 #ADD2DA #378BA1 #F8EEDD #FFDCB6 #D2B387
//Hover #286A77
//Hover bright #EEF4F3
//text #256A77
const Restaurants = () =>{
    const { language } = useContext(ToursContext);
    const content = contentData[language] || contentData['en'];
    return (
      <section id="restaurants" className="font-[quicksand] relative flex justify-start scroll-mt-20 h-[400px] w-full bg-[#eaf8f8]">    
        <div className="overflow-visible absolute left-[0px] w-0 sm:w-[30%] h-[100%] text-white z-1 bg-[black]">
            <h3 className="mt-10 text-[2.5rem] sm:text-[3.5rem] pl-10"> {content.restaurantsTitle}</h3>
            <div className="w-[350px] sm:w-[600px]">
                <p className="text-justify mt-6 text-[1rem]  pl-10">
                    {content.restaurantsContent}
                </p>
            </div>
            <Link to={`/Restaurants`}>
            <button className="ml-15 hover:bg-white/20 cursor-pointer mt-8 border border-[white] p-1 w-[120px] rounded-md">
                {content.exploreButton}
            </button>
            </Link>
        </div>
        <div
        className="absolute right-[0px] w-[100%] sm:w-[70%] h-full bg-cover bg-center flex items-center"
        style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0)), url('/assets/images/restaurants/portrait.jpg')`,
            backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
        </div>                  
        </section>
    )
}
export default Restaurants


/*TEXTO ENCIMA DE LA IMAGEN */
/*<section id="restaurants" className="font-[quicksand] relative flex justify-start scroll-mt-20 h-[400px] w-full bg-[#eaf8f8]">    
    <div className="overflow-visible absolute left-[0px] w-0 sm:w-[30%] h-[100%] text-white z-1 bg-[#286A77]">
        <h3 className="mt-10 text-[2.5rem] sm:text-[3.5rem] pl-15"> {content.restaurantsTitle}</h3>
        <div className="w-[300px] sm:w-[600px]">
            <p className="text-justify mt-6 text-[1rem]  pl-15">
                {content.restaurantsContent}
            </p>
        </div>
        <Link to={`/Restaurants`}>
        <button className="ml-15 hover:bg-white/20 cursor-pointer mt-8 border border-[white] p-1 w-[120px] rounded-md">
            {content.exploreButton}
        </button>
        </Link>
    </div>
    <div
        className="absolute right-[0px] w-[100%] sm:w-[70%]  h-full bg-cover bg-center flex items-center"
        style={{backgroundImage: "url('/cabos/assets/images/restaurants/portrait.jpg')",}}> 
        <div className="absolute inset-0 bg-black/40 sm:bg-transparent"></div>            
    </div>                   
</section>*/