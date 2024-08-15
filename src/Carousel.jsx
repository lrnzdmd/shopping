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

        const originalList = [...productsList];
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

        {randomList.length < 1 ? <span className="loading loading-spinner loading-lg ml-36 "></span> :randomList.map((product , index, array) => {
            return (
                <Slide key={product.id} product={product} index={index} list={array}></Slide>
            )
        })}
        
      </div>
    
  
  </>
    )
}

Carousel.propTypes = {
    itemsNumber: PropTypes.number
}

export default Carousel;