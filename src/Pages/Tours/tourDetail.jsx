import { useContext, useState } from "react";
import Layout from '../../Components/Layout'
import tourData from '../../data/tours.json';
import contentData from '../../data/content.json';
import { useParams } from 'react-router-dom';
import { ToursContext } from "../../Context";
import { CalendarDaysIcon, ClockIcon, CurrencyDollarIcon, TruckIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import "leaflet/dist/leaflet.css";
import L from "leaflet";
// Fix default marker icon (otherwise it won’t appear)
import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import 'react-multi-carousel/lib/styles.css';
import { Link } from "react-router-dom";
import WhatsApp from "../../Components/WhatsApp";
import { withBase } from '../../Utils/path';

// Set default icon manually
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});
const icons = import.meta.glob('../../assets/icons/*.svg', {
  eager: true,
  import: 'default',
});
const responsive = {
  desktop: {breakpoint: { max: 3000, min: 1024 }, items: 1, },
  tablet: {breakpoint: { max: 1024, min: 464 }, items: 1, },
  mobile: {breakpoint: { max: 464, min: 0 }, items: 1, },
};
function TourDetail() {  
    const { language } = useContext(ToursContext);
    const { id } = useParams();
    const tour = tourData.tours.find(a => a.id === id);
    const [showModal, setShowModal] = useState(false);
    const content = contentData[language] || contentData['en']; 
    if (!tour) {
        return <div>Tour not found</div>;
    }
    //console.log(tour);
    const allImages = [tour.images.portrait, ...tour.images.gallery];
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const t = tour.translations[language] || tour.translations.en;
    const handleImageClick = (index) => {
        setSelectedImageIndex(index);
        setShowModal(true);
    };
    return (
        <Layout>
        <div className="relative h-[270px] w-full"> {/**/}            
            <img
            src={withBase(tour.images.portrait)}
            alt="Background"
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />            
            <div className="bg-black/20 px-3 py-1 rounded-sm backdrop-blur-5 absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent"></div>            
            <div className="absolute inset-0 flex flex-col justify-center items-start text-start">
                <div className="w-[95%] sm:w-[90%] xl:w-[85%] mx-auto">
                    <h2 className="text-white text-5xl sm:text-6xl font-semibold drop-shadow-md mb-2">
                        {t.title}
                    </h2>         
                </div>      
            </div>
        </div>
        <div className="font-[quicksand] w-[95%] sm:w-[90%] xl:w-[85%] mt-[2rem] mb-[1rem] text-gray-700 whitespace-pre-line">
            {t.description}
        </div>

        <div className="font-[quicksand] w-[95%] sm:w-[90%] xl:w-[85%] mb-[3rem]">
            <h3 className="text-2xl font-semibold text-[#256A77] mb-4">Tour Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-base">
            <div className="flex flex-col">
                <span className="font-medium text-lg text-[#256A77] flex items-center gap-1"><ClockIcon aria-hidden="true" className="shrink-[0] block size-5"/>{content.duration}:</span>
                <span>{t.duration}</span>
            </div>
            <div className="flex flex-col">
                <span className="font-medium text-lg text-[#256A77] flex items-center gap-1"><CalendarDaysIcon aria-hidden="true" className="shrink-[0] block size-5"/>{content.period}:</span>
                <span>{t.period}</span>
            </div>
            <div className="flex flex-col">
                <span className="font-medium text-lg text-[#256A77] flex items-center gap-1"><UserGroupIcon aria-hidden="true" className="shrink-[0] block size-5"/>{content.age}:</span>
                <span>{t.age}</span>
            </div>
            <div className="flex flex-col">
                <span className="font-medium text-lg text-[#256A77] flex items-center gap-1"><CurrencyDollarIcon aria-hidden="true" className="shrink-[0] block size-5"/>{content.price}:</span>
                <span>{t.price}</span>
            </div>
            <div className="flex flex-col">
                <span className="font-medium text-lg text-[#256A77] flex items-center gap-1"><TruckIcon aria-hidden="true" className="shrink-[0] block size-5"/>{content.rounTripTransportation}:</span>
                <span>{t.rounTripTransportation}</span>
            </div>
            {t.additionalData && (
                <div className="flex flex-col sm:col-span-2">
                <span className="font-medium v text-[#256A77]">📌 {content.additionalData}:</span>
                <span>{t.additionalData}</span>
                </div>
            )}
            </div>
        </div>        
        <div className="font-[quicksand] w-[95%] sm:w-[90%] xl:w-[85%] mb-[3rem] text-gray-600 whitespace-pre-line">
            <Link to={`/bookTour/${tour.id}`}>
                <button className="w-[100%] sm:w-[14rem] mt-6 py-3 bg-[#378BA1] text-white font-medium rounded-sm shadow hover:bg-[#256A77] transition duration-200 cursor-pointer"> {content.bookButton}</button>  
            </Link>
        </div>
       <div className="mb-[2rem] w-[95%] sm:w-[90%] xl:w-[85%]" id="images">
        <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            {allImages.map((img, index) => (
            <div
                key={index}
                className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(40%-0.5rem)] max-w-[500px] aspect-[4/3] overflow-hidden rounded-sm shadow-sm"
            >
                <img
                onClick={() => handleImageClick(index)}
                src={withBase(img)}
                alt={`Gallery ${index}`}
                className="w-full h-full object-cover cursor-pointer"
                />
            </div>
            ))}
        </div>
        </div>        
        {showModal && (
        <div className="fixed inset-0 bg-black/90 bg-opacity-50 z-[999] flex items-center justify-center p-4">
          <button
            className="absolute top-4 right-4 text-white text-2xl cursor-pointer"
            onClick={() => setShowModal(false)}
          >
            ✕
          </button>
          <div className="w-full max-w-4xl">
            <img
                src={withBase(allImages[selectedImageIndex])}
                alt={`Modal ${selectedImageIndex}`}
                className="w-full h-auto rounded-md shadow-lg object-contain max-h-[80vh]"
            />
          </div>
        </div>
        )}
        <WhatsApp/>
        </Layout>
    )
}
export default TourDetail