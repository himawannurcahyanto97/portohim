import React from "react";
import Hima from "../../images/Hima.png"
import { GlobalContent } from "../GlobalContent"
import { IntroPart, Intro, Homebtn, Img, ImgPart, HomeContent } from "./style"

const HomeBanner = () => {
    return(
        <GlobalContent>
            <HomeContent>
                <IntroPart>
                    <Intro>HELLO! MY NAME IS</Intro>
                    <Intro big normal >Himawan Nurcahyanto</Intro>
                    <Intro normal jobs >Artificial Intelligence <br />Engineer</Intro>
                    <Homebtn>Download Resume</Homebtn>
                </IntroPart>
                <ImgPart>
                    <Img src={Hima} />
                </ImgPart>
            </HomeContent>
        </GlobalContent>
    );
};

export default HomeBanner;