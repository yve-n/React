import ReactDom from "react-dom";
import App from "./app";
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css' ;
ReactDom.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));