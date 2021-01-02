import styled from "styled-components";
import {Link} from "react-router-dom";
import { FacebookButton, LinkedInButton } from "react-social";


export const TitleContent = styled.div`
    font-family: Poppins;
    font-style: normal;
    font-weight: 900;
    font-size: ${(props)=>(props.art ? "18px" : "26px")};
    line-height: ${(props)=>(props.art ? "25px" : "50px")};
    margin: ${(props)=>(props.art ? "150px 0 15px" : "22px 0")};
    @media screen and (max-width: 740px) {
        font-weight: 700;
        text-align:center;
    }
`;

export const BlogWrapped = styled.div`
    text-align: ${props => props.image ? "center" : "left"};
    margin: ${props => props.image ? "30px 21px 0 15px" : "50px 21px 0 21px"};
    @media screen and (max-width: 740px) {
        text-align: ${props => props.image ? "left" : "left"};
    }
`;
export const BoxContainer = styled.div`
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    @media screen and (max-width: 740px) {
        line-height: 15px;
        font-size: 11px;
    }
`;

export const BlogImage = styled.img`
    z-index: 3;
    max-width: ${(props) => (props.art ? "125px" : "480px")};
    max-height: ${(props) => (props.art ? "100px" : "335px")};
    @media screen and (max-width: 565px) {
        max-width: ${(props) => (props.art ? "125px" : "100%")};
        max-height: ${(props) => (props.art ? "100px" : "300px")};
    }
`;

export const BlogApart = styled.div`
    display: flex;
    max-height: ${(props) => (props.art ? "146px" : "auto")};
    overflow: ${(props) => (props.art ? "hidden" : "none")};
    border-bottom: ${(props) => (props.art ? "1px solid black" : "none")};
    &:hover {
        transition: ${(props) => (props.art ? "0.2s ease-in-out" : "none")};
        transform: ${(props) => (props.art ? "scale(1.02)" : "none")};
    }
    @media screen and (max-width: 750px) {
        max-height: ${(props) => (props.art ? "140px" : "auto")};
    }
    @media screen and (max-width: 684px) {
        display: ${(props) => (props.containe ? "block" : "flex")};
    }
`;

export const BlogDivApart = styled.div`
    flex-basis: ${(props) => (props.contain ? "70%" : "30%")};
    margin: 1px 5px;
    align-self: ${(props) => (props.imagart ? "center" : "none")};
`;

export const ArticlePart = styled.div`
    max-height: 538px;
    overflow: hidden;
    @media screen and (max-width: 1250px) {
        max-height: 590px;
    }
    @media screen and (max-width: 750px) {
        max-height: 504px;
    }
    @media screen and (max-width: 684px) {
        max-height: 550px;
    }
`;
export const Linked = styled(Link)`
    cursor: pointer;
    text-decoration: none;
    color: black
`;

export const FbBtn = styled(FacebookButton)`
    padding: 8px 14px;
    margin: 25px 20px;
    background-color: #3b5998;
    border-radius: 30px;
    outline: none;
    border: none;
    cursor: pointer;
    color: white;
    &:hover {
        transition:0.2s ease-in-out;
        transform:scale(1.1);
    }
`;

export const LinBtn = styled(LinkedInButton)`
    padding: 8px 14px;
    margin: 25px 5px;
    background-color: #0e76a8;
    border-radius: 30px;
    outline: none;
    border: none;
    color: white;
    cursor: pointer;
    &:hover {
        transition:0.2s ease-in-out;
        transform:scale(1.1);
    }
`;