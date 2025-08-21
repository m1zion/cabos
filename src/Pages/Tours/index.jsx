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
import { withBase } from '../../utils/path'
//OPCION DE COLORES 2.1
//#DDE7E6 #ADD2DA #378BA1 #F8EEDD #FFDCB6 #D2B387
//Hover #286A77
//Hover bright #EEF4F3
//text #256A77
const categories = [
  { key: 'sunsetCruises', image: '/assets/images/sunset.jpg' },
  { key: 'waterExperiences', image: '/cabos/assets/images/snorkel.jpg' },
  { key: 'boatYatch', image: '/cabos/assets/images/boat.jpg' },
  { key: 'whaleWatching', image: '/cabos/assets/images/sea.jpg' },
  { key: 'camelHorse', image: '/cabos/assets/images/camel.jpg' },
  { key: 'atvRazors', image: '/cabos/assets/images/utv.jpg' },
  { key: 'dayTrip', image: '/cabos/assets/images/land.jpg' },
];

function tours() {  
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
          <div
          className="relative h-[270px] w-full flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${withBase(categoryData?.image)})` }}          
          >
            <div className="absolute inset-0 bg-black/40"></div>
            <h1 className="relative z-10 text-white text-4xl font-semibold uppercase">
              {content.categories[categoryData.key]}
            </h1>
          </div>
          <div className="font-[quicksand] px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {filteredTours.map((tour) => {
              const t = tour.translations[language] || tour.translations.en;
              return (                
                <Link to={`/tourDetail/${tour.id}`} key={tour.id}>
                  <div
                    key={tour.id}
                    className="w-[330px] bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-[1.03]"
                  >
                    <img
                      //src={tour.images.portrait}
                      src={withBase(tour.images.portrait)} 
                      alt={t.title}
                      className="w-full h-60 object-cover"
                    />
                    <div className="p-4 space-y-2">
                      <h2 className="text-[1.1rem] font-semibold text-[#256A77]">{t.title}</h2>
                      <div className="flex items-center gap-1"><ClockIcon aria-hidden="true" className="shrink-[0] block size-5 text-[#256A77]"/><p className="text-sm text-gray-600">{t.duration}</p></div>
                      <div className="flex items-center gap-1"><CalendarDaysIcon aria-hidden="true" className="shrink-[0] block size-5 text-[#256A77]"/><p className="text-sm text-gray-600">{t.period}</p></div>
                      <div className="flex items-center gap-1"><CurrencyDollarIcon aria-hidden="true" className="shrink-[0] block size-5 text-[#256A77]"/><p className="text-sm text-gray-600">{t.price}</p></div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <WhatsApp/>
        </Layout>
    )
}
export default tours


