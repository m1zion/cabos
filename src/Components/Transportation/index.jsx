import { useContext } from "react";
import contentData from '../../data/content.json';
import { ToursContext } from "../../Context";
import Carousel from 'react-multi-carousel';

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
const images = [
  '/cabos/assets/images/transportation/car1.png',
  '/cabos/assets/images/transportation/car2.png',
  '/cabos/assets/images/transportation/car3.png',
  '/cabos/assets/images/transportation/car4.png'
];

const Transportation = () =>{
    const { language } = useContext(ToursContext);
    const content = contentData[language] || contentData['en']; // fallback to English
    return (
        <div id="transportation" className="flex-column p-10 scroll-mt-20 h-[500px] w-full">
            <h1 className="font-[outfit] text-[2.5rem] sm:text-[3.5rem] text-[#03A6A6]">
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



