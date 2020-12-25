import React from "react";
import {EduData} from "./content";
import { GlobalContent } from "../../GlobalContent";
import { 
    TitleContent, 
    WrapperContent,
    BoxExpContain,
    ExpTitle,
    ExpWrite
} from "../style";
import {
    EduPart
} from "./style";

const ManageEduData = ({ imgl,edu, major,year,desc,imgr }) => {
    return(
        <WrapperContent>
            <BoxExpContain>
                <EduPart><img src = {imgl} /></EduPart>
                <EduPart contain >
                    <ExpTitle>{edu}</ExpTitle>
                    <ExpWrite>{major}</ExpWrite>
                    <ExpWrite year>{year}</ExpWrite>
                    <ExpWrite desc>{desc}</ExpWrite>
                </EduPart>
                <EduPart><img src = {imgr} /></EduPart>
            </BoxExpContain>
        </WrapperContent>
    );
};

const EducationContent = () => {
    return(
        <GlobalContent>
            <TitleContent>Education</TitleContent>
            {EduData.map((data, idx) => (
              <ManageEduData
                key={idx}
                imgl={data.imgl}
                edu={data.edu}
                major={data.major}
                year={data.year}
                desc={data.desc}
                imgr={data.imgr}
              />
            ))}
        </GlobalContent>
    );
};

export default EducationContent;