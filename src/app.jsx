import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import AboutYve from "./components/AboutYve";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";

const App = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-us" element={<About />}>
                        <Route path="/about-us/yve" element={<AboutYve />} />
                    </Route>
                   
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
                </div>
            </div>
            
        </>

    );
}

export default App;