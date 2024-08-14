import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types"
import Slide from "./Slide.jsx"
import { ShopContext } from "./context/ShopContext.jsx";


function Carousel({ itemsNumber }) {
    const [randomList, setRandomList] = useState([])
    const {productsList} = useContext(ShopContext)
    
    function getRandomProducts() {
        if (!productsList || productsList.length === 0) {
            console.log("productsList is still loading");
            return [];
        }

        const originalList = productsList;
        console.log("trying to create randomlist")
        const randomList = [];
        while (randomList.length < itemsNumber) {
            const index = Math.floor(Math.random() * (originalList.length));
            randomList.push(originalList.splice(index,1)[0]);
        }
        return randomList;   
    }

    useEffect(() => { 
        setRandomList(getRandomProducts())
        
     
        
    }, [productsList])

    


    return (
        <>
        <div className="carousel rounded-box w-96 ">

        {randomList.map((product , index, array) => {
            if (!product) {
                return null;
            } else
            return (
                <Slide key={product.id} product={product} index={index} list={array}></Slide>
            )
        })}
        
      </div>
    
  
  </>
    )
}

Carousel.propTypes = {
    productsList: PropTypes.array,
    itemsNumber: PropTypes.number
}

export default Carousel;