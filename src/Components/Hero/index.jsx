
import videoSrc from '../../assets/videos/video.mp4'
const Hero = () =>{
    return (
        <div className="relative w-full max-h-[500px] h-[60vh] flex items-center justify-center overflow-hidden shadow-lg">
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
            <div className="relative z-10 text-white text-center px-4">
                <h1 className="text-5xl font-bold mb-4">Welcome to Cabos</h1>
                <p className="text-lg">Discover our amazing experiences</p>
            </div>
            {/* Optional dark overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-0"></div>
        </div> 
    )
}
export default Hero