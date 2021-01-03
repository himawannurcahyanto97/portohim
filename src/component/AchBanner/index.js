import React from "react";
import { GlobalContent } from "../GlobalContent";
import {Banner, IntroPart, Intro, Img, ImgPart} from "../BannerStyle";
import {AchBanData} from "../../alldata/AchievContent";
import {AchHomeContent} from "../../alldata/AchievHomeContent";
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
                    <Intro normal jobs >{AchHomeContent.desc}</Intro>
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
                    <Img src={AchHomeContent.img} />
                </ImgPart>
            </Banner>
        </GlobalContent>
    );
};

export default AchBanner;