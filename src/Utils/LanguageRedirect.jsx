/*import { useEffect } from "react";
import { Navigate } from "react-router-dom";

const LanguageRedirect = () => {
  const browserLang = navigator.language.slice(0,2);
  const supported = ["en","es","de"];
  const lang = supported.includes(browserLang) ? browserLang : "en";
  return <Navigate to={`/${lang}`} replace />;
};

export default LanguageRedirect;*/
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const LanguageRedirect = () => {
  const navigate = useNavigate();
  useEffect(() => {
    //prevent redirect during prerender
    if (navigator.userAgent.includes("ReactSnap")) return;
    const lang = navigator.language.startsWith("es") ? "es" : "en";
    navigate(`/${lang}`);
  }, []);

  return null;
};
export default LanguageRedirect;