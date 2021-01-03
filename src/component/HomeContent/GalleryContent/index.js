import React from "react";
import {GlobalContent} from "../../GlobalContent";
import { TitleHomeContent, Viewedin} from "../style";
import {GalleryValueData} from "../../../alldata/GalleryContent";
import { BsFillCaretRightFill } from "react-icons/bs";
import 'react-lazy-load-image-component/src/effects/blur.css';
import HNLogo from "../../../images/HNLogo.png"
import {
    GalleryContainer,
    GalleryImage,
} from "./style";

const ManageGalleryData = ({images}) => {
    return(
        <GalleryImage src = {images} alt= {images} effect="blur" placeholderSrc={HNLogo}/>
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
                {GalleryValueData.map((data, idx) => (
                <ManageGalleryData
                    key={idx}
                    images={data.images}
                    alt={data.images}
                />
                ))}
            </GalleryContainer>
        </GlobalContent>
    );
};

export default GalleryContent;