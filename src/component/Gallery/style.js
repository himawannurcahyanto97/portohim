import styled from "styled-components";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const GalleryTitle = styled.div`
    font-weight: ${(props) => (props.desc ? 500 : 900)};
    font-size: ${(props) => (props.desc ? "12px" : "30px")};
    line-height: ${(props) => (props.desc ? "18px" : "45px")};
    color: ${(props) => (props.desc ? "#5A5A5A" : "#111111")};
    text-align: center;
    margin: ${(props) => (props.desc ? "3px 6px 30px" : "34px 4px 2px")};
`;

export const GalleryContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-template-rows: auto auto;
    grid-gap: 20px;
    padding: 12px;
    @media screen and (max-width: 1015px) {
        grid-template-columns: auto auto auto;
        grid-template-rows: auto auto;
        margin: 0 100px;
        margin: auto;
      }
    @media screen and (max-width: 709px) {
        grid-template-columns: 50% 50%;
        grid-template-rows: auto;
        grid-gap: 5px;
        padding: 0px;
        margin: auto;
    }
`;

export const GalleryImage = styled(LazyLoadImage)`
    width: 190px;
    height: 190px;
    &:hover {
        transition: all 0.2s ease-in-out;
        transform:scale(1.02);
    }
    @media screen and (max-width: 520px) {
        max-width: 150px;
        max-height: 150px;
    }
`;