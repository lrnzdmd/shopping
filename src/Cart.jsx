import { useContext, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import homeBg from "./assets/homebg.jpg";
import { ShopContext } from "./context/ShopContext";
import CartCard from "./CartCard";
import Alert from "./Alert";



function Cart() {
    const { shoppingCart, setShoppingCart, productsList } = useContext(ShopContext)
    const [showAlert, setShowAlert] = useState(false);

    function calcTotal() {
        let total = 0;
        shoppingCart.forEach(element => {
            total += (productsList.find(prod => prod.id === element.id).price) * element.amount;
        })
        
        return Math.trunc(total * 100) / 100;
    }


    function checkout() {
        setShowAlert(true);
        setShoppingCart([]);
        setTimeout(() => {
            setShowAlert(false);
        }, 5000)
        
    }

    return (
      <>
        <Navbar></Navbar>
        {showAlert && <Alert>Order placed successfully!</Alert>}
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url(${homeBg})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content min-h-full min-w-full flex-col overflow-scroll">
            <h1 className="mb-5 text-5xl font-bold">
              {shoppingCart.length === 0 ? "Your cart is empty" : "Your Cart"}
            </h1>
            {shoppingCart.map(elem => {return <CartCard key={elem.id} id={elem.id}></CartCard>})}     
            {shoppingCart.length > 0 && <button className="btn btn-accent" onClick={checkout}>Check Out: {calcTotal()}€</button>}
          </div>
        </div>

        <Footer></Footer>
      </>
    );
}

export default Cart;