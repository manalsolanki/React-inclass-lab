import React from "react";
import ReactDOM from "react-dom";
import Greeting from "./js/components/Greeting";
import Header from "./js/components/Header";

import Footer from "./js/components/Footer";
import ProductList from "./js/components/ProductList";
import './css/index.css';
import './css/default.css';
import './css/reset.css';


const App = () => {
	return (
    < >
  <Header/>
 
  <ProductList/>
  
  <Footer/>
  </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));