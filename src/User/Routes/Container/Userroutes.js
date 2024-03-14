import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../Container/Home/Home';
import About from '../../Container/About/About';
import Blog from '../../Container/Blog/Blog';
import Product from '../../Container/Product/Product';
import Contact from '../../Container/Contact/Contact';
import Header from '../../Component/Header/Header';
import Footer from '../../Component/Footer/Footer';


function Userroutes(props) {
    return (
        <div>
        <Header />
            <Routes>
                <Route exact path="/" element ={<Home />}/>
                <Route exact path="/about" element ={<About />}/> 
                <Route exact path="/blog" element ={<Blog />}/> 
                <Route exact path="/product" element ={<Product />}/> 
                <Route exact path="/contact" element ={<Contact />}/>  
            </Routes>
       <Footer />
        </div>
    );
}

export default Userroutes;