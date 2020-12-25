import React from "react";
import { GlobalContent } from "../../GlobalContent";
import {CompetData} from "./content"
import {
    TitleContent,
    WrapperContent,
    BoxExpContain,
    ExpTitle,
    ExpWrite} from "../../ExpContent/style";
import {
    WorkContain,
    CompPict,
    AddedPictWork
} from "./style"

const ManageCompetData = ({ imgMain,title, compname,date,desc,img1, img2 }) => {
    return(
        <WrapperContent>
            <BoxExpContain>
                <WorkContain companypict><CompPict src = {imgMain} /></WorkContain>
                <WorkContain>
                <ExpTitle>{title}</ExpTitle>
                    <ExpWrite>{compname}</ExpWrite>
                    <ExpWrite year>{date}</ExpWrite>
                    <ExpWrite desc>{desc}</ExpWrite>
                    <AddedPictWork src = {img1} />
                    <AddedPictWork src = {img2} />
                </WorkContain>
            </BoxExpContain>
        </WrapperContent>
    );
};

const CompetContent = () => {
    return(
        <GlobalContent>
            <TitleContent>Working Experience</TitleContent>
            {CompetData.map((data, idx) => (
              <ManageCompetData
                key={idx}
                imgMain={data.imgMain}
                title={data.title}
                compname={data.compname}
                date={data.date}
                desc={data.desc}
                img1={data.img1}
                img2={data.img2}
              />
            ))}
        </GlobalContent>
    );
};
export default CompetContent;