import styled from "styled-components";

export const GalleryTitle = styled.div`
    font-weight: ${(props) => (props.desc ? 500 : 900)};
    font-size: ${(props) => (props.desc ? "12px" : "30px")};
    line-height: ${(props) => (props.desc ? "18px" : "45px")};
    color: ${(props) => (props.desc ? "#5A5A5A" : "#111111")};
    text-align: center;
    margin: ${(props) => (props.desc ? "3px 6px 30px" : "34px 4px 2px")};
`;