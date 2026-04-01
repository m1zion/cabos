import { useState } from 'react'
//I was using BrowserRouter  but GitHub Pages does not support server-side routing
//import { useRoutes, HashRouter  } from 'react-router-dom'
import { useRoutes, BrowserRouter, Outlet } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
import LanguageRedirect from '../../Utils/LanguageRedirect'
import './App.css'
import NavBar from '../../Components/NavBar/'
import ScrollToTop from "../../Components/scrollToTop";
import Footer from '../../Components/Footer'
import Home from '../Home/'
import NotFound from '../NotFound/'
import Accommodation from '../Accommodation/'
import Tours from '../Tours/'
import Places from '../Places/'
import Restaurants from '../Restaurants/'
import TourDetail from '../Tours/tourDetail'
import ExperienceDetail from '../Experiences/'
import BookTour from '../Tours/bookTour'
import BookExperience from '../Experiences/bookExperience'
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
  let routes = useRoutes([
    { path: '/', element: <LanguageRedirect/> },
    {
      path: '/:lang',
      element: <Layout />, //wrap everything
      children: [
        { index: true, element: <Home /> },
        { path: 'tours/:id', element: <Tours /> },
        { path: 'TourDetail/:id', element: <TourDetail /> },
        { path: 'ExperienceDetail/:id', element: <ExperienceDetail /> },
        { path: 'BookTour/:id', element: <BookTour /> },

        { path: 'Accommodation/:id', element: <Accommodation /> },
        { path: 'Places/:id', element: <Places /> },

        { path: 'BookExperience/:id',  element: <BookExperience/> },    
        { path: 'BookRestaurant/:id',  element: <BookRestaurant/> },     
        { path: 'BookTransportation/:id',  element: <BookTransportation/> },

        { path: 'Restaurants', element: <Restaurants /> },
        { path: 'Medical', element: <Medical /> },
        { path: 'Terms', element: <Terms /> },
        { path: 'Privacy', element: <Privacy /> },
      ]
    },
    //{ path: '/:lang', element: <Home/> },
    //{ path: '/:lang',  element: <Home/> },
    //{ path: '/Accommodation/:id',  element: <Accommodation/> },
    { path: '*',  element: <NotFound/> },
    {/*<Route path="/:lang/tours/:id" element={<Tours />} />
<Route path="/:lang/tourDetail/:slug" element={<TourDetail />} />*/}
  ]);
  return routes;
};
const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter  >
        {/*<ScrollToTop />*/}
        <AppRoutes/>
        {/*<NavBar/>
        <Footer />*/}
      </BrowserRouter > 
    </ShoppingCartProvider>
  )
}
export default App
  {/*basename={import.meta.env.BASE_URL}*/}