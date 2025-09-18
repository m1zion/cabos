import { useContext } from "react";
import Layout from '../../Components/Layout'
import toursData from '../../data/tours.json';
import { useParams } from 'react-router-dom';
import { ToursContext } from "../../Context";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet.css";
import 'react-multi-carousel/lib/styles.css';
import contentData from '../../data/content.json';
import { CalendarDaysIcon, ClockIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'
import { Link } from "react-router-dom";
import WhatsApp from "../../Components/WhatsApp";
import { withBase } from "../../Utils/path";
//OPCION DE COLORES 2.1
//#DDE7E6 #ADD2DA #378BA1 #F8EEDD #FFDCB6 #D2B387
//Hover #286A77
//Hover bright #EEF4F3
//text #256A77
const categories = [
  { key: 'sanJose', name: 'San José del Cabo', image: '/assets/images/city.jpg' },
  { key: 'losCabos', name: 'Cabo San Lucas', image: '/assets/images/cabos/cabos1.jpg' },
  { key: 'laPaz', name: 'La Paz', image: '/assets/images/cabos/Picture6.jpg' },
  { key: 'todosSantos', name: 'Todos Santos', image: '/assets/images/cabos/Picture15.png' }
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
    console.log(place.key);
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
            <div className='mb-4 h-screen bg-[white] pt-8 max-w-[800px] pl-4 pr-4 sm:pl-8 sm:pr-8 flex flex-col justifty-center items-center'>
              <img
                src={withBase(place.image)}
                className="w-[100%] h-auto object-contain"
              />
              <h2 className="w-full text-3xl mt-6 pb-1 sm:text-4xl font-semibold drop-shadow-md mb-2">
                  {place.name}
              </h2>  
              <div className="mb-4  mt-[2px] h-[1px] w-[100%] bg-[white] bg-gradient-to-l from-[#ffffff] to-[#256A77] "></div>
              <h2 className="mb-10">{texto1}{texto2}</h2>
            </div>
          </div>
         
           
          
          <WhatsApp/>
        </Layout>
    )
}
export default places

