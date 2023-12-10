import React, {useEffect, useState}from "react";

import "../styles/Home.css";
import CategoryCard from "../Components/CategoryCard";
import ProductCard from "../Components/ProductCard";
import Footer from "../Components/Footer";
import axios from "axios";

 const fetchProducts=async()=>{
 const res = await axios.get ("http://localhost:4000/products");
 const data = res.data;
 console.log(data);
 return data;
};

  const Home = () => {
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
        <div>
            <p className="title">Categoies</p>
             <section className="categoies">
              <CategoryCard categoryText="T-Shirt"/>          
              <CategoryCard categoryText="Mobile"/>   
              <CategoryCard categoryText="Computer"/>  
            </section>
       
        </div>
        {/* <div>
            <p className="title">Products</p>
            <section className="Products">
              <ProductCard productImg="https://cdn.pixabay.com/photo/2023/11/21/10/12/tea-8402876_1280.png" title="TV"/>
              <ProductCard productImg="https://cdn.pixabay.com/photo/2023/11/21/10/12/tea-8402876_1280.png" title="Mobile" />
              <ProductCard productImg="https://cdn.pixabay.com/photo/2023/11/21/10/12/tea-8402876_1280.png" title="Laptop"/>
              <ProductCard productImg="https://cdn.pixabay.com/photo/2023/11/21/10/12/tea-8402876_1280.png" title="Smart Watch"/>
              <ProductCard productImg="https://cdn.pixabay.com/photo/2023/11/21/10/12/tea-8402876_1280.png" title="Camera"/>
              <ProductCard productImg="https://cdn.pixabay.com/photo/2023/11/21/10/12/tea-8402876_1280.png" title="Head Phone"/>
            </section>
        </div> */}
        <div>
      <p> Products</p>
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
     
              
    </div>
        <div>
          <p className="footer-text"> Footer</p>
          <section className="footer-info">
            <Footer/>
          </section>
        </div>
     </div>
     
    );
 };

export default Home;