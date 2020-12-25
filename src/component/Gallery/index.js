import React from "react";
import {GlobalContent} from "../GlobalContent";
import {GalleryValueData} from "./content";
import {
    GalleryContainer,
    GalleryImage
} from "../HomeContent/GalleryContent/style";
import {GalleryTitle} from "./style";

const ManageGalleryValueData = ({images}) => {
    return(
        <GalleryImage src = {images} alt= {images}/>
    );
};

const Gallery = () => {
    return(
        <GlobalContent>
            <GalleryTitle>Photo Gallery</GalleryTitle>
            <GalleryTitle desc>Lorem ipsum dolor sit amet</GalleryTitle>
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