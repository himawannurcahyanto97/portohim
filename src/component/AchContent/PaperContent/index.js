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
import {PaperData} from "../../../alldata/PaperContent";
import {Homebtn} from "../../HomeBanner/style"

const ManagePaperData = ({title, tipe, text, date, author, image,link}) => {
    return(
        <PaperBox>
            <DisplayedPaper>
                <DividerDisplay>
                <TitlePaper>{title}</TitlePaper>
                <TipePaper tipe>{tipe}</TipePaper>
                <TipePaper>{text}</TipePaper>
                <WritePaper>{date}</WritePaper>
                <WritePaper author>{author}</WritePaper>
                <a href={link}><Homebtn>Download</Homebtn></a>
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
                link={data.link}
              />
            ))}
            </WrapperPaperContent>
        </GlobalContent>
    );
};

export default PaperContent;