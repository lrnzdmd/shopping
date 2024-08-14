import { useEffect, useState } from 'react'
import './App.css'
import Footer from './Footer';
import Navbar from './Navbar';
import Carousel from './Carousel';
import homeBg from './assets/homebg.jpg'

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



function App() {
  const [productsList, setProductsList] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);
 
  useEffect(() => {
    async function fetchAllProducts() {
      const motorcycleProducts = await fetchProducts('motorcycle');
      const vehicleProducts = await fetchProducts('vehicle');
      setProductsList([...motorcycleProducts, ...vehicleProducts]);
    };
  
    fetchAllProducts();
  }, []);


  return (
    <>
      <Navbar></Navbar>
      <div
        className="hero h-full"
        style={{
          backgroundImage: `url(${homeBg})`,
          height:"44.9em"
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Find your vehicle today!
            </h1>
            <p className="mb-5">We offer some cars, and some motorcycles.</p>
          </div>
          <Carousel productsList={productsList} itemsNumber={productsList.length / 2}></Carousel>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default App
