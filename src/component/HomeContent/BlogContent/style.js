import styled from "styled-components";

export const BlogBox = styled.div`
    width: 250px;
    height: 464px;
    box-shadow: 0px 7px 20px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    &:hover {
        transition: 0.2s ease-in-out;
        transform: scale(1.05);
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
`;

export const BoxContainer = styled.p`
    font-weight: ${(props) => (props.titlee ? "bold" : "normal") };
    font-size: ${(props) => (props.titlee ? "14px" : "12px") };
    line-height: ${(props) => (props.titlee ? "28px" : "20px") };
    margin: 2px 11px 0 16px;
    overflow: hidden;
`;

export const BlogImage = styled.img`
    z-index: 3;
    width: 214px;
    margin: 15px 15px 0 18px;
    align-item:center;
`;

export const Blogbtn = styled.button`
    position:inherit;
    top: 85%;
    z-index: 20;
    margin: 2px 15px 0 18px;
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
`;