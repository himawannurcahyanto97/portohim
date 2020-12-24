import React from "react";
import ExpHima from "../../images/ExpHima.png";
import { GlobalContent } from "../GlobalContent";
import {Banner, IntroPart, Intro, Img, ImgPart} from "../BannerStyle"

const ExpBanner = () => {
    return(
        <GlobalContent>
            <Banner>
                <IntroPart>
                    <Intro big normal>My Experience</Intro>
                    <Intro normal jobs >Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, 
                    dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris</Intro>
                </IntroPart>
                <ImgPart>
                    <Img src={ExpHima} />
                </ImgPart>
            </Banner>
        </GlobalContent>
    );
};

export default ExpBanner;