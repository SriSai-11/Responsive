import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import { Cards } from "./Cards";
import "./NavBar.css";
// import Title from "./Title";

function NavBar() {


  
  const [click, setClick] = useState(false);

  // const [hide,setHide] = useState(false);

  // const [move,setMove] = useState(false);

  const [search,setSearch] = useState(false);

  const [open,setOpen] = useState(false);



  const openFeild =() => {
    setSearch(!search);
    setOpen(!open);
  } 

  const handleClick = () => setClick(!click);

  // const hideSearch = () => {
  //   setHide(!hide);
  //   setMove(!move);
  // }
  

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          {/* <NavLink exact to="/" className="nav-logo" id="link" >
          <i className="fas fa-code" ></i>
            DPS
            
          </NavLink> */}
          <Typography className="nav-logo" id={open ?"logohide":"logovisible"}><i className="fas fa-code" ></i>DPS</Typography>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                id="link"
                className="nav-links"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/second"
                activeClassName="active"
                className="nav-links"
                id="link"
                onClick={handleClick}
              >
                Engineer Digital
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/third"
                activeClassName="active"
                className="nav-links"
                id="link"
                onClick={handleClick}
              >
                Sell Digital
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/navigate"
                activeClassName="active"
                className="nav-links"
                id="link"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
         
         
          <div className={open ? "search-box" : "search-box-closed"}>
            <input className={search?"search-txt-open":"search-txt"} type="text" placeholder="search..."/>
            <a className="search-btn" href="#" id="link">
            <i className="fas fa-search" id={open ?"open":"closed"} onClick={openFeild}></i>
            </a>
            <a className="times-btn" href="#" id="link">
            <i className={search?"fas fa-times":" "} id={open ?"open":"closed"} onClick={openFeild}></i></a>
          </div>

          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            
          </div>
          </div>
        
      </nav>
     
    </>
  );
}

export default NavBar;
