import { useContext } from "react";
import Layout from '../../Components/Layout'
import toursData from '../../data/tours.json';
import { useParams } from 'react-router-dom';
import { ToursContext } from "../../Context";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet.css";
import contentData from '../../data/content.json';
import { CalendarDaysIcon, ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/24/outline'
import WhatsApp from "../../Components/WhatsApp";
import { withBase } from "../../Utils/path";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
//OPCION DE COLORES 2.1
//#DDE7E6 #ADD2DA #378BA1 #F8EEDD #FFDCB6 #D2B387
//Hover #286A77
//Hover bright #EEF4F3
//text #256A77
const responsive = {
  desktop: {breakpoint: { max: 3500, min: 1024 }, items: 1, },
  tablet: {breakpoint: { max: 1024, min: 464 }, items: 1, },
  mobile: {breakpoint: { max: 464, min: 0 }, items: 1, },
};

const categories = [
  { key: 'sanJose', name: 'San José del Cabo', image:['/assets/images/city.jpg','/assets/images/cabos/sanJose2.png','/assets/images/cabos/sanJose3.png','/assets/images/cabos/sanJose5.png','/assets/images/cabos/sanJose6.png'] },
  { key: 'losCabos', name: 'Cabo San Lucas', image:['/assets/images/cabos/cabos1.png','/assets/images/cabos/cabos2.png','/assets/images/cabos/cabos3.png'] },
  { key: 'laPaz', name: 'La Paz', image:['/assets/images/cabos/Picture6.jpg','/assets/images/cabos/Picture7.png'] },
  { key: 'todosSantos', name: 'Todos Santos', image:['/assets/images/cabos/Picture15.png','/assets/images/cabos/todosSantos2.png','/assets/images/cabos/todosSantos3.png','/assets/images/cabos/todosSantos4.png']}
];

function places() {  
    const { language } = useContext(ToursContext);
    const content = contentData[language] || contentData['en']; 
    const { id } = useParams();  
    const filteredTours = toursData.tours.filter(tour => tour.category === id);
    if (!filteredTours) {
        return <div>Tours not found</div>;
    }
    const place = categories.find(cat => cat.key.toLowerCase() === id.toLowerCase());
    console.log(place.image);
    var texto1 = "1";
    var texto2 = ""
    switch (place.key) {
      case 'sanJose':
        texto1 = content.place16;
        texto2 = content.place17;
      break;
      case 'losCabos':
        texto1 = content.place18;
        texto2 = content.place19;
      break;
      case 'laPaz':
        texto1 = content.place20;
        texto2 = content.place21;
      break;
      case 'todosSantos':
        texto1 = content.place22;
        texto2 = content.place23;
      break;
    }
    return (
        <Layout>
          <div className="font-[quicksand] w-full bg-gradient-to-b from-[#256A77]/15 to-[#fff]/90  flex flex-col justifty-center items-center">            
            <div className='mb-4 h-screen bg-[white] pt-8 w-[100%] max-w-[800px] pl-4 pr-4 sm:pl-8 sm:pr-8 flex flex-col justifty-center items-center'>
              {/*<img
                src={withBase(place.image[0])}
                className="w-[100%] h-auto object-contain"
              />*/}
              <Carousel 
                infinite              
                autoPlay={false}
                className="w-[100%] h-[400px]"            
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
                  {place.image.map((src, index) => (
                  <div key={src} className="w-[100%]">
                      <img
                      src={src}
                      alt={`Car ${index + 1}`}
                      className={`w-[100%] h-[400px] object-cover`}
                      />
                  </div>
                  ))}
              </Carousel>
              <h2 className="w-full text-3xl mt-6 pb-1 sm:text-4xl font-semibold drop-shadow-md mb-2">
                  {place.name}
              </h2>  
              <div className="mb-4  mt-[2px] h-[1px] w-[100%] bg-[white] bg-gradient-to-l from-[#ffffff] to-[#256A77] "></div>
              <h2 className="mb-10">{texto2}</h2>
            </div>
          </div>         
          <WhatsApp/>
        </Layout>
    )
}
export default places

