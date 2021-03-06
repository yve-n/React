import { Link } from "react-router-dom";

const Card = ({data}) =>{
    return (
        <>
        <div className="card" style={{width: '18rem'}}>
             <div className="card-body">
                 {data.image && <img src={data.image} className="card-img-top"alt=""/>}
                 <h5 className="card-title">{data.title}</h5>
                 <p className="card-text">{data.text}</p>
                 {data.cta && <Link to={data.cta} className="btn btn-primary">Go somewhere</Link>}
                 {data.secondarycta && <Link to={data.cta} className="btn btn-success">Buy me</Link>}

             </div>
        </div>
        </>
    )
}
export default Card;