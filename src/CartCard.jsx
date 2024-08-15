import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ShopContext } from "./context/ShopContext";




function CartCard({ id }) {
    const {productsList, shoppingCart, setShoppingCart} = useContext(ShopContext);
    const [prodInfo, setProdInfo] = useState(null);
    const [cartItem, setCartItem] = useState(null)
    
    
    
    useEffect(() => {
    const ctItem = shoppingCart.find(product => product.id === id);
    setCartItem(ctItem)


    const productInfo =   productsList.find(product => product.id === id);
    setProdInfo({...productInfo})
     },[])


    function addToCart(id) {
       
            const index = shoppingCart.findIndex(prod => prod.id === id);
    
             const newCart = [...shoppingCart];
             newCart[index].amount++;
             setShoppingCart(newCart);
            }

    function removeFromCart(id) {
        const index = shoppingCart.findIndex(prod => prod.id === id);
        const newCart = [...shoppingCart];
        console.log("checking if amount = 1"+newCart[index].amount)
        if (newCart[index].amount === 1) {
            newCart.splice(index,1);
            setShoppingCart(newCart)
        } else {
            newCart[index].amount--;
            setShoppingCart(newCart)
        }
    }
       
         
             
           
    
    

    return (
        <div className="flex flex-col flex-wrap w-3/4 gap-6 justify-center">
              <div className="flex bg-base-100 w-full h-32 rounded-lg p-5 gap-5 items-center justify-between">
                <div className="flex justify-center items-center gap-10 h-full font-bold">
                  <img
                    src={prodInfo && prodInfo.images[0]}
                    alt={prodInfo && prodInfo.title}
                    className="rounded-lg h-full mask"
                  />
                  <h2 className="text-lg">{prodInfo && prodInfo.title}</h2>
                </div>
                <div className="flex justify-center items-center gap-5 font-bold">
                  <div className="flex join">
                    <button className="btn btn-outline join-item"onClick={()=> removeFromCart(id)}>-</button>
                    <p
                      className="min-h-3 px-4 join-item flex justify-center items-center border select-none"
                      style={{
                        borderColor:
                          "oklch(var(--btn-color, var(--b2)) / var(--tw-border-opacity))",
                      }}
                    >
                      {cartItem && cartItem.amount}
                    </p>
                    <button className="btn btn-outline join-item" onClick={()=> addToCart(id)}>+</button>
                  </div>
                  <p className="join-item" >€{prodInfo && (Math.trunc((prodInfo.price * cartItem.amount)*100)/100)}</p>
                </div>
              </div>        
            </div>
    )
}


CartCard.propTypes = {
    id: PropTypes.number
}

export default CartCard;