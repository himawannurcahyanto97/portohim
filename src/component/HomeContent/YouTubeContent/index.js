import React, { useState } from "react";
import { GlobalContent } from "../../GlobalContent";
import { TitleHomeContent } from "../style";
import YouTube from "react-youtube";
import {YTContainer, YTProfile, YTName, YTPict, Visit, YTPictPart} from "./style";
import { BsFillCaretRightFill } from "react-icons/bs";
import HimaYT from "../../../images/HimaYT.png"

const YouTubeContent = () => {
    return(
        <GlobalContent>
            <TitleHomeContent>Youtube Video</TitleHomeContent>
            <YTContainer>
                <YTPictPart>
                <YouTube 
                    videoId= "73GT1a6WzTE"
                    width="400px"  />
                </YTPictPart>
                <YTProfile>
                    <YTPict src= {HimaYT} />
                    <YTName>Himawan Nurcahyanto</YTName>
                    <Visit href = "https://www.youtube.com/channel/UCK_2UEc-JfIKDtWEy1_IK9g/videos">Visit YouTube Channel <BsFillCaretRightFill target="_blank"/></Visit>
                </YTProfile>
            </YTContainer>
        </GlobalContent>
    );
};

export default YouTubeContent;