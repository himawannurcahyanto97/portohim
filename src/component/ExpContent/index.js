import React from "react";
import EducationContent from "./EducationContent";
import WorkExp from "./WorkExperience";
import SkillsContent from "./SkillsContent";
import ExpBlog from "./ExpBlog"

const ExpContent = () => {
    return(
        <>
            <EducationContent />
            <WorkExp />
            <SkillsContent />
            <ExpBlog />
        </>
    );
};

export default ExpContent;