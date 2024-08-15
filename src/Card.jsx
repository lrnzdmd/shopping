import PropTypes from 'prop-types'
import { useContext, useState } from 'react';
import { ShopContext } from './context/ShopContext';


function Card({ product }) {
  const {shoppingCart, setShoppingCart} = useContext(ShopContext)
  const [amount, setAmount] = useState(1);

  function addToCart(itemId, quantity) {
     const index = shoppingCart.findIndex(prod => prod.id == itemId);
     if (index < 0) {
     setShoppingCart(cart => [...cart, {id: itemId, amount:quantity}]);
     } else {
      const newCart = [...shoppingCart];
      newCart[index].amount += quantity;
      setShoppingCart(newCart);
     }

  
      
    }
  
 
  function changeAmount(event) {
    if (event.target.textContent === "+") {
      setAmount(amount => amount+1);
    } else {
      if (amount > 1) {
        setAmount(amount => amount-1);
      }
    }
  }

    return (
        <div className="card card-compact bg-base-100 bg-opacity-80 w-96 shadow-xl">
<figure style={{height: "50%"}}>
<img 
  src={product.images[0]}
  alt={product.title} />
</figure>
<div className="card-body">
<h2 className="card-title self-center">{product.title}</h2>
<p>{product.description}</p>
<p className="text-lg font-bold">{product.price}€</p>
<div className="card-actions justify-center">
  <button className='btn' onClick={changeAmount}>-</button>
  <button className="btn btn-accent" onClick={() => addToCart(product.id, amount)}>Add {amount} </button>
  <button className='btn' onClick={changeAmount}>+</button>
  
</div>
</div>
</div>
    )
}

Card.propTypes = {
    product: PropTypes.object,
}

export default Card;