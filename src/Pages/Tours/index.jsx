import { useContext } from "react";
import Layout from '../../Components/Layout'
import toursData from '../../data/tours.json';
import { useParams } from 'react-router-dom';
import { ToursContext } from "../../Context";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet.css";
import 'react-multi-carousel/lib/styles.css';
import seaImg from '../../assets/images/sea.jpg';
import boatImg from '../../assets/images/boat.jpg';
import landImg from '../../assets/images/land.jpg';
import cityImg from '../../assets/images/city.jpg';

const categories = [
    { name: 'Sea Adventure', image: seaImg, category: 'sea' },
    { name: 'Yatch & Boat', image: boatImg, category: 'boat' },
    { name: 'Land Adventure', image: landImg, category: 'land' },
    { name: 'City Tour', image: cityImg, category: 'city' },
];
function tours() {  
    const { language } = useContext(ToursContext);
    const { id } = useParams();  
    const filteredTours = toursData.tours.filter(tour => tour.category === id);
    if (!filteredTours) {
        return <div>Tours not found</div>;
    }

console.log(id);
  const categoryData = categories.find(cat => cat.category.toLowerCase() === id.toLowerCase());
console.log(categoryData.name);
    return (
        <Layout>
              
              <div
        className="relative h-[270px] w-full flex items-center justify-center bg-cover bg-center"
     

        style={{ backgroundImage: `url(${categoryData?.image})` }}


      >
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="relative z-10 text-white text-4xl font-semibold uppercase">
          {categoryData?.name || id} Tours
        </h1>
      </div>


      <div className="px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {filteredTours.map((tour) => {
          const t = tour.translations[language] || tour.translations.en;
          return (
            <div
              key={tour.id}
              className="w-[330px] bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-[1.03]"
            >
              <img
                src={tour.images.portrait}
                alt={t.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-4 space-y-2">
                <h2 className="text-lg font-semibold text-[#03A6A6]">{t.title}</h2>
                <p className="text-sm text-gray-600">{t.duration}</p>
                <p className="text-sm text-gray-600">{t.period}</p>
                <p className="text-sm text-gray-600">{t.price}</p>
              </div>
            </div>
          );
        })}
      </div>
        </Layout>
    )
}
export default tours


