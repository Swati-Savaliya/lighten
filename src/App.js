import { Route, Routes } from 'react-router-dom';
import './App.css';
import Userroutes from './User/Routes/Container/Userroutes';
import Adminroutes from './User/Routes/Container/Adminroutes';

// import Footer from './User/Component/Footer/Footer';
// import Header from './User/Component/Header/Header';
// import Home from './User/Container/Home/Home';
// import About from './User/Container/About/About';
// import Blog from './User/Container/Blog/Blog';
// import Product from './User/Container/Product/Product';
// import Contact from './User/Container/Contact/Contact';


function App() {
  return (
    <div>   
       <Routes>
            <Route exact path="/*" element ={<Userroutes />} />
            <Route exact path="admin/*" element ={<Adminroutes />} />
       </Routes>
        
    </div>
  );
}

export default App;
