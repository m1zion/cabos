/*import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const LanguageRedirect = () => {
  const navigate = useNavigate();
  const isPrerender = typeof window !== "undefined" && window.__PRERENDER_INJECTED;
  useEffect(() => {
    if (isPrerender) return;

    const lang = navigator.language.startsWith("es") ? "es" : "en";
    navigate(`/${lang}`);
  }, []);
  // 👇 THIS HELPS react-snap DISCOVER ROUTES
  if (isPrerender) {
    return (
      <div>
        <a href="/en">English</a>
        <a href="/es">Español</a>
        <a href="/de">Deutsch</a>
      </div>
    );
  }
  return null;
};
export default LanguageRedirect;*/