import styled from "styled-components";

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
    @media screen and (max-width: 676px) {
        grid-template-columns: 50% 50%;
        grid-template-rows: auto;
        grid-gap: 5px;
        padding: 0px;
        margin: auto;
    }
`;

export const GalleryImage = styled.img`
    width: 187px;
    position: inherit;
    &:hover {
        transition: all 0.2s ease-in-out;
        transform:scale(1.02);
    }
    @media screen and (max-width: 520px) {
        max-width: 90%;
    }
`;