import React from "react";
import {GlobalContent} from "../../GlobalContent";
import { TitleHomeContent, Viewedin} from "../style";
import Land from "../../../images/Land.png";
import {GalleryData} from "./content";
import { BsFillCaretRightFill } from "react-icons/bs";
import {
    GalleryContainer,
    GalleryImage
} from "./style";

const ManageGalleryData = ({id}) => {
    return(
        <GalleryImage src = {Land} alt ={id} />
    );
};

const GalleryContent = () => {
    return(
        <GlobalContent>
            <TitleHomeContent recent>Recent Gallery</TitleHomeContent>
            <TitleHomeContent view recent>
                <Viewedin to="/gallery">View All <BsFillCaretRightFill target="_blank"/></Viewedin>
            </TitleHomeContent>
            <GalleryContainer>
                {GalleryData.map((data, idx) => (
                <ManageGalleryData
                    key={idx}
                    id={data.id}
                />
                ))}
            </GalleryContainer>
        </GlobalContent>
    );
};

export default GalleryContent;