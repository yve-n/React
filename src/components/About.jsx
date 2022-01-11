import {Link, Outlet} from "react-router-dom";

const About = () => {
    return (
        <>
        <Outlet />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos cumque nesciunt voluptatibus non laboriosam natus quidem sapiente, nobis ipsam expedita aut distinctio nisi corrupti culpa, deserunt, nulla exercitationem sit magnam.</p>
        <ul>
            <li><Link to="/about-us/yve">Yve</Link></li>
            <li><Link to="/about-us/amel">Amel</Link></li>
        </ul>
        </>
    )
}
export default About;