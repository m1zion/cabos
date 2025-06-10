import { useContext, useEffect, useState } from "react";
import { ShoppingCartContext } from "../../Context";
import toursData from '../../data/tours.json';
const Tours = () =>{
    const { language } = useContext(ShoppingCartContext);
    const [tours, setTours] = useState([]);
    useEffect(() => {
        // Filter only active tours
        const activeTours = toursData.tours.filter(tour => tour.status === "active");
        setTours(activeTours);
     }, []);
    return (
        <section id="tours" className="px-4 md:px-16 lg:px-32 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Tours</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => {
            const t = tour.translations[language] || tour.translations.en;
            return (
                <div key={tour.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <img src={tour.images.portrait} alt={t.title} className="w-full h-60 object-cover" />
                    <div className="p-4 space-y-2">
                        <h3 className="text-xl font-semibold">{t.title}</h3>
                        <p className="text-gray-600">{t.description}</p>
                        <p className="text-sm text-gray-500">{t.duration} • {t.age} • {t.dificulty}</p>
                        <p className="text-primary font-bold">{t.price}</p>
                    </div>
                </div>
            );
            })}
        </div>
        </section>
    )
}
export default Tours