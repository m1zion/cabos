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
  { key: 'sanJose', name: 'San José del Cabo', image: '/assets/images/cabos/Picture8.png' },
  { key: 'losCabos', name: 'Cabo San Lucas', image: '/assets/images/cabos/Picture13.png' },
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
    console.log(place);
    return (
        <Layout>
          <div className="relative h-[270px] w-full"> {/**/}            
            <img
            src={withBase(place.image)}
            alt="Background"
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />            
            <div className="bg-black/20 px-3 py-1 rounded-sm backdrop-blur-5 absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent"></div>            
            <div className="absolute inset-0 flex flex-col justify-center items-start text-start">
                <div className="w-[95%] sm:w-[90%] xl:w-[85%] mx-auto">
                    <h2 className="text-white text-5xl sm:text-6xl font-semibold drop-shadow-md mb-2">
                        {place.name}
                    </h2>         
                </div>      
            </div>
          </div>              
          <div>
            Pagina en construcción
          </div>
          <WhatsApp/>
        </Layout>
    )
}
export default places


