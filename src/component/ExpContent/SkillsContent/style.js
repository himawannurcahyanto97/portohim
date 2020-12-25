import styled from 'styled-components';

export const CertifContainer = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 50px;
    padding: 10px;
    margin-bottom: 8px;
    width: 100%;
    @media screen and (max-width: 811px) {
        grid-gap: 10px;
    }
`;

export const CertifBox = styled.div`
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 811px) {
        flex-direction: column;
    }
`;

export const CertifBoxContain = styled.div`
    flex-direction = column;
    flex-basis: ${(props) => (props.image)? "20%" : "80%"};
    align-self: center;
    text-align: ${(props) => (props.image)? "right" : "none"};
    padding: 10px;
    @media screen and (max-width: 811px) {
        text-align: center;
        box-shadow: ${(props) => (props.image)? "0px 7px 20px rgba(0, 0, 0, 0.25)" : "none"};
        border-radius: ${(props) => (props.image)? "5px" : "none"};
    }
`;

export const InstImage = styled.img`
    max-width: 100px;
`;

export const DescWriteSkills = styled.p`
    font-weight: ${(props) => (props.title) ? "bold" : "normal"};
    font-size: 16px;
    line-height: ${(props) => (props.title) ? "30px" : "24px"};
    color: ${(props) => (props.date) ? "#5A5A5A" : "#333333"};
`;