import { useContext } from "react";
import Layout from '../../Components/Layout'
import { ToursContext } from "../../Context";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet.css";
import WhatsApp from '../../Components/WhatsApp';
import contentData from '../../data/medical.json';
import { withBase } from '../../Utils/path';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Logo from '/assets/images/medical/portrait2.jpg'
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
// Set default icon manually
const images = [
  '/assets/images/medical/portrait2.jpg',
  '/assets/images/medical/portrait3.jpg',
  '/assets/images/medical/portrait4.jpg'
];
const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest;
  // onMove means if dragging or swiping in progress.
  return <button onClick={() => onClick()} />;
};
const responsive = {
  desktop: {breakpoint: { max: 3500, min: 1024 }, items: 1, },
  tablet: {breakpoint: { max: 1024, min: 464 }, items: 1, },
  mobile: {breakpoint: { max: 464, min: 0 }, items: 1, },
};

function medical() {  
    const { language } = useContext(ToursContext);
    const medical = contentData.medical;
    const t = medical[0].translations[language] || medical[0].translations.en;
    
    return (
        <Layout>
        <div className="hidden md:block w-[100%] h-[600px] xl:h-[700px]">
          <Carousel 
            infinite              
            autoPlay={true}
            className="w-[100%] h-[600px] xl:h-[700px]"            
            customRightArrow={
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#ADD2DA]/50 text-white p-2 w-[45px] rounded-full shadow-lg hover:bg-[#ADD2DA] cursor-pointer"
              >
                <ChevronRightIcon size={18} />
              </button>
            }
            customLeftArrow={
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#ADD2DA]/50 text-white w-[45px] p-2 rounded-full shadow-lg hover:bg-[#ADD2DA] cursor-pointer"
            >
              <ChevronLeftIcon size={20} />
            </button>
          }
            responsive={responsive}>
                  {images.map((src, index) => (
                  <div key={src} className="w-[100%]">
                      <img
                      src={src}
                      alt={`Car ${index + 1}`}
                      className={`w-[100%] h-[600px] xl:h-[700px] ${index === 0 ? "object-cover" : "object-contain" }`}
                      />
                  </div>
                  ))}
          </Carousel>
        </div>
   
        <div className="font-[quicksand] w-[100%] md:w-[80%] h-[100%]  text-[#256A77] bg-[white]/0 z-10 p-10">
          <div className="flex gap-3 mt-5 text-[2rem] sm:text-[2.5rem]">
            <img  className="h-15 w-auto"
            src={withBase('/assets/images/arteMedico.png')} alt="artemedico"></img>
            <p>{t.title}</p>
          </div>
          <p className="text-justify font-semibold mt-5 text-[1.2rem]">{t.text2}</p>
          <p className="text-justify mt-1 text-[.9rem]">{t.text3}</p>
          <p className="text-justify mt-5 text-[1rem]">{t.text4}</p>
          <p className="text-justify mt-2 text-[1rem]">{t.text5}</p>
          <ul className="list-disc pl-10 mt-4">
              <li className="text-justify mt-2 text-[1rem]">{t.brand1}</li>
              <li className="text-justify mt-2 text-[1rem]">{t.brand2}</li>
              <li className="text-justify mt-2 text-[1rem]">{t.brand3}</li>
          </ul>
          <p className="text-justify font-semibold mt-7 text-[1rem]">{t.text6}</p>
          <p className="text-justify mt-5 text-[1rem]">{t.text7}</p>
          <p className="text-justify mt-2 text-[1rem]">{t.text8}</p>
          <ul className="list-disc pl-10 mt-4">
              {t.list1.map((list1,index) => {
                  return (  <li key={index} className="text-justify mt-2 text-[1rem]">{list1}</li>  );
              })
              }
          </ul>             
          <p className="text-justify mt-5 text-[1rem]">{t.text9}</p>
          <p className="text-justify mt-2 text-[1rem]">{t.text10}</p>
          <ul className="list-disc pl-10 mt-4">
              {t.list2.map((list2,index) => {
                  return (  <li key={index} className="text-justify mt-2 text-[1rem]">{list2}</li>  );
              })
              }
          </ul>      
          <p className="text-justify mt-5 text-[1rem]">{t.text11}</p>
          <p className="text-justify mt-2 text-[1rem]">{t.text12}</p>
          <ul className="list-disc pl-10 mt-4">
            {t.list3.map((list3,index) => {
                return (  <li key={index} className="text-justify mt-2 text-[1rem]">{list3}</li>  );
            })
            }
          </ul>  
          <p className="text-justify mt-5 text-[1rem]">{t.text13}</p>
          <p className="text-justify mt-2 text-[1rem]">{t.text14}</p>  
          <ul className="list-disc pl-10 mt-4">
            {t.list4.map((list4,index) => {
                return (  <li  key={index} className="text-justify mt-2 text-[1rem]">{list4}</li>  );
            })
            }
          </ul>   
          <p className="text-justify mt-5 text-[1rem]">{t.text15}</p>
          <p className="text-justify mt-2 text-[1rem]">{t.text16}</p>   
          <p className="text-justify mt-5 text-[1rem]">{t.text17}</p>
          <p className="text-justify mt-2 text-[1rem]">{t.text18}</p>
          <p className="text-justify mt-2 text-[1rem]">{t.text19}</p>     
          {/*<div className="flex gap-2">
            <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 w-[40px] h-[40px] text-[25px] leading-[39px] text-[#818a91] bg-[#eceeef] rounded-full text-center inline-block transition-all duration-200 hover:text-white hover:bg-[#3b5998]"
            >
                <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 w-[40px] h-[40px] text-[25px] leading-[39px] text-[#818a91] bg-[#eceeef] rounded-full text-center inline-block transition-all duration-200 hover:text-white hover:bg-[linear-gradient(to_right,_#833ab4,_#fd1d1d,_#fcb045)]"
            >
                <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>  */}      
        </div>        
        <WhatsApp/>
        </Layout>
    )
}
export default medical