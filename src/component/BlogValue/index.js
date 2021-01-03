import React from "react";
import { GlobalContent } from "../GlobalContent";
import {BlogData} from "../../alldata/BlogContent";
import {BlogContainer} from "./style"
import {
    BlogBox,
    BoxContainer,
    BlogImage,
    BoxWrapper,
    BlogContainerPart,
    Blogbtn
} from "../HomeContent/BlogContent/style";

const ManageBlogValueData = ({ medias, title, description, }) => {
  return (
    <BlogBox>
      <BoxWrapper>
      <BlogContainerPart><BlogImage src = {medias} /></BlogContainerPart>
        <BlogContainerPart wrt>
        <BoxContainer titlee >{title}</BoxContainer>
        <BoxContainer>{description}</BoxContainer>
        </BlogContainerPart>
        <BlogContainerPart btn><Blogbtn to = {`/blogscontainer/${title}`}>Continue Reading</Blogbtn></BlogContainerPart>
      </BoxWrapper>
    </BlogBox>
  );
};

const BlogValue = () => {

return(
    <GlobalContent>
        <BlogContainer>
        {BlogData.map((data,idx) => (
          <ManageBlogValueData
            key={idx}
            medias={data.imagee}
            title={data.title}
            description={data.description}
          />
        ))}
        </BlogContainer>
    </GlobalContent>
);
};

export default BlogValue;