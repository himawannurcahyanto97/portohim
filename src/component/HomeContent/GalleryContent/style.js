import styled from "styled-components";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FaTimes } from "react-icons/fa";

export const GalleryContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-template-rows: auto auto;
    grid-gap: 20px;
    padding: 12px;
    height: 420px;
    overflow-y: hidden;
    margin-left: 10px;
    @media screen and (max-width: 1015px) {
        grid-template-columns: auto auto auto;
        grid-template-rows: auto auto;
        margin: 0 100px;
        margin: auto;
      }
    @media screen and (max-width: 709px) {
        grid-template-columns: 49% 49%;
        grid-template-rows: auto;
        grid-gap: 5px;
        padding: 0px;
        margin: auto;
        height: 575px;
    }
`;

export const GalleryImage = styled(LazyLoadImage)`
    width: 190px;
    height: 187px;
    position: inherit;
    &:hover {
        transition: all 0.2s ease-in-out;
        transform:scale(1.02);
    }
    @media screen and (max-width: 520px) {
        max-width: 90%;
    }
`;