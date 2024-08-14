import { createContext, useState, useEffect } from 'react';

async function fetchProducts(category) {
    try {
      const response = await fetch(`https://dummyjson.com/products/category/${category}`);
      const data = await response.json();
      return data.products; 
    } catch (error) {
      console.error(`Error fetching ${category}:`, error);
      return [];
    }
  };


export const ShopContext = createContext()

export function ShopProvider({ children }) {
    const [productsList, setProductsList] = useState([]);
    const [shoppingCart, setShoppingCart] = useState([]);
   
    useEffect(() => {
        
      async function fetchAllProducts() {
        const motorcycleProducts = await fetchProducts('motorcycle');
        const vehicleProducts = await fetchProducts('vehicle');
        setProductsList([...motorcycleProducts, ...vehicleProducts]);
      
      };
    if (!productsList || productsList.length === 0) {
      fetchAllProducts();
    }
    }, []);

  



    return (
<ShopContext.Provider value={{productsList,setProductsList,shoppingCart,setShoppingCart}}>
    {children}
</ShopContext.Provider>

    )
    

}