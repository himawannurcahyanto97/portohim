import React, { useState } from "react";
import { GlobalContent } from "../../GlobalContent";
import { TitleHomeContent } from "../style";
import {YTContainer, YTProfile, YTName, YTPict, Visit, YTPictPart, YouTube} from "./style";
import { BsFillCaretRightFill } from "react-icons/bs";
import HimaYT from "../../../images/HimaYT.png"

const YouTubeContent = () => {
    return(
        <GlobalContent>
            <TitleHomeContent>Youtube Video</TitleHomeContent>
            <YTContainer>
                <YTPictPart>
                <YouTube 
                    src="https://www.youtube.com/embed/4tB945cWbyo"
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen  />
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