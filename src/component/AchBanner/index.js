import React from "react";
import achhima from "../../images/achhima.png";
import { GlobalContent } from "../GlobalContent";
import {Banner, IntroPart, Intro, Img, ImgPart} from "../BannerStyle";
import {AchBanData} from "./content";
import {
    ItemBoxGrid,
    ItemBoxAch,
    ItemBoxContain,
    ContainWrite
} from "./style"

const ManageAchBanData = ({number,name}) => {
    return(
        <ItemBoxAch>
            <ItemBoxContain>
                <ContainWrite number>{number}</ContainWrite>
                <ContainWrite>{name}</ContainWrite>
            </ItemBoxContain>
        </ItemBoxAch>
    );
};

const AchBanner = () => {
    return(
        <GlobalContent>
            <Banner>
                <IntroPart>
                    <Intro big normal>My Achievement</Intro>
                    <Intro normal jobs >Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, 
                    dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris</Intro>
                    <ItemBoxGrid>
                    {AchBanData.map((data, idx) => (
                        <ManageAchBanData
                            key={idx}
                            number={data.number}
                            name={data.name}
                        />))}
                    </ItemBoxGrid>
                </IntroPart>
                <ImgPart>
                    <Img src={achhima} />
                </ImgPart>
            </Banner>
        </GlobalContent>
    );
};

export default AchBanner;