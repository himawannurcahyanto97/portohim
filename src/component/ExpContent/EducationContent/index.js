import React from "react";
import {EduData} from "./content";
import { GlobalContent } from "../../GlobalContent";
import {TitleExpContent} from "../style";
import {
    StudContain,
    BoxStudContain,
    EduPart,
    EduTitle,
    EduWrite
} from "./style";

const ManageEduData = ({ imgl,edu, major,year,desc,imgr }) => {
    return(
        <StudContain>
            <BoxStudContain>
                <EduPart><img src = {imgl} /></EduPart>
                <EduPart contain >
                    <EduTitle>{edu}</EduTitle>
                    <EduWrite>{major}</EduWrite>
                    <EduWrite year>{year}</EduWrite>
                    <EduWrite desc>{desc}</EduWrite>
                </EduPart>
                <EduPart><img src = {imgr} /></EduPart>
            </BoxStudContain>
        </StudContain>
    );
};

const EducationContent = () => {
    return(
        <GlobalContent>
            <TitleExpContent>Education</TitleExpContent>
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