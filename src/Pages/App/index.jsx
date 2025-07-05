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
const AppRoutes = () =>{
  let routes = useRoutes([
    { path: '/',  element: <Home/> },
    { path: '/Accommodation/:id',  element: <Accommodation/> },
    { path: '/*',  element: <NotFound/> },
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