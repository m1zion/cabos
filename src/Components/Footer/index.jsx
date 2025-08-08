import { useContext } from "react";
import { ToursContext } from "../../Context";
import contentData from '../../data/content.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
const Footer = () =>{
    const { language } = useContext(ToursContext);
    const content = contentData[language] || contentData['en']; 
    return (
        <footer className="bg-[#286A77] text-white px-6 py-10 mt-16 w-[100%]">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
                {/* Contact Section */}
                <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-4">{content.contact}</h3>
                    <p>Email: loscabos.lajolla@gmail.com</p>
                    <p>{content.phone}: +52 123 456 7890</p>
                    <p>{content.location}: Cabo San Lucas, Mexico</p>
                </div>
                {/* Info Section */}
                <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-4">Information</h3>
                    <p>About Us</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>

                {/* Links Section */}
                <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <p>Tours</p>
                    <p>Experiences</p>
                    <p>Accomodation</p>
                </div>
            </div>
            <div className="text-center text-sm mt-10 text-gray-400">
           
                <ul className="flex justify-center gap-2 pt-4 list-none">
                    <li>
                    <a
                        href="https://www.facebook.com/cabos"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-[42px] h-[42px] text-[25px] leading-[41px] text-[#818a91] bg-[#eceeef] rounded-full text-center inline-block transition-all duration-200 hover:text-white hover:bg-[#3b5998]"
                    >
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    </li>
                    <li>
                    <a
                        href="https://www.instagram.com/cabos/"
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