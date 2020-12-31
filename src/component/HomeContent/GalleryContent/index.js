import React from "react";
import {GlobalContent} from "../../GlobalContent";
import { TitleHomeContent, Viewedin} from "../style";
import {GalleryData} from "./content";
import { BsFillCaretRightFill } from "react-icons/bs";
import {
    GalleryContainer,
    GalleryImage,
} from "./style";

const ManageGalleryData = ({images}) => {
    return(
        <GalleryImage src = {images} alt= {images}/>
    );
};

const GalleryContent = () => {
    return(
        <GlobalContent>
            <TitleHomeContent recent>Recent Gallery</TitleHomeContent>
            <TitleHomeContent view recent>
                <Viewedin to="/galleries">View All <BsFillCaretRightFill target="_blank"/></Viewedin>
            </TitleHomeContent>
            <GalleryContainer>
                {GalleryData.map((data, idx) => (
                <ManageGalleryData
                    key={idx}
                    images={data.img}
                    alt={data.img}
                />
                ))}
            </GalleryContainer>
        </GlobalContent>
    );
};

export default GalleryContent;