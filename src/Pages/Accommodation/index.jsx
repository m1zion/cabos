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

function accommodation() {  
    const { language } = useContext(ToursContext);
    const { id } = useParams();
    const RoomIcon = icons['../../assets/icons/bed.svg'];
    const BathIcon = icons['../../assets/icons/bathroom.svg'];
    const ParkingIcon = icons['../../assets/icons/parking.svg'];

    const accomodation = accomodationData.accomodations.find(a => a.id === id);
    if (!accomodation) {
        return <div>Accommodation not found</div>;
    }
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
            src={accomodation.images.background}
            alt="Background"
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />
            <div className="bg-black/20 px-3 py-1 rounded-sm backdrop-blur-5 absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent"></div>
            
            <div className="absolute inset-0 flex flex-col justify-center items-start text-start">
                <div className="w-[95%] sm:w-[90%] xl:w-[85%] mx-auto">
                    <h2 className="text-white text-5xl sm:text-6xl font-semibold drop-shadow-md mb-2">
                        {accomodation.id}
                    </h2>
                    <h1 className=" text-[1.5rem] text-white">
                        {t.title}
                    </h1>           
                </div>      
            </div>
        </div>
{/*px-3 sm:px-10 */}
        <div className="w-[95%] sm:w-[90%] xl:w-[85%] mt-[1rem] mb-[2rem] flex-column items-left">
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
                    <span>{t.bathrooms} •</span>
                    </div>
                )}
                {ParkingIcon && (
                    <div className="flex items-center gap-1">
                    <img src={ParkingIcon} alt="parking" className="w-4 h-4" />
                    <span>{t.parking}</span>
                    </div>
                )}
            </div> 
        </div>
        <div className="w-[95%] sm:w-[90%] xl:w-[85%] mb-[1rem] text-gray-600 whitespace-pre-line">
            {t.description}
        </div>
        <div className="w-[95%] sm:w-[90%] xl:w-[85%] mb-[3rem] text-gray-600 whitespace-pre-line">
            <button className="w-[100%] sm:w-[9rem] mt-6 py-3 bg-[#03A6A6] text-white font-medium rounded-sm shadow hover:bg-[#028b8b] transition duration-200">Reservar</button>  
        </div> 
        <div className="mb-[2rem] w-[95%] sm:w-[90%] xl:w-[85%] h-[400px] gap-1 flex flex-col md:flex-row" id ="images"> 
            <div className="w-full md:w-1/2 h-[400px]">
                <img
                src={accomodation.images.portrait}
                alt="Main"
                className="w-full h-full object-cover"
                />
            </div>
            <div className="hidden md:grid w-1/2 grid-cols-2 grid-rows-2 gap-1 h-[400px]">
                 {accomodation.images.gallery.slice(0, 4).map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Gallery ${index}`}
                        className="w-full h-full object-cover"
                    />
                ))}
            </div>
        </div>
        
        <div className="w-[95%] sm:w-[90%] xl:w-[85%] mb-[1rem] text-[2rem]">
            {t.amenities}
        </div>
        <div className="w-[95%] sm:w-[90%] xl:w-[85%] mb-[3rem] mt-4 text-left space-y-6">
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
                    src={`/src/assets/icons/amenities/${amenity.icon}`}
                    alt={amenity.name}
                    className="w-6 h-6 object-contain"
                    onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/src/assets/icons/amenities/default.svg";
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
       

        </Layout>
    )
}
export default accommodation