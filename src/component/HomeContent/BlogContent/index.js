import React from "react";
import {GlobalContent} from "../../GlobalContent";
import { TitleHomeContent, Viewedin} from "../style";
import { BsFillCaretRightFill } from "react-icons/bs";
import {BlogData} from "../../../alldata/BlogContent";
import {
    BlogBox,
    BlogContainer,
    BoxContainer,
    BlogImage,
    Blogbtn,
    BoxWrapper,
    BlogContainerPart
} from "./style"

export const ManageBlogData = ({ medias, title, description, id }) => {
    return (
      <BlogBox>
        <BoxWrapper>
        <BlogContainerPart><BlogImage src={medias} /></BlogContainerPart>
          <BlogContainerPart wrt>
          <BoxContainer titlee >{title}</BoxContainer>
          <BoxContainer>{description}</BoxContainer>
          </BlogContainerPart>
          <BlogContainerPart btn><Blogbtn to = {`/blogscontainer/${id}`}>Continue Reading</Blogbtn></BlogContainerPart>
        </BoxWrapper>
      </BlogBox>
    );
};

const BlogContent = () => {
    return(
        <GlobalContent>
            <TitleHomeContent recent >Recent Blog</TitleHomeContent>
            <TitleHomeContent view recent >
              <Viewedin to="/blog">View All <BsFillCaretRightFill target="_blank"/></Viewedin>
            </TitleHomeContent>
            <BlogContainer>
            {BlogData.map((data,idx) => (
              <ManageBlogData
                key={idx}
                medias={data.imagee}
                title={data.title}
                description={data.description}
                id={data.id}
              />
            ))}
            </BlogContainer>
        </GlobalContent>
    );
};

export default BlogContent;