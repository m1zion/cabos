import { useContext } from "react";
import contentData from '../../data/content.json';
import medicalData from '../../data/medical.json';
import { ToursContext } from "../../Context";
import { motion } from 'framer-motion'
import { Link } from "react-router-dom";
import experiencesData from '../../data/experiences.json';
import { CalendarDaysIcon, ClockIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'
import { withBase } from '../../Utils/path';
import Logo from '/assets/images/medical/portrait.jpg'
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
    const medical = medicalData.medical;
    const m = medical[0].translations[language] || medical[0].translations.en;
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

            <div className="w-full flex justify-center pb-10 rounded-xl ">  
              <div    className="w-[100%] h-full  md:h-[640px] lg:h-[480px] py-10 rounded-xl bg-[white] relative ml-10 mr-10 grid grid-cols-1 ">               
                <div  className="w-[100%] md:w-[70%] xl:w-[60%] h-[100%]  text-[#256A77] bg-[white]/0 relative z-10 px-10">
                  <div className="flex gap-3 mt-1 text-[1.5rem] sm:text-[2rem] md:text-[2.5rem]">
                    <img  className="h-15 w-auto"
                    src={withBase('/assets/images/arteMedico.png')} alt="artemedico"></img>
                    <p>{m.title}</p>
                  </div>
                  <p className="text-justify mt-2 text-[1.2rem]">{m.text2}</p>
                  <p className="text-justify mt-1 text-[.9rem]">{m.text3}</p>
                  <p className="text-justify mt-5 text-[1rem]">{m.intro1}</p>
                  <p className="text-justify mt-1 text-[1rem]">{m.intro2}</p>
                  <Link to={`/Medical`}>
                    <button className="mt-10 h-[3rem] bg-[#DDE7E6]/70  hover:bg-[#ADD2DA]/70 cursor-pointer mt-5 border border-[#256A77] p-1 w-full md:w-[250px] rounded-md">
                      {content.viewMore}
                    </button>
                  </Link>
                </div>
                <div
                  className="w-[100%] md:w-[51%] h-full absolute top-0 right-0"
                >
                  <img
                  src={Logo}
                  className="h-[100%] w-full object-cover  hidden md:block rounded-xl "
                  alt="Logo"
                  />
                  <img
                  src={Logo}
                  className="h-[100%] w-full object-cover opacity-14 block md:hidden rounded-xl "
                  alt="Logo"
                  />
                  <div className="absolute hidden md:block inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,1)_20%,rgba(255,255,255,1)_20%,rgba(255,255,255,0)_50%,rgba(255,255,255,0)_100%)]"></div>
                </div>
              </div>      
            </div>
        </section>
    )
}
export default Experiences