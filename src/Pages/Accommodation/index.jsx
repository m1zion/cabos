import { useContext, useState } from "react";
import Layout from '../../Components/Layout'
import accomodationData from '../../data/accomodation.json';
import { useParams } from 'react-router-dom';
import { ToursContext } from "../../Context";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
// Fix default marker icon (otherwise it won’t appear)
import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import WhatsApp from '../../Components/WhatsApp';
import contentData from '../../data/content.json';
import { withBase } from '../../utils/path';
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
function accommodation() {  
    const { language } = useContext(ToursContext);
    const { id } = useParams();
    const RoomIcon = icons['../../assets/icons/bed.svg'];
    const BathIcon = icons['../../assets/icons/bathroom.svg'];
    const ParkingIcon = icons['../../assets/icons/parking.svg'];
    const [showModal, setShowModal] = useState(false);
    const [startIndex, setStartIndex] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(startIndex);
    const content = contentData[language] || contentData['en']; 
    const accomodation = accomodationData.accomodations.find(a => a.id === id);
    if (!accomodation) {
        return <div>Accommodation not found</div>;
    }
    const allImages = [accomodation.images.portrait, ...accomodation.images.gallery];
    const handleImageClick = (index) => {
        setStartIndex(index);
        setShowModal(true);
    };

    const Dot = ({ index, onClick, current }) => (
    <li
        className={`w-3 h-3 mx-1 rounded-full ${
        index === current ? "bg-white" : "bg-gray-400"
        } cursor-pointer`}
        onClick={() => onClick()}
    />
    );
    const t = accomodation.translations[language] || accomodation.translations.en;
    //const position = [23.0344784,-109.7148714]; 
    const position = [accomodation.coordinateX,accomodation.coordinateY]; 
    const groupedAmenities = t.amenitiesList.reduce((acc, amenity) => {
        if (!acc[amenity.category]) {
            acc[amenity.category] = [];
        }
        acc[amenity.category].push(amenity);
        return acc;
    }, {});
    const [openCategories, setOpenCategories] = useState({});
    const toggleCategory = (category) => {
        setOpenCategories((prev) => ({
        ...prev,
        [category]: !prev[category],
        }));
    };

    return (
        <Layout>
        <div className="relative h-[270px] w-full"> {/**/}            
            <img
            src={withBase(accomodation.images.background)}
            alt="Background"
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />
            <div className="bg-black/20 px-3 py-1 rounded-sm backdrop-blur-5 absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-start text-start">
                <div className="w-[95%] sm:w-[90%] xl:w-[85%] mx-auto">
                    <h2 className="text-white text-5xl sm:text-6xl font-semibold drop-shadow-md">
                        {/*accomodation.id*/}
                    </h2>
                    <h1 className="text-3xl sm:text-4xl drop-shadow-md text-white">
                        {t.title}
                    </h1>           
                </div>      
            </div>
        </div>
        {/*px-3 sm:px-10 */}
        <div className="font-[quicksand] w-[95%] sm:w-[90%] xl:w-[85%] mt-[1rem] mb-[2rem] flex-column items-left">
            {/*<h1 className="text-[2rem]">{t.title}</h1>*/}
            <div className="flex items-center gap-4 text-gray-500 text-sm mt-2">
                {RoomIcon && (
                    <div className="flex items-center gap-1">
                    <img src={RoomIcon} alt="rooms" className="w-4 h-4" />
                    <span>{t.beds} •</span>
                    </div>
                )}
                {BathIcon && (
                    <div className="flex items-center gap-1">
                    <img src={BathIcon} alt="bathrooms" className="w-4 h-4" />
                    <span>{t.bathrooms} </span>
                    </div>
                )}
            </div> 
        </div>
        <div className="font-[quicksand] w-[95%] sm:w-[90%] xl:w-[85%] mb-[1rem] text-gray-700 whitespace-pre-line">
            {t.description}
        </div>
        <div className="font-[quicksand] w-[95%] sm:w-[90%] xl:w-[85%] mb-[3rem] text-gray-600 whitespace-pre-line">
            <a href={accomodation.airbnb} target="_blank"  rel="noopener noreferrer">
                <button className="cursor-pointer w-[100%] sm:w-[9rem] mt-6 py-3 bg-[#378BA1] text-white font-medium rounded-sm shadow hover:bg-[#256A77] transition duration-200">{content.bookButton}</button>  
            </a>
        </div> 
        <div className="mb-[2rem] w-[95%] sm:w-[90%] xl:w-[85%] h-[400px] gap-1 flex flex-col md:flex-row" id ="images"> 
            <div className="w-full md:w-1/2 h-[400px] cursor-pointer">
                <img
                src={withBase(accomodation.images.portrait)}
                alt="Main"
                onClick={() => handleImageClick(0)}
                className="w-full h-full object-cover"
                />
            </div>
            <div className="hidden md:grid w-1/2 grid-cols-2 grid-rows-2 gap-1 h-[400px]">
                 {accomodation.images.gallery.slice(0, 4).map((img, index) => (
                    <img
                        key={index}
                        src={withBase(img)}
                        alt={`Gallery ${index}`}
                        className="w-full h-full object-cover"
                    />
                ))}
            </div>
        </div>        
        <div className="font-[quicksand] w-[95%] sm:w-[90%] xl:w-[85%] mb-[1rem] text-[2rem]">
            {t.amenities}
        </div>
        <div className="font-[quicksand] w-[95%] sm:w-[90%] xl:w-[85%] mb-[3rem] mt-4 text-left space-y-6">
        {Object.entries(groupedAmenities).map(([category, amenities]) => (
        <div key={category}
         className="border border-gray-300 rounded-2xl p-4 bg-gray-50 shadow-sm">
            <button
            className="w-full flex justify-between items-center text-left mb-2"
            onClick={() => toggleCategory(category)}
            >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{category}</h3>
                {openCategories[category] ? (
                <ChevronUpIcon className="w-5 h-5 text-gray-600" />
                ) : (
                <ChevronDownIcon className="w-5 h-5 text-gray-600" />
                )}
            </button>            
            {openCategories[category] && (
            <div className="grid grid-cols-2 gap-4">
            {amenities.map((amenity, index) => (
                <div key={index} className="flex items-center gap-2">
                <img
                    src={withBase(`/assets/icons/amenities/${amenity.icon}`)}
                    //src={`/cabos/src/assets/icons/amenities/${amenity.icon}`}
                    alt={amenity.name}
                    className="w-6 h-6 object-contain"
                    onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = withBase("/src/assets/icons/amenities/default.svg");
                    }}
                />
                <span className="text-sm text-gray-700">{amenity.name}</span>
                </div>
            ))}            
            </div>
            )}
        </div>
        ))}
        </div>
        <div className="w-[95%] sm:w-[90%] xl:w-[85%] mb-[1rem] text-[2rem] mb-[3rem]">
            Location
            <div className="mt-[1rem] w-full h-[300px] rounded-lg overflow-hidden shadow-lg z-0 relative">
            <MapContainer 
                center={position} 
                zoom={15} 
                style={{ width: "100%", height: "100%", zIndex: 0 }}
                scrollWheelZoom={false}
            >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                My House 🌴
                </Popup>
            </Marker>
            </MapContainer>
            </div>
        </div>
        {/* Modal with Carousel */}
        {showModal && (
        <div className="fixed inset-0 bg-black/90 bg-opacity-50 z-[999] flex items-center justify-center p-4">
          <button
            className="absolute top-4 right-4 text-white text-2xl cursor-pointer"
            onClick={() => setShowModal(false)}
          >
            ✕
          </button>
          <div className="w-full max-w-4xl">
            <Carousel
              responsive={responsive}
              infinite
              
              autoPlay={false}
              arrows
              initialSlide={startIndex}
              afterChange={(previousSlide, { currentSlide }) => setCurrentSlide(currentSlide)}
                customDot={<Dot current={currentSlide} />}
            >
              {allImages.map((img, index) => (
                <div key={index} className="h-[80vh] flex justify-center items-center">
                  <img
                    src={withBase(img)}
                    alt={`Gallery ${index}`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
        )}
        <WhatsApp/>
        </Layout>
    )
}
export default accommodation