import React, { useState } from "react";
import { GlobalContent } from "../../GlobalContent";
import { TitleHomeContent } from "../style";
import YouTube from "react-youtube";
import {YTContainer, YTProfile, YTName, YTPict, Visit, YTPictPart} from "./style";
import { BsFillCaretRightFill } from "react-icons/bs";

console.log(process.env);
const API = process.env.REACT_APP_API_KEY;
console.log(API);
var profileURL = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=UCK_2UEc-JfIKDtWEy1_IK9g&key=${API}`;
var videoURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=UCK_2UEc-JfIKDtWEy1_IK9g&maxResults=1&order=date&part=snippet`;

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

    return(
        <GlobalContent>
            <TitleHomeContent>Youtube Video</TitleHomeContent>
            <YTContainer>
                <YTPictPart>
                <YouTube 
                    videoId= {video}
                    width="400px"  />
                </YTPictPart>
                <YTProfile>
                    <YTPict src={pict} />
                    <YTName>{name}</YTName>
                    <Visit href = "https://www.youtube.com/channel/UCK_2UEc-JfIKDtWEy1_IK9g/videos">Visit YouTube Channel <BsFillCaretRightFill target="_blank"/></Visit>
                </YTProfile>
            </YTContainer>
        </GlobalContent>
    );
};

export default YouTubeContent;