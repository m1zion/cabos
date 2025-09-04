import { useContext, useState, useEffect } from "react";
import Layout from '../../Components/Layout'
import restaurantData from '../../data/restaurants.json';
import contentData from '../../data/content.json';
import { useParams } from 'react-router-dom';
import { ToursContext } from "../../Context";
import "leaflet/dist/leaflet.css";
import 'react-multi-carousel/lib/styles.css';
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import bgImage from '../../assets/icons/bg2.svg';
import { CalendarDaysIcon, ClockIcon, CurrencyDollarIcon, TruckIcon, UserGroupIcon } from '@heroicons/react/24/outline' 
import WhatsApp from "../../Components/WhatsApp";
import { withBase } from '../../Utils/path';
const icons = import.meta.glob('../../assets/icons/*.svg', {
  eager: true,
  import: 'default',
});

function BookRestaurant() {  
    const navigate = useNavigate();
    const { language } = useContext(ToursContext);
    const { id } = useParams();    
    const restaurant = restaurantData.restaurants.find(a => a.id === id);
    const content = contentData[language] || contentData['en']; 
    const [showModal, setShowModal] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const allImages = [restaurant.images.portrait, ...restaurant.images.gallery];
    if (!restaurant) {
        return <div>Restaurant not found</div>;
    }
    const t = restaurant.translations[language] || restaurant.translations.en;
    const {
        register,
        handleSubmit,
        setValue,
        reset,
        watch,
        formState: { errors },
    } = useForm();

    const FoodIcon = icons['../../assets/icons/food3.svg'];
    const DressIcon = icons['../../assets/icons/dress.svg'];
       const handleImageClick = (index) => {
        setSelectedImageIndex(index);
        setShowModal(true);
    };

    const sendEmail = (data) => {
        emailjs
            .send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE2_ID,
            data,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            ) 
            .then((result) => {
            console.log(result.text);
            alert("Your request was sent successfully!");
            reset(); // Reset the form
            navigate("/"); 
            }, (error) => {
                console.error(error.text);
                alert("Something went wrong, please try again later.");
            });
    };
    return (
        <Layout>
            <div className="relative h-[270px] w-full "> {/**/}            
                <img
                src={withBase(restaurant.images.portrait)}
                alt="Background"
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                />            
                <div className="bg-black/20 px-3 py-1 rounded-sm backdrop-blur-5 absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent"></div>            
                <div className="absolute inset-0 flex flex-col justify-center items-start text-start">
                    <div className="w-[95%] sm:w-[90%] xl:w-[85%] mx-auto">
                        <h2 className="text-white text-5xl sm:text-6xl font-semibold drop-shadow-md mb-2">
                            {/*t.title*/}
                        </h2>         
                    </div>      
                </div>
            </div>
            <div 
                className="font-[quicksand] w-full sm:pl-[2rem] mt-[2rem] bg-white bg-no-repeat bg-cover bg-center pb-[4rem] mb-[-4rem] z-[1] relative"
                style={{ backgroundImage: `url(${bgImage})'` }}>                    
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 text-base ">
                    <div className="sm:border sm:border-gray-200 sm:rounded-xl sm:shadow-lg p-4 sm:p-6">
                        <div className="font-semibold text-lg mb-2">{t.title}</div>
                        <div>{t.description}</div>
                        <div className="w-[95%] sm:w-[90%] xl:w-[85%] mb-[3rem] pt-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-base">
                                <div className="flex flex-col">
                                    <span className="font-medium text-lg text-[#256A77] flex items-center gap-1">                                        
                                        {FoodIcon && (
                                            <div className="flex items-center gap-2">
                                            <img src={FoodIcon} alt="food" className="w-5 h-5" />
                                            </div>
                                        )}
                                        {content.kitchen}:</span>
                                    <span>{t.kitchen}</span>
                                </div>                                
                                <div className="flex flex-col">
                                    <span className="font-medium text-lg text-[#256A77] flex items-center gap-1"><ClockIcon aria-hidden="true" className="shrink-[0] block size-5"/>{content.openingTimes}:</span>
                                    <span>{t.openingTimes}</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-medium text-lg text-[#256A77] flex items-center gap-1"><CurrencyDollarIcon aria-hidden="true" className="shrink-[0] block size-5"/>{content.price}:</span>
                                    <span>{t.price}</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-medium text-lg text-[#256A77] flex items-center gap-1">
                                         {DressIcon && (
                                            <div className="flex items-center gap-2">
                                            <img src={DressIcon} alt="food" className="w-5 h-5" />
                                            </div>
                                        )}
                                        {content.dressCode}:</span>
                                    <span>{t.dressCode}</span>
                                </div>

                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                            {allImages.map((img, index) => (
                            <div
                                key={index}
                                className="w-full  lg:w-[calc(50%-0.5rem)] max-w-[500px] aspect-[4/3] overflow-hidden rounded-sm shadow-sm"
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
                    <form onSubmit={handleSubmit(sendEmail)}  className="space-y-4 sm:space-y-6 sm:border sm:border-gray-200 sm:rounded-xl sm:shadow-lg p-4 sm:p-6 bg-white">
                        <h3 className="text-2xl font-semibold text-[#256A77] mb-4 ">{content.restaurantTitle}</h3>
                        <input {...register("restaurant")} type="hidden" id="restaurant" name="restaurant" value={id}/> 
                        <div className="flex flex-col">
                            <label htmlFor="name" className="mb-1 text-sm font-medium text-gray-600">*{content.name}</label>
                            <input
                            {...register("name", { required: true })}
                            type="text"
                            id="name"
                            name="name"
                            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#256A77]"
                            />
                            {errors.name && <span className="text-red-500 text-sm">This field is required</span>}
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email" className="mb-1 text-sm font-medium text-gray-600">*Email</label>
                            <input
                            {...register("email", {
                            required: true,
                            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            })}
                            type="email"
                            id="email"
                            name="email"
                            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#256A77]"
                            />
                            {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="phone" className="mb-1 text-sm font-medium text-gray-600">*{content.phone}</label>
                            <input
                            {...register("phone", { required: true })}
                            type="tel"
                            id="phone"
                            name="phone"
                            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#256A77]"
                            />
                            {errors.phone && <span className="text-red-500 text-sm">This field is required</span>}
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-col w-[48%]">
                                <label htmlFor="date" className="mb-1 text-sm font-medium text-gray-600">*{content.date}</label>
                                <input
                                {...register("date", { required: true })}
                                type="date"
                                id="date"
                                name="date"
                                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#256A77]"
                                />
                                {errors.date && <span className="text-red-500 text-sm">This field is required</span>}
                            </div>
                            <div className="flex flex-col w-[48%]">
                                <label htmlFor="hour" className="mb-1 text-sm font-medium text-gray-600">{content.hour || "Preferred Time"}</label>
                                <select
                                {...register("hour", { required: true })}
                                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#256A77]"
                                >
                                    <option value="">-- Select a time --</option>
                                    <option value="08:00">08:00</option>
                                    <option value="09:00">09:00</option>
                                    <option value="10:00">10:00</option>
                                    <option value="11:00">11:00</option>
                                    <option value="12:00">12:00</option>
                                    <option value="13:00">13:00</option>
                                    <option value="14:00">14:00</option>
                                    <option value="15:00">15:00</option>
                                    <option value="16:00">16:00</option>        
                                    <option value="14:00">17:00</option>
                                    <option value="15:00">18:00</option>
                                    <option value="16:00">19:00</option>
                                    <option value="16:00">20:00</option>
                                    <option value="16:00">21:00</option>
                                </select>
                                {errors.hour && <span className="text-red-500 text-sm">Please select a time</span>}
                            </div>
                        </div>    
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-col w-[48%]">
                                <label htmlFor="adults" 
                                className="mb-1 text-sm font-medium text-gray-600">{content.numberPeople || "Number of Adults"}</label>
                                <input
                                    type="number"
                                    {...register("adults", { required: true, min: 1 })}
                                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#256A77]"
                                    min="1"
                                />
                                {errors.adults && <span className="text-red-500 text-sm">Please enter at least 1 person</span>}
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="event" className="text-sm font-medium text-gray-600">{content.event}</label>
                        </div>                
                        <div className="flex flex-row justify-between">                      
                            <div className="flex flex-col w-[48%]">
                                <div className="flex items-center mb-4">
                                    <input id="event" type="radio" value="birthday" name="event"  {...register("event")} className="w-4 h-4 text-[#256A77] bg-gray-100 border-gray-300 focus:ring-[#256A77]-500 focus:ring-2"/>
                                    <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-600">{content.birthday}</label>
                                </div>
                                <div className="flex items-center mb-4">
                                    <input id="event" type="radio" value="anniversary" name="event" {...register("event")} className="w-4 h-4 text-[#256A77] bg-gray-100 border-gray-300 focus:ring-[#256A77]-500 focus:ring-2"/>
                                    <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-600">{content.anniversary}</label>
                                </div>
                                <div className="flex items-center mb-4">
                                    <input id="event" type="radio" value="honeyMoon" name="event" {...register("event")} className="w-4 h-4 text-[#256A77] bg-gray-100 border-gray-300 focus:ring-[#256A77]-500 focus:ring-2"/>
                                    <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-600">{content.honeyMoon}</label>
                                </div>
                                <div className="flex items-center mb-4">
                                    <input id="event" type="radio" value="graduation" name="event" {...register("event")} className="w-4 h-4 text-[#256A77] bg-gray-100 border-gray-300 focus:ring-[#256A77]-500 focus:ring-2"/>
                                    <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-600">{content.graduation}</label>
                                </div>
                            </div>
                            <div className="flex flex-col w-[48%]">
                                <div className="flex items-center mb-4">
                                    <input id="event" type="radio" value="romantic" name="event" {...register("event")} className="w-4 h-4 text-[#256A77] bg-gray-100 border-gray-300 focus:ring-[#256A77]-500 focus:ring-2"/>
                                    <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-600">{content.romantic}</label>
                                </div>
                                <div className="flex items-center mb-4">
                                    <input id="event" type="radio" value="family" name="event" {...register("event")} className="w-4 h-4 text-[#256A77] bg-gray-100 border-gray-300 focus:ring-[#256A77]-500 focus:ring-2"/>
                                    <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-600">{content.family}</label>
                                </div>
                                <div className="flex items-center mb-4">
                                    <input id="event" type="radio" value="business" name="event" {...register("event")} className="w-4 h-4 text-[#256A77] bg-gray-100 border-gray-300 focus:ring-[#256A77]-500 focus:ring-2"/>
                                    <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-600">{content.business}</label>
                                </div>
                                <div className="flex items-center mb-4">
                                    <input id="event" type="radio" value="bachelor" name="event" {...register("event")} className="w-4 h-4 text-[#256A77] bg-gray-100 border-gray-300 focus:ring-[#256A77]-500 focus:ring-2"/>
                                    <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-600">{content.bachelor}</label>
                                </div>
                            </div>   
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="message" className="mb-1 text-sm font-medium text-gray-600">{content.additionalData}</label>
                            <textarea
                            {...register("message")}
                            id="message"
                            name="message"
                            rows="4"
                            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#256A77] resize-none"
                            placeholder={content.requirements}
                            ></textarea>
                        </div>
                        <div className="flex flex-col-reverse align-center lg:flex-row justify-center">
                            <button
                            type="submit"
                            className="w-full lg:w-[250px] mt-4 px-6 py-3 
                            bg-[#F2A516] hover:bg-[#CF8E0E] transition duration-20
                            text-white font-semibold rounded-md shadow-lg 
                            hover:brightness-110 transition duration-200 cursor-pointer">
                                {content.bookButton}
                            </button>
                        </div>
                    </form>          
                </div>
            </div> 
        <WhatsApp/>
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
        </Layout>
    )
}
export default BookRestaurant