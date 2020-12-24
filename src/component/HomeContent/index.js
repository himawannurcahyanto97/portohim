import React from "react";
import YouTubeContent from "./YouTubeContent";
import GalleryContent from "./GalleryContent";
import BlogContent from "./BlogContent";
import AboutContent from "./AboutContent";

const HomeContent = () => {
    return(
        <div>
            <YouTubeContent />
            <BlogContent />
            <GalleryContent />
            <AboutContent />
        </div>
    );
};

export default HomeContent;