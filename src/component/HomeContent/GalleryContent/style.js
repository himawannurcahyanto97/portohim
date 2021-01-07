import styled from "styled-components";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const GalleryContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-template-rows: auto auto;
    grid-gap: 20px;
    height: 420px;
    overflow-y: hidden;
    @media screen and (max-width: 1015px) {
        grid-template-columns: auto auto auto;
        grid-template-rows: auto auto;
        margin: 0 100px;
        margin: auto;
      }
    @media screen and (max-width: 709px) {
        grid-template-columns: 49% 49%;
        grid-template-rows: auto;
        grid-gap: 4px;
        padding: 0px;
        margin: 0 auto;
        height: 560px;
    }
`;

export const GalleryImage = styled(LazyLoadImage)`
    width: 190px;
    height: 190px;
    position: inherit;
    &:hover {
        transition: all 0.2s ease-in-out;
        transform:scale(1.02);
    }
    @media screen and (max-width: 520px) {
        max-width: 130px;
        max-height: 130px;
    }
`;