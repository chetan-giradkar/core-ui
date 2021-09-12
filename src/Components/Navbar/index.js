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
      {menuOpen ? <NavMenuMobile>
        <NavLinkM onClick={()=>{setMenuOpen(false);}} to="/core-ui/page1" activeStyle>
          Page1
        </NavLinkM>
        <NavLinkM onClick={()=>{setMenuOpen(false);}} to="/core-ui/page2" activeStyle>
          Page2
        </NavLinkM>
        <NavLinkM onClick={()=>{setMenuOpen(false);}} to="/core-ui/page3" activeStyle>
          Page3
        </NavLinkM>
        <NavLinkM onClick={()=>{setMenuOpen(false);}} to="/core-ui/page4" activeStyle>
          Page4
        </NavLinkM>
        <NavLinkM onClick={()=>{setMenuOpen(false);}} to="/core-ui/sign-in" activeStyle>
          Sign In
        </NavLinkM>
      </NavMenuMobile>:null}
      <span className="navicon" onClick={()=>setMenuOpen(!menuOpen)}>
        <div id="nav-icon" className={menuOpen ? "open" : ""}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </span>
      <NavMenu>
        <NavLink to="/core-ui/page1" activeStyle>
          Page1
        </NavLink>
        <NavLink to="/core-ui/page2" activeStyle>
          Page2
        </NavLink>
        <NavLink to="/core-ui/page3" activeStyle>
          Page3
        </NavLink>
        <NavLink to="/core-ui/page4" activeStyle>
          Page4
        </NavLink>
      </NavMenu>
      <NavBtn>
        <NavBtnLink className="button1" to="/core-ui/signin">
          Sign In
        </NavBtnLink>
      </NavBtn>
    </Nav>
  );
}

export default Navbar;
