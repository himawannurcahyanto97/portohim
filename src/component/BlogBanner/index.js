import React from "react";
import {BlogHomeContent} from "../../alldata/BlogHomeContent";
import { GlobalContent } from "../GlobalContent";
import {Banner, IntroPart, Intro, Img, ImgPart} from "../BannerStyle"

const BlogBanner = () => {
    return(
        <GlobalContent>
            <Banner>
                <IntroPart>
                    <Intro big normal>My Blog</Intro>
                    <Intro normal jobs >{BlogHomeContent.desc}</Intro>
                </IntroPart>
                <ImgPart>
                    <Img src={BlogHomeContent.img} />
                </ImgPart>
            </Banner>
        </GlobalContent>
    );
};

export default BlogBanner;