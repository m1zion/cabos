import { useContext, useState, useEffect } from "react";
import Layout from '../../Components/Layout'
import tourData from '../../data/tours.json';
import contentData from '../../data/content.json';
import { useParams } from 'react-router-dom';
import { ToursContext } from "../../Context";
import "leaflet/dist/leaflet.css";
import 'react-multi-carousel/lib/styles.css';
import { createClient } from "@supabase/supabase-js";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import bgImage from '../../assets/icons/bg2.svg'; 
import WhatsApp from "../../Components/WhatsApp";

const supabaseUrl = "https://qzjipxehwcrgqmjzeqbv.supabase.co"; // your URL
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6amlweGVod2NyZ3FtanplcWJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI4ODE5ODcsImV4cCI6MjA2ODQ1Nzk4N30.Ay5OCwOOFS_9tpouzMhipHCz40Fz0tZb5EKyV0NvGbU";
const supabase = createClient(supabaseUrl, supabaseKey);
function BookTour() {  
    const { language } = useContext(ToursContext);
    const { id } = useParams();
    
    const tour = tourData.tours.find(a => a.id === id);
    const content = contentData[language] || contentData['en']; 
    if (!tour) {
        return <div>Tour not found</div>;
    }
    const t = tour.translations[language] || tour.translations.en;
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm();
    const [promoCode, setPromoCode] = useState("");
    const [discount, setDiscount] = useState(0); // in percentage
    const validPromoCodes = {
    "SUMMER10": 10,
    "WELCOME15": 15,
    "VIP20": 20,
    };
    //CALCULATE THE PRICE
    const [totalPrice, setTotalPrice] = useState(0);
    const adults = watch("adults") || 0;
    const children = watch("children") || 0;
    useEffect(() => {
        const countAdults = parseInt(adults);
        const countChildren = parseInt(children);
        const adultPrice = parseFloat(tour.adultPrice) || 0;
        const childPrice = parseFloat(tour.childPrice) || 0;
        if (!isNaN(countAdults) && !isNaN(countChildren)) {
            let total = (countAdults * adultPrice) + (countChildren * childPrice);
            if (discount > 0) {
                total = total - (total * discount / 100);
            }
            setTotalPrice(total);
        }
    }, [adults,children, tour.adultPrice,discount]);
    const handlePromoCode = () => {
        const code = promoCode.toUpperCase().trim();
        if (validPromoCodes[code]) {
            setDiscount(validPromoCodes[code]);
            alert(`Promo code applied! ${validPromoCodes[code]}% off`);
        } else {
            setDiscount(0);
            alert("Invalid promo code");
        }
    };
    const applyPromoCodePHP = async () => {
        const response = await fetch("supervisiones/Administrador/getCode.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ code: promoCode }),
        });
        const result = await response.json();
        if (result.valid) {
            setDiscount(result.discount);
            alert(`Promo code applied! ${result.discount}% off`);
        } else {
            setDiscount(0);
            alert("Invalid promo code");
        }
    };

    const applyPromoCode = async () => {
        const code = promoCode.toUpperCase().trim();
        const { data, error } = await supabase
            .from("promo_codes")
            .select("code, discount")
            .eq("code", code)
            .eq("is_active", true)
            .single(); // returns only one row
        if (error) {
            console.error("Error fetching promo:", error);
            alert("Invalid promo code");
            setDiscount(0);
            return;
        }
        if (data) {
            setDiscount(data.discount);
            alert(`Promo code applied! ${data.discount}% off`);
        } else {
            setDiscount(0);
            alert("Invalid promo code");
        }
    };

    const sendEmail = (data) => {
        emailjs
            .send('service_eab0n6c', 'template_hxk3b34', data, 'jPOZt81yZmLW-1dWi')
            .then((result) => {
            console.log(result.text);
            alert("Your booking request was sent successfully!");
            reset(); // Reset the form
            }, (error) => {
            console.error(error.text);
            alert("Something went wrong, please try again later.");
            });
    };
    return (
        <Layout>
        <div className="relative h-[270px] w-full"> {/**/}            
            <img
            src={tour.images.portrait}
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
        <div 
            className="w-full sm:pl-[2rem] mt-[2rem] bg-white bg-no-repeat bg-cover bg-center pb-[4rem] mb-[-4rem] z-[1] relative"
            style={{ backgroundImage: `url(${bgImage})` }}>
            <h3 className="text-2xl font-semibold text-[#03A6A6] mb-4 pl-4 sm:pl-6">{content.bookTitle}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 text-base ">

            <form onSubmit={handleSubmit(sendEmail)}  className="space-y-4 sm:space-y-6 sm:border sm:border-gray-200 sm:rounded-xl sm:shadow-lg p-4 sm:p-6 bg-white">
                <input
                    {...register("tour")} 
                    type="hidden"
                    id="tour"
                    name="tour"
                    value={id}
                />        
                <div className="flex flex-col">
                    <label htmlFor="email" className="mb-1 text-sm font-medium text-gray-600">*{content.name}</label>
                    <input
                    {...register("name", { required: true })}
                    type="text"
                    id="name"
                    name="name"
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#03A6A6]"
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
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#03A6A6]"
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
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#03A6A6]"
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
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#03A6A6]"
                        />
                        {errors.date && <span className="text-red-500 text-sm">This field is required</span>}
                    </div>
                    <div className="flex flex-col w-[48%]">
                        <label htmlFor="hour" className="mb-1 text-sm font-medium text-gray-600">{content.hour || "Preferred Time"}</label>
                        <select
                        {...register("hour", { required: true })}
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#03A6A6]"
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
                        </select>
                        {errors.hour && <span className="text-red-500 text-sm">Please select a time</span>}
                    </div>
                </div>    

                <div className="flex flex-row justify-between text-md text-[#03A6A6]">
                    {(tour.adultPrice === '-' && tour.childPrice === '-') && ('*This tour requieres additional data to calculate the price please provide it in the description: ' + t.price)}
                </div>
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col w-[48%]">
                        <label htmlFor="adults" 
                         className="mb-1 text-sm font-medium text-gray-600">{content.adults || "Number of Adults"}</label>
                        <input
                            type="number"
                            {...register("adults", { required: true, min: 1 })}
                            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#03A6A6]"
                            min="1"
                        />
                        {errors.adults && <span className="text-red-500 text-sm">Please enter at least 1 adult</span>}
                    </div>

                    <div className="flex flex-col w-[48%]">
                        <label htmlFor="children" 
                        className={`mb-1 text-sm font-medium ${
                                    tour.childPrice === 0 || tour.childPrice === '-' ? 'text-gray-400' : 'text-gray-600'
                                }`}
                        >{content.children || "Number of Children"} {tour.childPrice == '-' && '(Adults only)'}</label>
                        <input
                            type="number"
                            {...register("children", { required: true, min: 0 })}
                            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#03A6A6]"
                            min="0"
                            disabled = {tour.childPrice == '-' ? true : false}
                        />                        
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-2">
                    <input
                        type="text"
                        placeholder={content.promoCode}
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#03A6A6]"
                    />
                    <button
                        type="button"
                        onClick={applyPromoCode} //handlePromoCode if i want to use the frontend  applyPromoCode If i want to use php
                        className="px-4 py-2 bg-[#F2A516] text-white rounded-md hover:bg-[#d79410] transition"
                    >
                        {content.apply}
                    </button>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="message" className="mb-1 text-sm font-medium text-gray-600">{content.additionalData}</label>
                    <textarea
                    {...register("message")}
                    id="message"
                    name="message"
                    rows="4"
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#03A6A6] resize-none"
                    placeholder={content.requirements}
                    ></textarea>
                </div>
                <div className="flex flex-col-reverse align-center lg:flex-row justify-between">
                    <button
                    type="submit"
                    className="w-full lg:w-[200px] mt-4 px-6 py-3 bg-[#03A6A6] text-white font-medium rounded-md shadow hover:bg-[#028b8b] transition duration-200"
                    >
                    {content.bookButton}
                    </button>
                    <div className="h-100% sm:pl-4 flex flex-col justify-center">
                        <p className="text-md text-[#03A6A6]">{content.priceTour}: {content.adults} {tour.adultPrice} USD, {content.children} {tour.childPrice} USD </p>
                        <p className="font-semibold text-xl text-[#F2A516]">Total: {totalPrice} USD</p>
                    </div>
                </div>
            </form>           
            </div>
        </div> 
        <WhatsApp/>
        </Layout>
    )
}
export default BookTour