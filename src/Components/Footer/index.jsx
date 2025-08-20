import { useContext } from "react";
import { ToursContext } from "../../Context";
import contentData from '../../data/content.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom';
const Footer = () =>{
    const { language } = useContext(ToursContext);  
    //PARA LA NAVEGACION ENTRE LAS SECCIONES
    const navigate = useNavigate();
    const location = useLocation();
    const content = contentData[language] || contentData['en']; 
     const handleNavClick = (e, href) => {
      e.preventDefault();
      console.log("Entro");
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
    return (
        <footer className="font-[quicksand] bg-[#286A77] text-white px-6 py-10 mt-16 w-[100%]">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
                {/* Contact Section */}
                <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-4">{content.contact}</h3>
                    <p>Email: loscabosmoments@gmail.com</p>
                    <p>{content.phone}: +52 6241378282</p>
                    <p>{content.location}: Cabo San Lucas, Mexico</p>
                </div>
                {/* Info Section */}
                <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-4">Information</h3>
                    <p className="pb-1">About Us</p>
                    <p className="pb-1">Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>

                {/* Links Section */}
                <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <a onClick={(e) => handleNavClick(e, '#tours')}><p className="pb-1 cursor-pointer">Tours</p></a>
                    <a onClick={(e) => handleNavClick(e, '#experiences')}><p className="pb-1 cursor-pointer">Experiences</p></a>
                    <a onClick={(e) => handleNavClick(e, '#accomodation')}><p className="pb-1 cursor-pointer">Accommodation</p></a>
                </div>
            </div>
            <div className="text-center text-sm mt-10 text-gray-400">
           
                <ul className="flex justify-center gap-2 pt-4 list-none">
                    {/*<li>
                    <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-[42px] h-[42px] text-[25px] leading-[41px] text-[#818a91] bg-[#eceeef] rounded-full text-center inline-block transition-all duration-200 hover:text-white hover:bg-[#3b5998]"
                    >
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    </li>*/}
                    <li>
                    <a
                        href="https://www.instagram.com/loscabos_moments/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-[42px] h-[42px] text-[25px] leading-[40px] text-[#818a91] bg-[#eceeef] rounded-full text-center inline-block transition-all duration-200 hover:text-white hover:bg-[linear-gradient(to_right,_#833ab4,_#fd1d1d,_#fcb045)]"
                    >
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    </li>
                </ul>                   
            </div>
            <div className="text-center text-sm mt-10 text-gray-400">
                &copy; {new Date().getFullYear()} Cabos. All rights reserved.
            </div>
    </footer>
    )
}
export default Footer