import { useRoutes, BrowserRouter, Outlet, Navigate } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
//import LanguageRedirect from '../../Utils/LanguageRedirect'
import './App.css'
import NavBar from '../../Components/NavBar/'
import ScrollToTop from "../../Components/scrollToTop";
import Footer from '../../Components/Footer'
import Home from '../Home/'
import NotFound from '../NotFound/'
import Tours from '../Tours/'
import TourDetail from '../Tours/tourDetail'
import BookTour from '../Tours/bookTour'
import Places from '../Places/'
import ExperienceDetail from '../Experiences/'
import Accommodation from '../Accommodation/'
import BookExperience from '../Experiences/bookExperience'
import Restaurants from '../Restaurants/'
import BookRestaurant from '../Restaurants/bookRestaurant'
import BookTransportation from '../Transportation/bookTransportation'
import Medical from '../Medical/'
import Terms from '../Terms/'
import Privacy from '../Privacy/'
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
        { path: 'Tours/:category', element: <Tours /> },
        { path: 'TourDetail/:id', element: <TourDetail /> },
        { path: 'BookTour/:id', element: <BookTour /> },
        { path: 'Places/:id', element: <Places /> },
        { path: 'ExperienceDetail/:id', element: <ExperienceDetail /> },
        { path: 'BookExperience/:id',  element: <BookExperience/> }, 
        { path: 'BookRestaurant/:id',  element: <BookRestaurant/> },     
        { path: 'Accommodation/:id', element: <Accommodation /> },
        { path: 'Restaurants', element: <Restaurants /> },   
        { path: 'Medical', element: <Medical /> },
        { path: 'BookTransportation/:id',  element: <BookTransportation/> },
        { path: 'Terms', element: <Terms /> },
        { path: 'Privacy', element: <Privacy /> }
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