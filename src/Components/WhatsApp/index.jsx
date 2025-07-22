import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
const WhatsApp = () =>{
    const [isOpen, setIsOpen] = useState(true);
    const phone = "525537525072";
    const message = encodeURIComponent("Hi! I'm interested in your services.");
    return (
      <div className="fixed bottom-3 right-4 flex items-center gap-1 z-50">
      {isOpen && (
        <a
          href={`https://wa.me/${phone}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white px-2 py-2 rounded-full flex items-center gap-2 shadow-lg transition-all"
        >
          <img src="/cabos/public/assets/icons/whatsApp.svg" alt="WhatsApp" className="w-8 h-8" />
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
) 
}
export default WhatsApp



