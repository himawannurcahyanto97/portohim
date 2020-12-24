import React from "react";
import ManageBlogData from "../HomeContent/BlogContent";
import EducationContent from "./EducationContent";
import SkillsContent from "./SkillsContent";
import WorkExp from "./WorkingExperience";

const ExpContent = () => {
    return(
        <>
            <EducationContent />
            <WorkExp />
            <SkillsContent />
        </>
    );
};

export default ExpContent;