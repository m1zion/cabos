import { useRoutes, BrowserRouter, Outlet, Navigate } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
//import LanguageRedirect from '../../Utils/LanguageRedirect'
import './App.css'
import NavBar from '../../Components/NavBar/'
import ScrollToTop from "../../Components/scrollToTop";
import Footer from '../../Components/Footer'
import Home from '../Home/'
import NotFound from '../NotFound/'
import Tours from '../tours/'

const Layout = () => {
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  );
};
const AppRoutes = () =>{
  const isSnap = navigator.userAgent === 'ReactSnap';
  let routes = useRoutes([
    { 
      path: '/', 
      element: <Home/>
    },
    {
      path: '/:lang',
      element: <Layout />, //wrap everything
      children: [
        { index: true, element: <Home /> },
        { path: 'tours/:category', element: <Tours /> }
      ]
    },
    { path: '*',  element: <NotFound/> },
  ]);
  return routes;
};
const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter  >
        <AppRoutes/>
      </BrowserRouter > 
    </ShoppingCartProvider>
  )
}
export default App