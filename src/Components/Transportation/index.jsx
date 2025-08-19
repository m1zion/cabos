import { useContext } from "react";
import contentData from '../../data/content.json';
import { ToursContext } from "../../Context";
import Carousel from 'react-multi-carousel';

import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";


const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const images = [
  '/cabos/assets/images/transportation/car1.png',
  '/cabos/assets/images/transportation/car2.png'
];

const Transportation = () =>{
    const { language } = useContext(ToursContext);
    const content = contentData[language] || contentData['en']; // fallback to English
    return (
        <div id="transportation" className="font-[quicksand] flex-col p-10 scroll-mt-20  w-full"> {/*h-[500px]*/}
            <h1 className="text-center sm:text-left text-[2.5rem] sm:text-[3.5rem] text-[#03A6A6]">
                {content.transportationTitle}
            </h1>
            <div className="flex flex-wrap w-full justify-center text-[#256A77]">
              <div className="w-[full] md:w-1/2 h-full flex justify-center flex-col mb-5">
                <img
                  src='/cabos/assets/images/transportation/car1.png'
                  alt={`Car1`}
                  className="h-64 object-contain"
                /> 
                <p className="text-center mt-3 font-semibold text-[1.1rem]">Toyota Sienna</p>
                <div className="text-center mt-3">
                  <Link to={`/bookTransportation/sienna`}>
                    <button className="hover:bg-[#EEF4F3] mt-2 px-4 py-2 border border-[#256A77] text-[#256A77] rounded-md cursor-pointer w-[90%] md:w-[150px]">Reservar</button>
                  </Link>
                </div>
              </div>
              <div className="w-[full] md:w-1/2 h-full flex justify-center flex-col">
                <img
                  src='/cabos/assets/images/transportation/car2.png'
                  alt={`Car2`}
                  className="h-64 object-contain"
                />
                <p className="text-center mt-3 font-semibold text-[1.1rem]">Chevrolet Suburban</p>
                <div className="text-center mt-3"><button className="hover:bg-[#EEF4F3] mt-2 px-4 py-2 border border-[#256A77] text-[#256A77] rounded-md cursor-pointer w-[90%] md:w-[150px]">Reservar</button></div>
              </div>             
            </div>
            {/*Dejamos el Carousel cuando hayan mas de 2 autos*/}
            {/*<Carousel className="" responsive={responsive}>
                {images.map((src, index) => (
                <div key={index} className="p-4 flex justify-center">
                    <img
                    src={src}
                    alt={`Car ${index + 1}`}
                    className="w-full h-64 object-contain"
                    />
                </div>
                ))}
            </Carousel>
            */}
        </div>
) 
}
export default Transportation



