import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';





const Post = (props) => {

    let history = useHistory();

    const handleClick = () => {
        history.push(`/post/${props.post._id}`)
    }

    return (
        <PostContainer onClick={handleClick}>
            <h3>{props.post.postTitle}</h3>
            <PostContent><ContentText>{props.post.postContent}</ContentText></PostContent>
            <PublishedDate>Published: {props.post.dateCreated}</PublishedDate>
        </PostContainer>
    )
}

export default Post;


const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'PT Serif', serif;
    width: 20%;
    min-width: 23rem;
    height: 8rem;
    background-color: white;
    justify-content: flex-start;
    margin-right: auto;
    margin-left: auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
    -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    -ms-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    -o-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    border-radius: 4px;
`

const PostContent = styled.div`
    width: 80%;
    height: 5rem;
`

const ContentText = styled.span`
    display: block;
    overflow: hidden;
    font-size: 15px;
    white-space: nowrap;
    text-overflow: ellipsis;
`

const PublishedDate = styled.span`
    font-size: 10px;
    color: gray;
    align-self: flex-end;
    margin-bottom: 5px;
    margin-right: 10px;
`