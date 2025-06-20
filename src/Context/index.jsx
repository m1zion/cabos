import { createContext, useEffect, useState } from "react"
export const ToursContext = createContext();

export const ShoppingCartProvider  = ({children}) => {
    // Shopping Card quantity
    const [count,setCount]= useState(0); 
    const [language, setLanguage] = useState('en');

    useEffect(() => {
        const browserLang = navigator.language.slice(0, 2);
        const supportedLangs = ['en', 'es', 'de'];
        if (supportedLangs.includes(browserLang)) {
            setLanguage(browserLang);
        }
    }, []);

    return (
        <ToursContext.Provider value={{
            count,
            setCount,
            language,
            setLanguage,
        }}>
            {children}
        </ToursContext.Provider>   
    )
}