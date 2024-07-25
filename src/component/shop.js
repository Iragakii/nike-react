import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from './footer';
import Header from './header';

const Shop = () => {
    // function ProductList(props){
        const [products, setProducts] = useState([]);
    
        function fetchProducts (){
            
            fetch("http://localhost:3004/products")
            .then((response) => {
                if(!response.ok){
                throw new Error("Unexpected Sever Reponse");  
                }
            return response.json()
        
            })
            .then((data) => {
            // console.log(data);
            setProducts(data);
        
            })
            .catch((error) => console.log("Error:", error));
        }
        useEffect(() => fetchProducts(), []);
        
    

    
  return (
    <>
    <Header></Header>
    <div class="body-shop">
           
            {
                 products.map((product, index) => {
                  
                  return (
                    <div class="shop-1">
                        <div class="shop-img"><Link
                                href="http://127.0.0.1:5502/product/product.html"><img
                                    src={product.url}
                                    alt="abc"></img></Link></div>
                        <div class="shop-des">
                            <a
                                href="http://127.0.0.1:5502/product/product.html"><span>{product.name}</span></a>
                            <a
                                href="http://127.0.0.1:5502/product/product.html"><p>{product.brand}</p></a>
                            <a href="http://127.0.0.1:5502/product/product.html"><p>{product.category}</p></a>
                            <div class="price-tag">
                                <a
                                    href="http://127.0.0.1:5502/product/product.html"><p>{product.price}<sup>đ</sup></p></a>
                            </div>
                        </div>
                    </div>
                  );
                  
                 })
            }
        </div>
        <Footer></Footer>
        </>
  )
}

export default Shop;
