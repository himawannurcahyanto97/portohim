import React, {useState} from 'react';
import {GlobalContent} from '../GlobalContent';
import {BlogData} from "../../alldata/BlogContent";
import { RWebShare } from "react-web-share";
import {
    TitleContent,
    BoxContainer,
    BlogImage,
    BlogWrapped,
    BlogApart,
    BlogDivApart,
    ArticlePart,
    Linked,
    ShareBtn
} from "./style";

const ManageOthArtData = ({image, desc , title}) => {
    return(
        <Linked to ={`/blogscontainer/${title}`}>
            <BlogApart art>
                <BlogDivApart imagart><BlogImage art src={image}/></BlogDivApart>
                <BlogDivApart contain><BoxContainer>{desc}</BoxContainer></BlogDivApart>
            </BlogApart>
        </Linked>
    )
}

const BlogContainers = ({match}) => {
    const blogs = BlogData.filter(x => x['title'] == match.params.title)
    function shuffleArray(array){
        array.sort(function(){
            return 0.5-Math.random();
        });
    }
    shuffleArray(BlogData);

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
                        <BoxContainer>{data.content.par1}</BoxContainer> <br/>
                        <BoxContainer>{data.content.par2}</BoxContainer> <br/>
                        <BoxContainer>{data.content.par3}</BoxContainer> <br/>
                        <BoxContainer>{data.content.par4}</BoxContainer> <br/>
                        <BoxContainer>{data.content.par5}</BoxContainer>
                    </BlogWrapped>
                    <h4>Share To</h4>
                    <RWebShare
                        data={{
                        title: data.title,
                        }}
                    >
                    <ShareBtn>Share 🔗</ShareBtn>
                    </RWebShare>
                    </>
                ))}
                </BlogDivApart>
                <BlogDivApart>
                    <TitleContent art>Other Article</TitleContent>
                    <ArticlePart>
                    {BlogData.map((data,idx) => (
                    <ManageOthArtData 
                        key={idx}
                        image={data.imagee}
                        desc={data.description}
                        title={data.title}
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