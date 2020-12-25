import React from "react";
import { GlobalContent } from "../../GlobalContent";
import {TitleContent} from "../../ExpContent/style";
import {
    PaperBox,
    WrapperPaperContent,
    DisplayedPaper,
    TitlePaper,
    WritePaper,
    TipePaper,
    PaperImg,
    DividerDisplay,
} from "./style";
import {PaperData} from "./content";
import {Homebtn} from "../../HomeBanner/style"

const ManagePaperData = ({title, tipe, text, date, author, image}) => {
    return(
        <PaperBox>
            <DisplayedPaper>
                <DividerDisplay>
                <TitlePaper>{title}</TitlePaper>
                <TipePaper tipe>{tipe}</TipePaper>
                <TipePaper>{text}</TipePaper>
                <WritePaper>{date}</WritePaper>
                <WritePaper author>{author}</WritePaper>
                <Homebtn>Download</Homebtn>
                </DividerDisplay>
                <DividerDisplay img>
                <PaperImg src = {image} />
                </DividerDisplay>
            </DisplayedPaper>
        </PaperBox>
    );
};

const PaperContent = () => {
    return(
        <GlobalContent>
            <TitleContent>Featured Research</TitleContent>
            <WrapperPaperContent>
            {PaperData.map((data, idx) => (
              <ManagePaperData
                key={idx}
                title={data.title}
                tipe={data.tipe}
                text={data.text}
                date={data.date}
                author={data.author}
                image={data.papimage}
              />
            ))}
            </WrapperPaperContent>
        </GlobalContent>
    );
};

export default PaperContent;