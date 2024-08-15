import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Footer from "./Footer";
import Navbar from "./Navbar";
import homeBg from "./assets/homebg.jpg";
import { ShopContext } from "./context/ShopContext";
import Card from "./Card";

function Products({ children }) {
  const [categoryList, setCategoryList] = useState([]);
  const { productsList } = useContext(ShopContext);

  function getCategoryProducts(categ) {
    const categoryList = [];

    const cat = categ === "Cars" ? "vehicle" : "motorcycle";

    productsList.forEach((product) => {
      if (product.category === cat) {
        categoryList.push(product);
      }
    });

    return categoryList;
  }

  useEffect(() => {
    setCategoryList(getCategoryProducts(children));
  }, [children]);

  return (
    <>
      <Navbar></Navbar>
      <div
        className="hero h-fit"
        style={{
          backgroundImage: `url(${homeBg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content min-h-full min-w-full flex-col">
          <h1 className="mb-5 text-5xl font-bold">{children}</h1>
          <div className="flex flex-wrap gap-6 justify-center">
            {categoryList.map((prod) => {
              return <Card key={prod.id} product={prod}></Card>;
            })}
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

Products.propTypes = {
    product: PropTypes.object,
    children: PropTypes.string
}

export default Products;
