import { useContext } from "react";
import contentData from '../../data/content.json';
import { ToursContext } from "../../Context";
const Transportation = () =>{
    const { language } = useContext(ToursContext);
    const content = contentData[language] || contentData['en']; // fallback to English
    return (
       <div id="transportation" className="flex-column p-10 scroll-mt-20 h-[500px] w-full">
            <h1 className="font-[outfit] font-semibold text-[3.5rem] text-[#03A6A6]">
                {content.transportationTitle}
            </h1>
            <h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h1>
        </div>
    )
}
export default Transportation