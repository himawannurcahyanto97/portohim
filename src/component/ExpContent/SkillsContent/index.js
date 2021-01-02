import React from "react";
import { GlobalContent } from "../../GlobalContent";
import { TitleContent } from "../style";
import {CertifData,SkillData} from "../../../alldata/SkillContent";
import {
    CertifContainer,
    CertifBox,
    CertifBoxContain,
    InstImage,
    DescWriteSkills
} from "./style";

const ManageSkillsData = ({img,title,institution,date}) => {
    return (
        <CertifBox>
            <CertifBoxContain image>
                <InstImage src= {img} />
            </CertifBoxContain>
            <CertifBoxContain>
                <DescWriteSkills title>{title}</DescWriteSkills>
                <DescWriteSkills>{institution}</DescWriteSkills>
                <DescWriteSkills date>{date}</DescWriteSkills>
            </CertifBoxContain>
        </CertifBox>
      );
}

const SkillsContent = () => {
    return(
        <GlobalContent>
            <TitleContent>Certification and Skill</TitleContent>
            <CertifContainer>
            {CertifData.map((data, idx) => (
              <ManageSkillsData
                key={idx}
                img={data.imge}
                title={data.title}
                institution={data.institution}
                date={data.date}
              />
            ))}
            </CertifContainer>
            <DescWriteSkills title>Languages :</DescWriteSkills>
            <DescWriteSkills>{SkillData.languages}</DescWriteSkills>
            <DescWriteSkills title>Programming Languages :</DescWriteSkills>
            <DescWriteSkills>{SkillData.ploglang}</DescWriteSkills>
            <DescWriteSkills title>Software :</DescWriteSkills>
            <DescWriteSkills>{SkillData.software}</DescWriteSkills>
        </GlobalContent>
    );
};

export default SkillsContent;