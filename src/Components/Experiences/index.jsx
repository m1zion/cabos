import { useContext } from "react";
import contentData from '../../data/content.json';
import { ToursContext } from "../../Context";
import { motion } from 'framer-motion'
import { Link } from "react-router-dom";
import experiencesData from '../../data/experiences.json';
import { CalendarDaysIcon, ClockIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'

const Experiences = () =>{    
    const { language } = useContext(ToursContext);
    const content = contentData[language] || contentData['en']; 
    const experiences = experiencesData.experiences;
    return (     
        <section 
            id="tours" 
            className="w-full px-10 py-5 scroll-mt-20 relative z-[1]"
        >  
            <svg
                viewBox="0 0 6000 6000"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-full h-full object-cover z-[-2]"
                preserveAspectRatio="xMidYMid slice"
            >
                <rect fill="#0cb1b1" width="6000" height="6000" />
                <path
                fill="#18c8c8"
                d="M2282.16,2002C15.65,3086.41,4567.5,5430.64,2244.68,6000h2529.36c-24.06-223.49-52.49-451.81-76.51-679.61C4157.87,3502.14,2793.4,1040.78,4251.82,343c419.75-200.83,1089.15-154.81,1748.18-92.84V0C5621.27,416.55,3265.98,531.3,2282.16,2002z"
                />
                <path
                fill="#18c8c8"
                d="M5154.82,1191c-1413.83,676.45-174.62,3010.39,394.15,4809H6000V1045.41C5673.6,1047.13,5378.66,1083.91,5154.82,1191z"
                />
            </svg>  
            <motion.div
                className="container py-8 z-[2]"
                initial={{ x: -120 , opacity: 0 }} //si lo ponia en 100 ampliaba el viewport y se veia mal el navbar
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.1 }}
                viewport={{ once: true }}
            >
                <h2 className="font-[outfit] text-[2.5rem] sm:text-[3.5rem] text-white text-center sm:text-left">{content.experiencesTitle}</h2>
            </motion.div>
            <div className="px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {experiences.map((experience) => {
              const t = experience.translations[language] || experience.translations.en;
              return (                
                <Link 
                  to={`/experienceDetail/${experience.id}`} 
                  key={experience.id}
                >
                  <div
                    key={experience.id}
                    className="w-[340px] sm:w-[300px] lg:w-[350px] bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-[1.03]"
                  >
                    <img
                      src={experience.images.portrait}
                      alt={t.title}
                      className="w-full h-60 object-cover"
                    />
                    <div className="p-4 space-y-2">
                      <h2 className="text-lg font-semibold text-[#03A6A6]">{t.title}</h2>
                      <div className="flex items-center gap-1"><ClockIcon aria-hidden="true" className="shrink-[0] block size-5 text-[#03A6A6]"/><p className="text-sm text-gray-600">{t.duration}</p></div>
                      <div className="flex items-center gap-1"><CalendarDaysIcon aria-hidden="true" className="shrink-[0] block size-5 text-[#03A6A6]"/><p className="text-sm text-gray-600">{t.period}</p></div>
                      <div className="flex items-center gap-1"><CurrencyDollarIcon aria-hidden="true" className="shrink-[0] block size-5 text-[#03A6A6]"/><p className="text-sm text-gray-600">{t.price}</p></div>
                    </div>
                  </div>
                </Link>
              );
            })}
            </div>
        </section>
    )
}
export default Experiences