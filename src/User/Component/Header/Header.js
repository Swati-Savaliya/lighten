import React from "react";
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <div>
      {/* <!-- loader  --> */}
      {/* <div class="loader_bg">
         <div class="loader"><img src="images/loading.gif" alt="#" /></div>
      </div> */}
      {/* <!-- end loader -->  */}
      {/* <!-- header --> */}
      <header>
     
        <div className="header">
          <div className="head_top">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div className="top-box">
                    <ul className="sociel_link">
                      <li>
                        {" "}
                        <a href="#">
                          <i className="fa fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a href="#">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a href="#">
                          <i className="fa fa-instagram" />
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a href="#">
                          <i className="fa fa-linkedin" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div className="top-box">
                    <p>long established fact that a reader will be </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                <div className="full">
                  <div className="center-desk">
                    <div className="logo">
                      {" "}
                      <a href="index.html">
                        <img src="images/logo.jpg" alt="logo" />
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-7 col-lg-7 col-md-9 col-sm-9">
                <div className="menu-area">
                  <div className="limit-box">
                    <nav className="main-menu">
                      <ul className="menu-area-main">
                        <li className="active">
                          {" "}
                          <NavLink to="/">Home</NavLink>{" "}
                        </li>
                        <li>
                          {" "}
                          <NavLink to="/about">About</NavLink>{" "}
                        </li>
                        <li>
                          {" "}
                          <NavLink to="/product">product</NavLink>{" "}
                        </li>
                        <li>
                          {" "}
                          <NavLink to="/blog"> Blog</NavLink>{" "}
                        </li>
                        <li>
                          {" "}
                          <NavLink to="/contact">Contact</NavLink>{" "}
                        </li>
                        <li className="mean-last">
                          {" "}
                          <a href="#contact">signup</a>{" "}
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                <li>
                  <a className="buy" href="#">
                    Login
                  </a>
                </li>
              </div>
            </div>
          </div>
        
        </div>
      </header>

      {/* <!-- end header --> */}
    </div>
  );
}

export default Header;
