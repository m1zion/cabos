import { useState } from 'react'
//I was using BrowserRouter  but GitHub Pages does not support server-side routing
import { useRoutes, HashRouter  } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
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
//import Medical from '../Medical/'
const AppRoutes = () =>{
  let routes = useRoutes([
    { path: '',  element: <Home/> },
    { path: 'Accommodation/:id',  element: <Accommodation/> },
    { path: 'Tours/:id',  element: <Tours/> },
    { path: 'Places/:id',  element: <Places/> },
    { path: 'TourDetail/:id',  element: <TourDetail/> },
    { path: 'ExperienceDetail/:id',  element: <ExperienceDetail/> },
    { path: 'BookTour/:id',  element: <BookTour/> },    
    { path: 'BookExperience/:id',  element: <BookExperience/> },    
    { path: 'BookRestaurant/:id',  element: <BookRestaurant/> },     
    { path: 'BookTransportation/:id',  element: <BookTransportation/> }, 
    { path: 'Medical',  element: <Medical/> }, 
    { path: 'Terms',  element: <Terms/> }, 
    { path: 'Privacy',  element: <Privacy/> }, 
    { path: 'Restaurants',  element: <Restaurants/> },
    { path: '*',  element: <NotFound/> },
  ]);
  return routes;
};
const App = () => {
  return (
    <ShoppingCartProvider>
      <HashRouter  >
        <ScrollToTop />
        <AppRoutes/>
        <NavBar/>
        <Footer />
      </HashRouter > 
    </ShoppingCartProvider>
  )
}
export default App

      {/*basename={import.meta.env.BASE_URL}*/}