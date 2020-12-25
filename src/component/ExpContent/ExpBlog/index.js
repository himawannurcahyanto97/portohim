import React from "react";
import { GlobalContent } from "../../GlobalContent";
import { TitleExpContent } from "../style";
import {BlogData} from "../../HomeContent/BlogContent/content";
import {
    BlogBox,
    BlogContainer,
    BoxContainer,
    BlogImage,
    BoxWrapper,
    BlogContainerPart
} from "../../HomeContent/BlogContent/style"

const ManageExpBlogData = ({ image, title, description }) => {
    return (
      <BlogBox>
        <BoxWrapper>
          <BlogContainerPart><BlogImage src = {image} /></BlogContainerPart>
          <BlogContainerPart>
          <BoxContainer titlee >{title}</BoxContainer>
          <BoxContainer>{description}</BoxContainer>
          </BlogContainerPart>
        </BoxWrapper>
      </BlogBox>
    );
};

const ExpBlog = () => {
    return(
        <GlobalContent>
            <TitleExpContent>Experience Blog</TitleExpContent>
            <BlogContainer>
            {BlogData.map((data, idx) => (
              <ManageExpBlogData
                key={idx}
                image={data.img}
                title={data.title}
                description={data.description}
              />
            ))}
            </BlogContainer>
        </GlobalContent>
    );
};

export default ExpBlog;