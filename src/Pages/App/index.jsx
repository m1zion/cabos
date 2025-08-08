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
import Restaurants from '../Restaurants/'
import TourDetail from '../Tours/tourDetail'
import ExperienceDetail from '../Experiences/'
import BookTour from '../Tours/bookTour'
import BookRestaurant from '../Restaurants/bookRestaurant'
const AppRoutes = () =>{
  let routes = useRoutes([
    { path: '',  element: <Home/> },
    { path: 'Accommodation/:id',  element: <Accommodation/> },
    { path: 'Tours/:id',  element: <Tours/> },
    { path: 'TourDetail/:id',  element: <TourDetail/> },
    { path: 'ExperienceDetail/:id',  element: <ExperienceDetail/> },
    { path: 'BookTour/:id',  element: <BookTour/> },    
    { path: 'BookRestaurant/:id',  element: <BookRestaurant/> },   
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