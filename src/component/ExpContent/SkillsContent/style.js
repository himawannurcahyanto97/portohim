import styled from 'styled-components';

export const CertifContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    grid-gap: 20px;
    padding: 10px;
    margin-bottom: 8px;
`;

export const CertifBox = styled.div`
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 745px) {
        flex-direction = column;
    }
`;

export const CertifBoxContain = styled.div`
    flex-direction = column;
    flex-basis: 49%;
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