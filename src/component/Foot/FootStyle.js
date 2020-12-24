import styled from "styled-components";

export const Foot = styled.footer`
    position: absolute;
    width: 100%;
    height: 93px;
    background: #333333;
    display: block;
`;

export const FootContainer = styled.div`
    display: flex;
    height: 100%;
`;

export const FooterLogoPart = styled.div`
    flex-basis: 25%;
    align-items: center;
    text-align: center;
    margin-top: 15px;
`;

export const FooterLogo = styled.img`
    max-width: 100px;
    width: 100%;
    margin: 0 auto;
`;

export const WebsiteRightsPart = styled.div`
    flex-basis:75%;
    height: 100%;
    width: 100%;
    text-align: right;
`;

export const WebsiteRights = styled.p`
    color: #fff;
    font-size: 14px;
    text-align: right;
    margin: 35px 100px;
`;