import React from "react";
import { 
    Nav, 
    NavLogo, 
    NavList, 
    NavListPart, 
    NavButtonPart, 
    Navbtn, 
    NavLogoPart, 
    NavBarContainer 
} from "./NavStyle";
import HNLogo from "../../images/HNLogo.png"

const Navbar = () => {
    return (
        <Nav>
            <NavBarContainer>
                <NavLogoPart to = "/">
                    <NavLogo src = {HNLogo} />
                </NavLogoPart>
                <NavListPart>
                    <NavList to = "/">Home</NavList>
                    <NavList to = "/experience" >Experience</NavList>
                    <NavList to = "/achievement" >Achievement</NavList>
                    <NavList to = "/blog" >Blog</NavList>
                    <NavList to = "/gallery ">Gallery</NavList>
                </NavListPart>
                <NavButtonPart>
                    <Navbtn>Contact</Navbtn>
                </NavButtonPart>
            </NavBarContainer>
        </Nav>
    )
};

export default Navbar;