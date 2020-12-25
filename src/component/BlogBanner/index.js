import React from "react";
import bloghima from "../../images/bloghima.png";
import { GlobalContent } from "../GlobalContent";
import {Banner, IntroPart, Intro, Img, ImgPart} from "../BannerStyle"

const BlogBanner = () => {
    return(
        <GlobalContent>
            <Banner>
                <IntroPart>
                    <Intro big normal>My Blog</Intro>
                    <Intro normal jobs >Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, 
                    dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris</Intro>
                </IntroPart>
                <ImgPart>
                    <Img src={bloghima} />
                </ImgPart>
            </Banner>
        </GlobalContent>
    );
};

export default BlogBanner;