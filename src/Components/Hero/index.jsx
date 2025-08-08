
import videoSrc from '../../assets/videos/video.mp4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { motion } from "framer-motion";
const Hero = () =>{
    return (
        <div className="relative w-full max-h-[500px] h-[60vh] flex items-start justify-start overflow-hidden shadow-lg">
            {/* Video Background */}
            <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
            <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay Content */}
            <div className="relative z-10 text-white text-start pl-8 pt-20">
                 <motion.div
                    /*className="flex items-end gap-3"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}*/
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
  
                >
                    <div className='flex items-end gap-3'>
                        <h1 className="text-3xl text-end sm:text-5xl font mb-4 ">Welcome to</h1>
                    </div> 
                    <div className='flex items-end flex-wrap gap-2 sm:gap-3 '>
                          <h1 className="text-5xl sm:text-6xl font-bold mb-4 ">Los Cabos</h1>
                          <h1 style={{ fontFamily: 'Julee, cursive' }} className="text-5xl sm:text-6xl font-bold mb-[12px] ">Moments</h1>
                    </div>             
                </motion.div>     
                <motion.div
                    className="text-lg"
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >      
                    <p style={{ fontFamily: 'Great Vibes, cursive' }} className="text-[1.8rem]">We create memories for life, in Paradise</p>
                </motion.div>

                <motion.ul
                    className="flex items-center gap-2 pt-4 list-none"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9, duration: 0.9 }}
                >   
                    <li>
                        <a
                            href="https://www.facebook.com/cabos"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-[32px] h-[32px] text-[20px] leading-[30px] text-[#818a91] bg-[#eceeef] rounded-full text-center inline-block transition-all duration-200 hover:text-white hover:bg-[#3b5998]"
                        >
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                    </li>
                    <li>
                    <a
                        href="https://www.instagram.com/cabos/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-[32px] h-[32px] text-[20px] leading-[30px] text-[#818a91] bg-[#eceeef] rounded-full text-center inline-block transition-all duration-200 hover:text-white hover:bg-[linear-gradient(to_right,_#833ab4,_#fd1d1d,_#fcb045)]"
                    >
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    </li>
                    {/*<li className="flex-1">
                        <hr className="border opacity-50 w-[50px]" />
                    </li>*/}  
                </motion.ul>         
            </div>


            
            {/* Optional dark overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-0"></div>
        </div> 
    )
}
export default Hero