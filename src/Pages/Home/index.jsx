import React, { Suspense, lazy, useState } from 'react'
import { ChevronLeftIcon} from "@heroicons/react/24/solid"; // or use any icon you like
import Hero from '../../Components/Hero'
import Footer from '../../Components/Footer'
import Layout from '../../Components/Layout'
import About from '../../Components/About'
// Lazy load for animations/scroll-sensitive components
const Tours = lazy(() => import('../../Components/Tours'))
const Experiences = lazy(() => import('../../Components/Experiences'))
const Accomodation = lazy(() => import('../../Components/Accomodation'))
const Restaurants = lazy(() => import('../../Components/Restaurants'))
const Transportation = lazy(() => import('../../Components/Transportation'))

function Home() {  
  const [isOpen, setIsOpen] = useState(true);
  const phone = "521XXXXXXXXXX";
  const message = encodeURIComponent("Hi! I'm interested in your services.");
  const currentPath = window.location.pathname;
  return (
    <Layout>
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <About/>
        <Accomodation />
        <Tours />
        <Restaurants/>        
        <Transportation/>

        <div className="fixed bottom-3 right-4 flex items-center gap-1 z-50">
        {isOpen && (
          <a
            href={`https://wa.me/${phone}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-2 py-2 rounded-full flex items-center gap-2 shadow-lg transition-all"
          >
            <img src="./public/assets/icons/whatsApp.svg" alt="WhatsApp" className="w-8 h-8" />
          </a>
        )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-white border border-gray-300 hover:border-gray-500 text-gray-700 rounded-full p-2 shadow-lg transition"
            aria-label="Toggle WhatsApp Button"
          >
            <ChevronLeftIcon className={`w-5 h-5 transform transition-transform ${isOpen ? "rotate-180" : "" }`}/>
          </button>
        </div>
      </Suspense>
      {/*<Footer />*/}
         
    </Layout>
  )
}
export default Home
