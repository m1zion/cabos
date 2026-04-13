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
import TourDetail from '../tours/tourDetail'
import BookTour from '../tours/bookTour'
import Places from '../places/'
import ExperienceDetail from '../experiences/'
import Accommodation from '../accommodation/'
import BookExperience from '../experiences/bookExperience'
import Restaurants from '../restaurants/'
import BookRestaurant from '../restaurants/bookRestaurant'
import BookTransportation from '../transportation/bookTransportation'
import Medical from '../medical/'
import Terms from '../terms/'
import Privacy from '../privacy/'
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
        { path: 'tours/:category', element: <Tours /> },
        { path: 'tourDetail/:id', element: <TourDetail /> },
        { path: 'bookTour/:id', element: <BookTour /> },
        { path: 'places/:id', element: <Places /> },
        { path: 'ExperienceDetail/:id', element: <ExperienceDetail /> },
        { path: 'BookExperience/:id',  element: <BookExperience/> }, 
        { path: 'BookRestaurant/:id',  element: <BookRestaurant/> },     
        { path: 'Accommodation/:id', element: <Accommodation /> },
        { path: 'Restaurants', element: <Restaurants /> },   
        { path: 'Medical', element: <Medical /> },
        { path: 'BookTransportation/:id',  element: <BookTransportation/> },
        { path: 'Terms', element: <Terms /> },
        { path: 'Privacy', element: <Privacy /> },
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