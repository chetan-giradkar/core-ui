import React, {useState} from 'react';
import {
    Nav,
    NavLink,
    Bars,
    Cross,
    NavMenu,
    NavBtn,
    NavBtnLink,
    Atom
  } from './NavBarComponents';

function Navbar() {
  const [hamburger, setHamburger] = useState(false);
    return (
        <Nav>
          <NavLink to='/core-ui'>
            <span style={{display:"inline-flex"}}><Atom /> <h3 style={{margin:"10px 20px"}}>Company</h3> </span>
          </NavLink>
          {!hamburger ? <Bars onClick={()=> setHamburger(true)}/> : <Cross onClick={()=> setHamburger(false)}/>}
          <NavMenu>
            <NavLink to='/core-ui/page1' activeStyle>
              Page1
            </NavLink>
            <NavLink to='/core-ui/page2' activeStyle>
              Page2
            </NavLink>
            <NavLink to='/core-ui/page3' activeStyle>
              Page3
            </NavLink>
            <NavLink to='/core-ui/page4' activeStyle>
              Page4
            </NavLink>
            {/* Second Nav */}
            {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          </NavBtn>
        </Nav>
    )
}

export default Navbar
