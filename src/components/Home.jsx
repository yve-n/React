import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";


const Home = () => {
    const products = [
        { "name": "Yve", "price": 25 , picture: "http://images.computerhistory.org/revonline/images/102633685p-03-03.jpg?w=600" },
        { "name": "Amel", "price": 4 ,picture :"http://images.computerhistory.org/revonline/images/102633685p-03-03.jpg?w=600"},
        { "name": "Noam", "price": 1 , picture: "http://images.computerhistory.org/revonline/images/102633685p-03-03.jpg?w=600"}
      ];
    return (
        <>
        {products.map((product,index) =>{
            return(
                <Card key={index} data={
                    {title:product.name,
                         text:product.price,
                         image:product.picture,
                        cta:`product/${product.id}`,
                        secondarycta:true
    
    
                }}/>     
            )
        })}  
        </>
    )
}
export default Home;
