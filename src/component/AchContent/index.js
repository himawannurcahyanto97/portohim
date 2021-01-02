import React from "react";
import PaperContent from "./PaperContent";
import CompetContent from "./CompetContent";
import PublicationContent from "./PublicationContent";

const AchContent = () => {
    return(
        <>
            <PublicationContent />
            <PaperContent />
            <CompetContent />
        </>
    );
};

export default AchContent;