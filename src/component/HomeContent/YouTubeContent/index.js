import React, { useState } from "react";
import { GlobalContent } from "../../GlobalContent";
import { TitleHomeContent } from "../style";
import YouTube from "react-youtube";
import {YTContainer, YTProfile, YTName, YTPict, Visit, YTPictPart} from "./style";
import { BsFillCaretRightFill } from "react-icons/bs";

const API = process.env.REACT_APP_API_KEY;
const channelID = process.env.REACT_APP_YT_CHANNEL_ID;
var profileURL = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelID}&key=${API}`;
var videoURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&maxResults=1&order=date&part=snippet`;

const YouTubeContent = () => {
    const [pict, setPict] = useState();
    const [name, setName] = useState();
    const [video, setVideo] = useState();

    require('dotenv').config();
    
    fetch(profileURL)
        .then((response) => response.json())
        .then((responseJson) => {
        var ProfilePict = responseJson.items.map(obj => obj.snippet.thumbnails.medium.url);
        const PP = ProfilePict[0];
        var ProfileName = responseJson.items.map(obj => obj.snippet.title);
        const PN = ProfileName[0];
        setName(PN);
        setPict(PP);
        })
        .catch((error) => {
            return(error)
        });

    fetch(videoURL)
        .then((response) => response.json())
        .then((responseJson) => {
        var LatestVideo = responseJson.items.map(obj => obj.id.videoId);
        const LV = LatestVideo[0];
        setVideo(LV);
        })
        .catch((error) => {
            return(error)
        });

    const YTContent = ({Pict, Name, Video}) => {
        return(
            <YTContainer>
                <YTPictPart>
                <YouTube 
                    videoId= {Video}
                    width="400px"  />
                </YTPictPart>
                <YTProfile>
                    <YTPict src={Pict} />
                    <YTName>{Name}</YTName>
                    <Visit href = "https://www.youtube.com/channel/UCK_2UEc-JfIKDtWEy1_IK9g/videos">Visit YouTube Channel <BsFillCaretRightFill target="_blank"/></Visit>
                </YTProfile>
            </YTContainer>
        );
    };
    return(
        <GlobalContent>
            <TitleHomeContent>Youtube Video</TitleHomeContent>
            <YTContainer>
                <YTContent Video = {video} Pict = {pict} Name = {name} />
            </YTContainer>
        </GlobalContent>
    );
};

export default YouTubeContent;