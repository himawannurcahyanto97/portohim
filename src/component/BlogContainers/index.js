import React from 'react';
import {GlobalContent} from '../GlobalContent';
import {BlogData} from "../../alldata/BlogContent";
import {
    FaFacebookSquare,
    FaLinkedin
} from "react-icons/fa";
import {
    TitleContent,
    BoxContainer,
    BlogImage,
    BlogWrapped,
    BlogApart,
    BlogDivApart,
    ArticlePart,
    Linked,
    FbBtn,
    LinBtn
} from "./style";

const ManageOthArtData = ({image, desc , id}) => {
    return(
        <Linked to ={`/blogscontainer/${id}`}>
            <BlogApart art>
                <BlogDivApart imagart><BlogImage art src={image}/></BlogDivApart>
                <BlogDivApart contain><BoxContainer>{desc}</BoxContainer></BlogDivApart>
            </BlogApart>
        </Linked>
    )
}

const BlogContainers = ({match}) => {
    const blogs = BlogData.filter(x => x['id'] == match.params.id)
    const url = window.location.href;
    return(
        <>
        <GlobalContent>
            <BlogApart containe>
                <BlogDivApart contain>
                {blogs.map((data) => (
                    <>
                    <TitleContent>{data.title}</TitleContent>
                    <BlogWrapped image>
                        <BlogImage src = {data.imagee} />
                    </BlogWrapped>
                    <BlogWrapped>
                        <BoxContainer>{data.content}</BoxContainer>
                    </BlogWrapped>
                    </>
                ))}
                <FbBtn url={url} appID ={190510572789688}>Share This to <FaFacebookSquare /></FbBtn>
                <LinBtn url={url}>Share This to <FaLinkedin /></LinBtn>
                </BlogDivApart>
                <BlogDivApart>
                    <TitleContent art>Other Article</TitleContent>
                    <ArticlePart>
                    {BlogData.map((data,idx) => (
                    <ManageOthArtData 
                        key={idx}
                        image={data.imagee}
                        desc={data.description}
                        id={data.id}
                    />
                    ))}
                    </ArticlePart>
                </BlogDivApart>
            </BlogApart>
        </GlobalContent>
        </>
    );
};

export default BlogContainers;