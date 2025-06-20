import { useContext } from "react";
import contentData from '../../data/content.json';
import { ToursContext } from "../../Context";
const Accomodation = () =>{
    const { language } = useContext(ToursContext);
    const content = contentData[language] || contentData['en']; // fallback to English
    return (
       <div id="accomodation" className="flex-column p-10 scroll-mt-20 h-[500px] w-full bg-[#eaf8f8]">
            <h1 className="font-[outfit] font-semibold text-[3.5rem] text-[#03A6A6]">
                {content.accomodationTitle}
            </h1>
            <h1>
                {content.accomodationContent}
            </h1>
        </div>
    )
}
export default Accomodation