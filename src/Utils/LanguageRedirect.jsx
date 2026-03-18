import { Navigate } from "react-router-dom";

const LanguageRedirect = () => {
  const browserLang = navigator.language.slice(0,2);
  const supported = ["en","es","de"];
  const lang = supported.includes(browserLang) ? browserLang : "en";
  return <Navigate to={`/${lang}`} replace />;
};

export default LanguageRedirect;