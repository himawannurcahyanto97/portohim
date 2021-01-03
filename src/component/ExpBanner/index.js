import React from "react";
import {ExpHomeContent} from "../../alldata/ExperienceHomeContent";
import { GlobalContent } from "../GlobalContent";
import {Banner, IntroPart, Intro, Img, ImgPart} from "../BannerStyle"

const ExpBanner = () => {
    return(
        <GlobalContent>
            <Banner>
                <IntroPart>
                    <Intro big normal>My Experience</Intro>
                    <Intro normal jobs >{ExpHomeContent.desc}</Intro>
                </IntroPart>
                <ImgPart>
                    <Img src={ExpHomeContent.img} />
                </ImgPart>
            </Banner>
        </GlobalContent>
    );
};

export default ExpBanner;