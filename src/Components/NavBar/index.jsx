import { useContext } from "react"
import navTexts from '../../i18n/navTexts.json'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ToursContext } from "../../Context"
import logo from '/src/assets/icons/logo17.png'
import Flag from 'react-world-flags'
import { useNavigate, useLocation } from 'react-router-dom';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
    const {language, setLanguage} = useContext(ToursContext);
    const t = navTexts[language] || navTexts.en;
    const navigation = [
        { name: t.tours, href: '#tours', current: false },
        { name: t.experiences, href: '#experiences', current: false },
        { name: t.accomodation, href: '#accomodation', current: false },
        { name: t.restaurants, href: '#restaurants', current: false },
        { name: t.transportation, href: '#transportation', current: false },
    ]
    const langToCountry = {
        en: 'US',
        es: 'MX',
        de: 'DE'
    };
    //PARA LA NAVEGACION ENTRE LAS SECCIONES
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavClick = (e, href) => {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const scrollToTarget = () => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
      if (location.pathname !== "/") {
        navigate("/", { replace: false }); // Go to home
        // Delay scroll to wait for the home page to load
        setTimeout(scrollToTarget, 200);
      } else {
        scrollToTarget();
      }
    };
//OPCION DE COLORES 2
//  #E0E7E6  #BAD1D9  #728E9F   #5C7687  #F4EFDF  #F4DEB9  #C8B58B   #573808
//OPCION DE COLORES 2.1
//#DDE7E6 #ADD2DA #378BA1 #F8EEDD #FFDCB6 #D2B387
//Hover #286A77
//text #256A77
    return (
    <Disclosure as="nav" 
    className="bg-gradient-to-r from-[#378BA1]/80 to-[#75ACC6]/80 backdrop-blur-md backdrop-saturate-150 fixed z-10 w-full top-0 shadow-md"
    >
      <div className=" mx-auto w-full px-2 md:px-6 lg:px-8">
        <div className="relative flex h-17 items-center justify-between">

          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-100 hover:bg-[#BAD1D9] hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 open:block" />
            </DisclosureButton>
          </div>

          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <div className="flex shrink-0 items-center">
              <a href="./">
                <img
                alt="Los cabos moments"
                src={logo}
                className="h-13 w-auto"
                />
              </a>
            </div>
            <div className="hidden md:ml-6 md:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}  //con react router
                    onClick={(e) => handleNavClick(e, item.href)}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-[#ffffff]' : 'text-[#fff] hover:bg-[#286A77]',
                      'rounded-md px-3 py-2 text-md md:text-lg whitespace-nowrap',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className=" absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">          
           <ul className="flex items-center gap-2">
                {['en', 'es', 'de'].map((lang) => (
                <li className="flex" key={lang}>
                    <button
                    onClick={() => setLanguage(lang)}
                    className={`uppercase cursor-pointer ${language === lang ? 'font-bold underline' : ''}`}
                    >
                        <Flag code={langToCountry[lang]} style={{ width: 24, height: 16 }} />                            
                    </button>
                </li>
                ))}
            </ul>
          </div>

        </div>
      </div>
      

      {/*Burguer*/}
      <DisclosurePanel className="md:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              onClick={(e) => handleNavClick(e, item.href)}
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-100 hover:bg-[#286A77] hover:text-white',
                'block rounded-md px-3 py-2 text-base',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}



