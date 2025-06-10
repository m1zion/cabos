import { createContext, useEffect, useState } from "react"
export const ShoppingCartContext = createContext();

export const ShoppingCartProvider  = ({children}) => {
    // Shopping Card quantity
    const [count,setCount]= useState(0);
    // Product Detail Open/Close
    const [isProductDetailOpen,setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);
    // Product Detail Shos product
    const [productToShow, setProductToShow] = useState({
        title: "",
        price: "",
        description: "",
        images: [],  //Para evitar problema de que no lo encuentre
    });
    // Shopping Cart Add products to cart
    const [cartProducts,setCartProducts] = useState([]);
    // Checkout Side Menu Open/Close
    const [isCheckoutSideMenuOpen,setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);
    // Shopping cart . Order
    const [order,setOrder] = useState([]);

    //Items Get Products
    const [items,setItems]= useState([]);
    const [filteredItems,setFilteredItems]= useState(null);
    useEffect(()=>{
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setItems(data))
    }, [])
    // Get Products by title
    const [searchByTitle,setSearchByTitle]= useState(null);
    const filterItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));
    }  
    useEffect(()=>{
        if(searchByTitle){
            setFilteredItems(filterItemsByTitle(items,searchByTitle));
        }
    }, [items,searchByTitle]);
    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            isCheckoutSideMenuOpen,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems
        }}>
            {children}
        </ShoppingCartContext.Provider>   
    )
}