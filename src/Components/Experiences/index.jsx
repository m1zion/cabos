import { useContext } from "react";
import contentData from '../../data/content.json';
import { ToursContext } from "../../Context";
import { motion } from 'framer-motion'
import { Link } from "react-router-dom";
import experiencesData from '../../data/experiences.json';
import { CalendarDaysIcon, ClockIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'
  //OPCION DE COLORES 2
//  #E0E7E6
//  #BAD1D9 #E6ECEB
//  #728E9F   #5C7687
//  #F4EFDF
//  #F4DEB9
//  #C8B58B #BDA268 #A88E54	#927B46	#7A683A
//#D9CCB6
//#573808


const themes = {
  sand: {
    background: '#C8B58B',
    titleText: '#F4EFDF',
    cardText: '#F4EFDF',
    cardBg: '#927B46'
  },
  sandBright: {
    background: '#F4EFDF',
    titleText: '#927B46',
    cardText: '#F4EFDF',
    cardBg: '#927B46'
  }
};
const Experiences = () =>{    
    const { language } = useContext(ToursContext);
    const content = contentData[language] || contentData['en']; 
    const experiences = experiencesData.experiences;
    const theme = themes.sandBright; // Try themes.blue or themes.darkBlue
    return (     
        <section 
            id="experiences" 
            className="w-full px-10 py-5 scroll-mt-20 relative z-[1] overflow-hidden"
            style={{ backgroundColor: theme.background }}
        >  
            <motion.div
                className="container py-8 z-[2]"
                initial={{ x: -120 , opacity: 0 }} //si lo ponia en 100 ampliaba el viewport y se veia mal el navbar
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.1 }}
                viewport={{ once: true }}
            >
                <h2 className="font-[outfit] text-[2.5rem] sm:text-[3.5rem] text-center sm:text-left"
                style={{ color: theme.titleText }}>{content.experiencesTitle}</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10"> {/*justify-items-center */}
            {experiences.map((experience) => {
              const t = experience.translations[language] || experience.translations.en;
              return (                
                <Link 
                  to={`/experienceDetail/${experience.id}`} 
                  key={experience.id}
                >                
                  <div
                    key={experience.id}
                    className="w-full  max-w-[400px] h-100 rounded-xl overflow-hidden shadow-lg group cursor-pointer transform transition duration-300 hover:scale-[1.03]"
                    style={{ backgroundColor: theme.cardBg }}
                  >
                    <img
                      src={experience.images.portrait}
                      alt={t.title}
                      className="w-full h-60 object-cover"
                    />
                    <div className="p-4 space-y-2" style={{ color: theme.cardText }}>
                      <h2 className="text-lg font-semibold">{t.title}</h2>
                      <div className="flex items-center gap-1"><ClockIcon aria-hidden="true" className="shrink-[0] block size-5 "/><p className="text-sm ">{t.duration}</p></div>
                      <div className="flex items-center gap-1"><CalendarDaysIcon aria-hidden="true" className="shrink-[0] block size-5 "/><p className="text-sm ">{t.period}</p></div>
                      <div className="flex items-center gap-1"><CurrencyDollarIcon aria-hidden="true" className="shrink-[0] block size-5 "/><p className="text-sm ">{t.price}</p></div>
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