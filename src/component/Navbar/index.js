import React from "react";
import { FaBars } from "react-icons/fa";
import { 
    Nav, 
    NavLogo, 
    NavList, 
    NavListPart, 
    NavButtonPart, 
    Navbtn, 
    NavLogoPart, 
    NavBarContainer,
    MobileIcon 
} from "./NavStyle";
import HNLogo from "../../images/HNLogo.png"

const Navbar = ({toggle}) => {
    return (
        <Nav>
            <NavBarContainer>
                <NavLogoPart to = "/">
                    <NavLogo src = {HNLogo} />
                </NavLogoPart>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavListPart>
                    <NavList to = "/">Home</NavList>
                    <NavList to = "/experience" >Experience</NavList>
                    <NavList to = "/achievement" >Achievement</NavList>
                    <NavList to = "/blog" >Blog</NavList>
                    <NavList to = "/galleries">Gallery</NavList>
                </NavListPart>
                <NavButtonPart>
                    <Navbtn>Contact</Navbtn>
                </NavButtonPart>
            </NavBarContainer>
        </Nav>
    )
};

export default Navbar;