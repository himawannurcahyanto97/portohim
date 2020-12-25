import styled from "styled-components";

export const PaperBox = styled.div`
    border: 1px solid #BDBDBD;
    box-sizing: border-box;
    border-radius: 3px;
    width: 100%;
`;

export const WrapperPaperContent = styled.div`
    display: grid;
    grid-auto-columns: 100%;
    grid-gap: 20px
`;

export const DisplayedPaper = styled.div`
    display: flex;
    flex-direction: row;
    margin: 30px;
`;

export const DividerDisplay = styled.div`
    flex-direction: column;
    flex-basis: ${(props) => (props.img ? "30%" : "70%")};
    text-align:${(props) => (props.img ? "right" : "left")};
    @media screen and (max-width: 666px) {
        display: ${(props) => (props.img ? "none" : "block")};
        text-align:center;
        margin: 0 auto
    }
`;

export const TitlePaper = styled.div`
    font-weight: bold;
    font-size: 22px;
    line-height: 30px;
    margin-bottom: 10px;
`;

export const WritePaper = styled.div`
    font-size: ${(props) => (props.author ? "14px" : "16px")};
    line-height: ${(props) => (props.author ? "21px" : "24px")};
    color: ${(props) => (props.author ? "#333333" : "#5A5A5A")};
    margin-bottom: ${(props) => (props.author ? "10px" : "5px")};
`;

export const TipePaper = styled.div`
    background: ${(props) => (props.tipe ? "#afedc9" : "#FFFFFF")};
    font-weight: 600;
    color: #219653;
    font-size: 16px;
    line-height: 24px;
    border: ${(props) => (props.tipe ? "none" : "1px solid #219653")};
    box-sizing: border-box;
    margin: 0 7px 3px 0;
    display: inline-block;
    padding: 3px 6px;
`;
export const PaperImg = styled.img`
    max-width: 160px;
`;