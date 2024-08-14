import { useContext } from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
import homeBg from './assets/homebg.jpg'
import { ShopContext } from './context/ShopContext';





function Contacts() {
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
              We do not exist.
            </h1>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default Contacts;
