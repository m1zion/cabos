import { NavLink } from "react-router-dom"
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { HashLink } from 'react-router-hash-link'
import navTexts from '../../i18n/navTexts.json';
const NavBar = () =>{
    const {language, setLanguage} = useContext(ShoppingCartContext);
    const t = navTexts[language] || navTexts.en;
    const activeStyle = "underline underline-offset-3";
    return (
        <nav className="bg-white flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to='/'>{t.brand}</NavLink>
                </li>
                <li>
                    <HashLink smooth to="/#accomodation">{t.accomodation}</HashLink>
                </li>
                <li>
                    <HashLink smooth to='/#tours'>{t.tours}</HashLink>
                </li>
                <li>
                    <HashLink smooth to='/#restaurants'>{t.restaurants}</HashLink>
                </li>
                <li>
                    <HashLink smooth to="/#experiences">{t.experiences}</HashLink>
                </li>
                <li>
                    <HashLink smooth to="/#transportation">{t.transportation}</HashLink>
                </li>
                <li>
                    <NavLink to='/aboutUs'>{t.aboutUs}</NavLink></li>              
            </ul>  

            <ul className="flex items-center gap-2">
                {['en', 'es', 'de'].map((lang) => (
                <li key={lang}>
                    <button
                    onClick={() => setLanguage(lang)}
                    className={`uppercase ${language === lang ? 'font-bold underline' : ''}`}
                    >
                    {lang}
                    </button>
                </li>
                ))}
            </ul>
            

        </nav>
    )
}

export default NavBar