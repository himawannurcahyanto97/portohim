import styled from "styled-components";

export const GalleryContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-template-rows: auto auto;
    grid-gap: 20px;
    padding: 12px;
    @media screen and (max-width: 1015px) {
        grid-template-columns: auto auto;
        grid-template-rows: auto auto;
      }
`;

export const GalleryImage = styled.img`
    z-index: 3;
    width: 182px;
    align-item:center;
    position: inherit;
    &:hover {
        transition: all 0.2s ease-in-out;
        transform:scale(1.02);
    }
`;