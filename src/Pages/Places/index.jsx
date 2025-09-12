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
  { key: 'sunsetCruises', image: '../assets/images/sunset.jpg' },
  { key: 'waterExperiences', image: '../assets/images/snorkel.jpg' },
  { key: 'boatYatch', image: '../assets/images/boat.jpg' },
  { key: 'whaleWatching', image: '../assets/images/sea.jpg' },
  { key: 'camelHorse', image: '../assets/images/camel.jpg' },
  { key: 'atvRazors', image: '../assets/images/utv.jpg' },
  { key: 'dayTrip', image: '../assets/images/land.jpg' },
];

function places() {  
    const { language } = useContext(ToursContext);
    const content = contentData[language] || contentData['en']; 
    const { id } = useParams();  
    const filteredTours = toursData.tours.filter(tour => tour.category === id);
    if (!filteredTours) {
        return <div>Tours not found</div>;
    }
    const categoryData = categories.find(cat => cat.key.toLowerCase() === id.toLowerCase());
    return (
        <Layout>              
          <div>
            Pagina en construcción
          </div>
          <WhatsApp/>
        </Layout>
    )
}
export default places


