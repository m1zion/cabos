import { useContext } from "react";
import contentData from '../../data/content.json';
import { ToursContext } from "../../Context";
import { motion } from 'framer-motion'
import { Link } from "react-router-dom";
import experiencesData from '../../data/experiences.json';
import { CalendarDaysIcon, ClockIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'
import { withBase } from '../../utils/path';
//OPCION DE COLORES 2.1
//#DDE7E6 #ADD2DA #378BA1 #F8EEDD #FFDCB6 #D2B387
//Hover #286A77
//text #256A77

const themes = {
  sand: {
    background: '#D2B387',
    titleText: '#F8EEDD',
    cardText: '#F8EEDD',
    iconColor: '#F4EFDF',
    cardBg: '#927B46'
  },
  sandBright: {
    background: '#F4EFDF',
    titleText: '#927B46',
    cardText: '#F4EFDF',
    iconColor: '#F4EFDF',
    cardBg: '#927B46'
  }, 
  sandWhite: {
    background: '#F4EFDF',
    titleText: '#927B46',
    cardText: '#3d3d3d',
    iconColor: '#927B46',
    cardBg: '#FFFFFF'
  },
   sandWhite2: {
    background: '#F4EFDF',
    titleText: '#FFFFFF',
    cardText: '#3d3d3d',
    iconColor: '#927B46',
    cardBg: '#FFFFFF'
  }
};
const Experiences = () =>{    
    const { language } = useContext(ToursContext);
    const content = contentData[language] || contentData['en']; 
    const experiences = experiencesData.experiences;
    const theme = themes.sandWhite2; // Try themes.blue or themes.darkBlue
    return (     
        <section 
            id="experiences" 
            className="w-full scroll-mt-20 relative z-[1] overflow-hidden "
            //style={{ backgroundColor: theme.background }}
            style={{ 
              backgroundImage: `url(${withBase('/assets/icons/slanted-gradient.svg')})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat', }}
        >  
          <div className="bg-gradient-to-r from-[#256A77] to-[#256A77]/90">
            <motion.div
                className="container px-10 py-1 z-[2] flex items-center"
                initial={{ x: -120 , opacity: 0 }} //si lo ponia en 100 ampliaba el viewport y se veia mal el navbar
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.1 }}
                viewport={{ once: true }}
            >
                <h2 className="font-[quicksand]] font-light text-[2.5rem] sm:text-[3.5rem] text-center sm:text-left"
                style={{ color: theme.titleText }}>{content.experiencesTitle}</h2>
                <div className="hidden md:block mt-[1rem] ml-[1rem] h-[1px] w-[40%] bg-[white] bg-gradient-to-r from-[#ffffff] to-[#256A77] "></div>
            </motion.div>
          </div>
            
            <div className="px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10"> {/*justify-items-center */}
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
                      src={withBase(experience.images.portrait)} 
                      //src={experience.images.portrait}
                      alt={t.title}
                      className="w-full h-60 object-cover"
                    />
                    <div className="font-[quicksand] p-4 space-y-2">
                      <h2 className="text-lg font-semibold  text-[1.1rem]" style={{ color: theme.cardText }}>{t.title}</h2>
                      <div className="flex items-center gap-2"><ClockIcon           aria-hidden="true" className="shrink-[0] block size-5" style={{ color: theme.iconColor }}/><p className="text-sm" style={{ color: theme.cardText }}>{t.duration}</p></div>
                      <div className="flex items-center gap-2"><CalendarDaysIcon    aria-hidden="true" className="shrink-[0] block size-5" style={{ color: theme.iconColor }}/><p className="text-sm" style={{ color: theme.cardText }}>{t.period}</p></div>
                      <div className="flex items-center gap-2"><CurrencyDollarIcon  aria-hidden="true" className="shrink-[0] block size-5" style={{ color: theme.iconColor }}/><p className="text-sm" style={{ color: theme.cardText }}>{t.price}</p></div>
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