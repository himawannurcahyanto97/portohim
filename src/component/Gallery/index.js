import React from "react";
import {GlobalContent} from "../GlobalContent";
import {GalleryValueData} from "../../alldata/GalleryContent";
import 'react-lazy-load-image-component/src/effects/blur.css';
import {GalleryTitle, GalleryContainer,GalleryImage} from "./style";
import HNLogo from "../../images/HNLogo.png"

const ManageGalleryValueData = ({images}) => {
    return(
        <GalleryImage src = {images} alt= {images} effect="blur" placeholderSrc={HNLogo}/>
    );
};

const Gallery = () => {
    return(
        <GlobalContent>
            <GalleryTitle>Photo Gallery</GalleryTitle>
            <GalleryTitle desc>Here's all my gallery!</GalleryTitle>
            <GalleryContainer>
                {GalleryValueData.map((data, idx) => (
                <ManageGalleryValueData
                    key={idx}
                    images={data.images}
                    alt={data.images}
                />
                ))}
            </GalleryContainer>
        </GlobalContent>
    );
};

export default Gallery;