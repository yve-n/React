import { Link } from "react-router-dom";

const Card = ({data}) =>{
    return (
        <>
        <div className="card" style={{width: '18rem'}}>
             <div className="card-body">
                 <h5 className="card-title">{data.title}</h5>
                 <p className="card-text">{data.text}</p>
                 {data.cta && <Link to={data.cta} className="btn btn-primary">Go somewhere</Link>}
             </div>
        </div>
        </>
    )
}
export default Card;