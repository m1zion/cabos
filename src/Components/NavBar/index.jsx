import { useContext } from "react"
import navTexts from '../../i18n/navTexts.json'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ToursContext } from "../../Context"
//import logo from '../assets/icons/logo1.svg'
import Flag from 'react-world-flags'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
    const {language, setLanguage} = useContext(ToursContext);
    const t = navTexts[language] || navTexts.en;
    const navigation = [
        { name: t.accomodation, href: '/#accomodation', current: false },
        { name: t.tours, href: '/#tours', current: false },
        { name: t.restaurants, href: '/#restaurants', current: false },
        { name: t.experiences, href: '/#experiences', current: false },
        { name: t.transportation, href: '/#transportation', current: false },
        { name: t.aboutUs, href: '/#aboutUs', current: false },
    ]
    const langToCountry = {
        en: 'US',
        es: 'MX',
        de: 'DE'
    };
    return (
    <Disclosure as="nav" className="bg-[#03A6A6] fixed z-10 w-full top-0">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-17 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-100 hover:bg-[#087d7d] hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                alt="Your Company"
                src="./src/assets/icons/logo4.svg"
                className="h-12 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-white hover:bg-[#087d7d] hover:text-white',
                      'rounded-md px-3 py-2 text-md whitespace-nowrap',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">          
           <ul className="flex items-center gap-2">
                {['en', 'es', 'de'].map((lang) => (
                <li className="flex" key={lang}>
                    <button
                    onClick={() => setLanguage(lang)}
                    className={`uppercase ${language === lang ? 'font-bold underline' : ''}`}
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
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-100 hover:bg-[#087d7d] hover:text-white',
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



