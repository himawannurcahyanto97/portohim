import React from "react";
import { GlobalContent } from "../GlobalContent";
import {BlogDataValue} from "./content";
import {
    BlogBox,
    BlogContainer,
    BoxContainer,
    BlogImage,
    BoxWrapper,
    BlogContainerPart,
    Blogbtn
} from "../HomeContent/BlogContent/style";

const ManageBlogValueData = ({ image, title, description }) => {
    return (
      <BlogBox>
        <BoxWrapper>
          <BlogContainerPart><BlogImage src = {image} /></BlogContainerPart>
          <BlogContainerPart wrt>
          <BoxContainer titlee >{title}</BoxContainer>
          <BoxContainer>{description}</BoxContainer>
          </BlogContainerPart>
          <BlogContainerPart btn><Blogbtn>Continue Reading</Blogbtn></BlogContainerPart>
        </BoxWrapper>
      </BlogBox>
    );
};

const BlogValue = () => {
    return(
        <GlobalContent>
            <BlogContainer>
            {BlogDataValue.map((data, idx) => (
              <ManageBlogValueData
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

export default BlogValue;