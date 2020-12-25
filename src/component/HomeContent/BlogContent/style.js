import styled from "styled-components";

export const BlogBox = styled.div`
    width: 250px;
    height: 464px;
    box-shadow: 0px 7px 20px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    &:hover {
        transition: 0.2s ease-in-out;
        transform: scale(1.05);
        z-index:10;
        }
    @media screen and (max-width: 1015px) {
        margin: 0 auto;
    }
    @media screen and (max-width: 610px) {
        width: 150px;
        height: 400px;
    }
`;

export const BlogContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto;
    grid-gap: 40px;
    padding: 10px;
    @media screen and (max-width: 1015px) {
        grid-template-columns: auto auto;
        grid-template-rows: auto auto;
      }
    @media screen and (max-width: 610px) {
        grid-template-columns: auto auto;
        grid-template-rows: auto;
        padding: 0;
        grid-gap: 5px;
    }
`;

export const BoxWrapper = styled.div`
    display: flex;
    align-self: center;
    flex-direction: column;
    height: 100%;
    margin: 15px
`;

export const BoxContainer = styled.p`
    font-weight: ${(props) => (props.titlee ? "bold" : "normal") };
    font-size: ${(props) => (props.titlee ? "14px" : "12px") };
    line-height: ${(props) => (props.titlee ? "28px" : "20px") };
    @media screen and (max-width: 610px) {
        line-height: ${(props) => (props.titlee ? "15px" : "15px") };
        font-size: ${(props) => (props.titlee ? "12px" : "11px") };
    }
`;

export const BlogImage = styled.img`
    z-index: 3;
    width: 214px;
    @media screen and (max-width: 610px) {
        width: 95%;
    }
`;

export const BlogContainerPart = styled.div`
    flex-basis: ${(props) => (props.btn ? "15%" : "40%")};
    overflow: ${(props) => (props.wrt ? "auto" : "none")};
    text-align: ${(props) => (props.wrt ? "none" : "center")};
`;

export const Blogbtn = styled.button`
    z-index: 20;
    position: inherit;
    margin-bottom: 10px 0;
    border-radius: 5px;
    background: #1054D9;
    padding: 8px 32px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    text-decoration: none;
    &:hover {
        transition: all 0.2s ease-in-out;
        opacity: 50%;
    }
    @media screen and (max-width: 610px) {
        font-size: 12px;
        margin: 30px 0;
    }
`;