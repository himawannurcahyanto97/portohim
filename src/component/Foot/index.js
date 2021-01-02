import React from "react";
import {
    Foot,
    FootContainer,
    FooterLogoPart,
    FooterLogo,
    WebsiteRights,
    WebsiteRightsPart,
} 
from "./FootStyle";
import HNFooterLogo from "../../images/HNFooterLogo.png"


const Footer = () => {
    return(
        <Foot>
            <FootContainer>
                <FooterLogoPart>
                    <FooterLogo src={HNFooterLogo} />
                </FooterLogoPart>
                <WebsiteRightsPart>
                    <WebsiteRights>©2021 Himawan All rights reserved.</WebsiteRights>
                </WebsiteRightsPart>
            </FootContainer>
        </Foot>
    );
};

export default Footer;