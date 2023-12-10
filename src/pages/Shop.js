import React, {useEffect, useState}from "react";
import Footer from "../Components/Footer";
import ProductCard from "../Components/ProductCard";
import "../styles/Shop.css";
import axios from "axios";

const fetchProducts=async()=>{
  const res = await axios.get("http://localhost:4000/products");
 const data = res.data;
 console.log(data);
  return data;
};


const Shop = () => {
  
  const [productData, setProductData] = useState([]);
  const assigndata = async()=>{
   const fetchedProductData = await fetchProducts();
   setProductData(fetchedProductData);
  }
    
  useEffect(()=>{
   assigndata(); 

  },[]);

  return (
    <div>
      <p>All Products</p>
      <section className="all-products">
        {productData.map((product) => {
            return(
              <ProductCard
              productImg = {product.imgUrl}
              title = {product.title}/>
            );
          })
        }
     

      </section>
      <div>
          <p className="footer-text"> Footer</p>
          <section className="footer-info">
            <Footer/>
          </section>
        </div>
              
    </div>
  );
};

export default Shop;