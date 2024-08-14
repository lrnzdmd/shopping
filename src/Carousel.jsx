import { useEffect, useState } from "react";

import PropTypes from "prop-types"
import Card from "./Card";

function Carousel({ productsList, itemsNumber }) {
    const [randomList, setRandomList] = useState([]);

    function getRandomProducts() {
        if (!productsList) {
            console.log("productsList is still loading");
            return;
        }

        const originalList = productsList;
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

        {randomList.map((product , index) => {
            return (
                <>
                <div key={product.id}id={`slide${index}`} className="carousel-item relative w-full">
                <Card product={product}></Card>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href={`#slide${index == 0 ? itemsNumber - 1 : index - 1}`} className="btn btn-sm btn-circle">
              ❮
            </a>
            <a href={`#slide${index == itemsNumber - 1 ? 0 : index + 1}`} className="btn btn-sm btn-circle">
              ❯
            </a>
            </div>
            </div>    
        </>
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