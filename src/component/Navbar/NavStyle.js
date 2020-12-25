import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Nav = styled.nav`
    position: sticky;
    width: 100%;
    height: 80px;
    left: 0px;
    top: 0px;
    background: #fff;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
    display: block;
    z-index: 500;
    @media screen and (max-width: 1015px) {
        width: 100%;
        top:-1px;
    }
`;

export const NavBarContainer = styled.div`
    display: flex;
    height: 100%;
`;

export const NavLogoPart = styled(LinkR)`
    flex-basis: 25%;
    text-decoration: none;
    align-items: center;
    text-align: center;
    margin-top: 10px;
`;

export const NavLogo = styled.img`
    max-width: 100px;
    margin: auto;
    cursor: pointer;
    @media screen and (max-width: 490px) {
        max-width: 80px;
        margin: 0 10px;
    }
`;

export const NavListPart = styled.div`
    flex-basis: 50%;
    align-items: center;
    text-align: center;
    margin: 0 auto;
    @media screen and (max-width: 1251px) {
        display: none;
      }
`;

export const NavList = styled(LinkR)`
    display: inline-block;
    margin: 30px;
    text-decoration: none;
    color: black;
    cursor: pointer;
    font-size: 16px;
    line-height: 20px;
    &.active {
        border-bottom: 3px solid black;
    }
    
    &:hover {
        color: white;
        transition: 0.2s ease-in-out;
        background-color: #0c2454;
        padding: 5px 15px;
        margin: 0 15px;
        border-radius:6px;
    }
`;

export const NavButtonPart = styled(LinkR)`
    flex-basis: 25%;
    align-items: center;
    text-align: center;
    margin: 0 auto;
    @media screen and (max-width: 1251px) {
        display: none;
      }
`;

export const Navbtn = styled.button`
    border-radius: 30px;
    margin-top: 20px;
    background: #1054D9;
    padding: 10px 30px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #09508b;
    }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1251px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: black;
  }
`;