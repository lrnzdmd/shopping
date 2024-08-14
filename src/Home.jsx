import { useContext } from 'react'
import './Home.css'
import Footer from './Footer';
import Navbar from './Navbar';
import Carousel from './Carousel';
import homeBg from './assets/homebg.jpg'
import { ShopContext } from './context/ShopContext';


function Home() {
  const {shoppingCart} = useContext(ShopContext)


  return (
    <>
      <Navbar shoppingCart={shoppingCart}></Navbar>
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
          <Carousel itemsNumber={3}></Carousel>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default Home;
