import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const products = [
        { "name": "Yve", "price": 25  },
        { "name": "Amel", "price": 4  },
        { "name": "Noam", "price": 1 }
      ];
    return (
        <>
        {products.map((product,index) =>{
            return(
             <div key={index} className="card" style={{width: '18rem'}}>
             <div className="card-body">
                 <img src="http://images.computerhistory.org/revonline/images/102633685p-03-03.jpg?w=600" className="card-img-top" alt="" />
                 <h5 className="card-title">{product.name}</h5>
                 <p className="card-text">{product.price}</p>
                 <Link to="/" className="btn btn-primary">Go</Link>
                 <Link to="/" className="btn btn-success">Buy</Link>
             </div>
        </div>
        )
        })}
        
        </>
    )
}
export default Home;
