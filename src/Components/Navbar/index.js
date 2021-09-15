import React, {useState} from "react";
import {
  Nav,
  NavLink,
  NavLinkM,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Atom,
  NavMenuMobile
} from "./NavBarComponents";

function Navbar() {
  const [menuOpen,setMenuOpen] = useState(false);

  return (
    <Nav>
      <NavLink to="/core-ui">
        <span style={{ display: "inline-flex" }}>
          <Atom /> <h3 style={{ margin: "10px 20px" }}>Company</h3>
        </span>
      </NavLink>
      <NavMenuMobile id="nav-mobile" className={menuOpen ? "navm-open" : "navm-close"}>
        <NavLinkM onClick={()=>{setMenuOpen(false);}} to="/core-ui/accordion" activeStyle>
          Accordion
        </NavLinkM>
        <NavLinkM onClick={()=>{setMenuOpen(false);}} to="/core-ui/sidebar" activeStyle>
          SideBar
        </NavLinkM>
        <NavLinkM onClick={()=>{setMenuOpen(false);}} to="/core-ui/tabs" activeStyle>
          Tabs
        </NavLinkM>
        <NavLinkM onClick={()=>{setMenuOpen(false);}} to="/core-ui/sign-in" activeStyle>
          Sign In
        </NavLinkM>
      </NavMenuMobile>
      <span className="navicon" onClick={()=>setMenuOpen(!menuOpen)}>
        <div id="nav-icon" className={menuOpen ? "open" : ""}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </span>
      <NavMenu>
        <NavLink to="/core-ui/accordion" activeStyle>
        Accordion
        </NavLink>
        <NavLink to="/core-ui/anchormenu" activeStyle>
        AnchorMenu
        </NavLink>
        <NavLink to="/core-ui/sidebar" activeStyle>
        SideBar
        </NavLink>
        <NavLink to="/core-ui/tabs" activeStyle>
        Tabs
        </NavLink>
      </NavMenu>
      <NavBtn>
        <NavBtnLink className="button1" to="/core-ui/sign-in">
          Sign In
        </NavBtnLink>
      </NavBtn>
    </Nav>
  );
}

export default Navbar;
