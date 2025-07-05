import { useContext } from "react";
import contentData from '../../data/content.json';
import { ToursContext } from "../../Context";
import Carousel from 'react-multi-carousel';
import car1 from '/cabos/assets/images/transportation/car(1).png';
import car2 from '/cabos/assets/images/transportation/car(2).png';
import car3 from '/cabos/assets/images/transportation/car(3).png';
import car4 from '/cabos/assets/images/transportation/car(4).png';

import "react-multi-carousel/lib/styles.css";
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
const images = [car1, car2, car3, car4];
const Transportation = () =>{
    const { language } = useContext(ToursContext);
    const content = contentData[language] || contentData['en']; // fallback to English
    return (
        <div id="transportation" className="flex-column p-10 scroll-mt-20 h-[500px] w-full">
            <h1 className="font-[outfit] font-semibold text-[2.5rem] sm:text-[3.5rem] text-[#03A6A6]">
                {content.transportationTitle}
            </h1>
            <Carousel className="" responsive={responsive}>
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
        </div>
) 
}
export default Transportation



