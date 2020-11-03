import React from 'react';
import styled from 'styled-components';
import axios from 'axios';


const Comment = (props) => {


    const handleDelete = async () => {
        await axios.delete(`https://sleepy-wildwood-01652.herokuapp.com/API/${props.postID}/comment/${props.commentProps._id}`)
        window.location.reload();
    }
    


    return (
        <PostContainer>
            <DeleteComment onClick={handleDelete}>Delete comment</DeleteComment>
            <h5>{props.commentProps.name}</h5>
            <PostContent><ContentText>{props.commentProps.comment}</ContentText></PostContent>
            <PublishedDate>Comment Posted: {props.commentProps.dateCreated} </PublishedDate>
        </PostContainer>
    )
}

export default Comment;


const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'PT Serif', serif;
    width: 20%;
    min-width: 23rem;
    height: auto;
    background-color: white;
    justify-content: flex-start;
    margin-right: auto;
    margin-left: auto;
    margin-top: 1rem;
    margin-bottom: 1rem;

`

const PostContent = styled.div`
    width: 95%;
    height: auto;
`

const ContentText = styled.span`
    display: block;
    font-size: 12px;
    height: auto;
`

const PublishedDate = styled.span`
    font-size: 10px;
    color: gray;
    align-self: flex-end;
    margin-bottom: 5px;
    margin-right: 10px;
    margin-top: 2rem;
`

const DeleteComment = styled.button`
    font-size: 10px;
    color: gray;
    align-self: flex-end;
    margin-right: 10px;
`