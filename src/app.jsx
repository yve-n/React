import {Link, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";
import AboutYve from "./components/AboutYve";
import AboutAmel from "./components/AboutAmel";
const App = () => {  
    return(
        <>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About</Link></li>
        </ul>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about-us" element={<About />}>
                    <Route path="/about-us/yve" element={<AboutYve />} />
                    <Route path="/about-us/amel" element={<AboutAmel />} />
                </Route>

                <Route path="*" element={<NotFound />}></Route>
            </Routes>  
        </>
    
    );
}

export default App;