import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './User/Component/Footer/Footer';
import Header from './User/Component/Header/Header';
import Home from './User/Container/Home/Home';
import About from './User/Container/About/About';
import Blog from './User/Container/Blog/Blog';
import Product from './User/Container/Product/Product';
import Contact from './User/Container/Contact/Contact';


function App() {
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
       {/* <Home /> */}
       <Footer />
        
    </div>
  );
}

export default App;
