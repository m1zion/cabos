import { useContext, useState, useEffect } from "react";
import Layout from '../../Components/Layout'
import experienceData from '../../data/experiences.json';
import contentData from '../../data/content.json';
import { useParams } from 'react-router-dom';
import { ToursContext } from "../../Context";
import "leaflet/dist/leaflet.css";
import 'react-multi-carousel/lib/styles.css';
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import bgImage from '../../assets/icons/bg2.svg'; 
import WhatsApp from "../../Components/WhatsApp";
import { supabase } from '../../supabaseClient';

//OPCION DE COLORES 2.1
//#DDE7E6 #ADD2DA #378BA1 #F8EEDD #FFDCB6 #D2B387
//Hover #286A77
//Hover bright #EEF4F3
//text #256A77
function BookTransportation() {  
    const navigate = useNavigate();
    const { language } = useContext(ToursContext);
    const { id } = useParams();    
    const content = contentData[language] || contentData['en']; 
    if (id != 'sienna' && id != 'suburban') {
        return <div>Transportation not found</div>;
    }
    const {
        register,
        handleSubmit,
        setValue,
        reset,
        watch,
        formState: { errors },
    } = useForm();



    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const fetchSuggestions = async (value) => {
        if (value.length < 3) {
            setSuggestions([]);
            return;
        }
        const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(value)}&format=json&addressdetails=1&limit=5&viewbox=-115.37,28.00,-109.41,22.17&bounded=1&countrycodes=mx`;
        const res = await fetch(url, {headers: {"Accept-Language": "es",},});
        const data = await res.json();
        setSuggestions(data);
    };

    const handleChange = (e) => {
        const value = e.target.value;
        console.log(value);
        setQuery(value);
        fetchSuggestions(value);
    };

    const handleSelect = (place) => {
        setQuery(place.display_name);
        setSuggestions([]);
        console.log("Selected:", place); // place.lat, place.lon
    };

    const sendEmail = (data) => {
        //console.log(data);
        emailjs
            //.send('service_eab0n6c', 'template_hxk3b34', data, 'jPOZt81yZmLW-1dWi')
            .send('service_eab0n6c', 'template_14wde1c', data, 'jPOZt81yZmLW-1dWi')            
            .then((result) => {
            console.log(result.text);
            alert("Your ride request was sent successfully!");
            reset(); // Reset the form
            navigate("/"); 
            }, (error) => {
                console.error(error.text);
                alert("Something went wrong, please try again later.");
            });
    };
    return (
        <Layout>       
        <div 
            className="font-[quicksand] w-full sm:pl-[2rem] mt-[2rem] bg-white bg-no-repeat bg-cover bg-center pb-[4rem] mb-[-4rem] z-[1] relative">
            {/*style={{ backgroundImage: `url(${bgImage})` }}*/}
            <h3 className="text-2xl font-semibold text-[#256A77] mb-4 pl-4 sm:pl-6">{content.transportationBookTitle}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 text-base ">
            <form onSubmit={handleSubmit(sendEmail)}  className="space-y-4 sm:space-y-6 sm:border sm:border-gray-200 sm:rounded-xl sm:shadow-lg p-4 sm:p-6 bg-white">
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
                        id="hour"
                        name="hour"
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
                        </select>
                        {errors.hour && <span className="text-red-500 text-sm">Please select a time</span>}
                    </div>
                </div>    
                
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col w-[48%]">
                        <label htmlFor="adults" 
                         className="mb-1 text-sm font-medium text-gray-600">{content.numberPeople || "Number of People"}</label>
                        <input
                            type="number"
                            id="adults"
                            name="adults"
                            {...register("adults", { required: true, min: 1 })}
                            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#256A77]"
                            min="1"
                        />
                        {errors.adults && <span className="text-red-500 text-sm">Please enter at least 1 person</span>}
                    </div>
                    <div className="flex flex-col w-[48%]">
                        <label htmlFor="flightNumber" 
                         className="mb-1 text-sm font-medium text-gray-600">{content.flightNumber || "Flight"}</label>
                        <input
                            type="text"
                            id="flightNumber"
                            name="flightNumber"
                            {...register("flightNumber")}
                            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#256A77]"                        
                        />
                    </div>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="from" className="mb-1 text-sm font-medium text-gray-600">*{content.from}</label>
                    <textarea
                    {...register("from", { required: true })}
                    id="from"
                    name="from"
                    rows="2"
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#256A77] resize-none"
                    ></textarea>
                    {errors.from && <span className="text-red-500 text-sm">This field is required</span>}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="to" className="mb-1 text-sm font-medium text-gray-600">*{content.to}</label>
                    <textarea
                    {...register("to", { required: true })}
                    id="to"
                    name="to"
                    rows="2"
                    value={query}
                    onChange={handleChange}
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#256A77] resize-none"
                    ></textarea>

                    {suggestions.length > 0 && (
                        <div className="border border-gray-300 rounded-md mt-1 bg-white shadow-md max-h-40 overflow-y-auto">
                        {suggestions.map((place) => (
                            <div
                            key={place.place_id}
                            onClick={() => handleSelect(place)}
                            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                            >
                            {place.display_name}
                            </div>
                        ))}
                        </div>
                    )}


                    {errors.to && <span className="text-red-500 text-sm">This field is required</span>}
                </div>              
                <div className="flex flex-col-reverse align-center lg:flex-row justify-between">
                    <button
                    type="submit"
                    className="w-full lg:w-[200px] mt-4 px-6 py-3 bg-[#378BA1] text-white font-medium rounded-md shadow hover:bg-[#286A77] transition duration-200"
                    >
                    {content.bookButton}
                    </button>
                </div>
            </form>           
            </div>
        </div>
        <WhatsApp/>
        </Layout>
    )
}
export default BookTransportation