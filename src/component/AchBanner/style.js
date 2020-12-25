import styled from "styled-components";

export const ItemBoxGrid = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 30px;
    padding: 12px;
    width: 55%;
`;

export const ItemBoxAch = styled.div`
    border: 1px solid #BDBDBD;
    border-radius: 3px;
    width: 130px;
`;

export const ItemBoxContain = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 0;
`;

export const ContainWrite = styled.div`
    flex-basis: ${(props) => (props.number ? "80%" : "20%")};
    text-align: center;
    letter-spacing: 0.07em;
    font-weight: ${(props) => (props.number ? 900 : "normal")};
    font-size: ${(props) => (props.number ? "40px" : "12px")};
    line-height: ${(props) => (props.number ? "60px" : "18px")};
`;