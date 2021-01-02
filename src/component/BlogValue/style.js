import styled from "styled-components"

export const BlogContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto;
    grid-gap: 40px;
    padding: 10px;
    @media screen and (max-width: 1015px) {
        grid-template-columns: auto auto;
        grid-template-rows: auto auto;
        height: 1500px;
      }
    @media screen and (max-width: 610px) {
        grid-template-columns: 50% 50%;
        grid-template-rows: auto;
        padding: 0;
        grid-gap: 5px;
        height:1220px;
    }
`;