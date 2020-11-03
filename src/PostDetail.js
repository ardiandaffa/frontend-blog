import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import styled from 'styled-components';
import axios from 'axios';
import Comment from './components/Comment';
import CommentForm from './components/CommentForm';


const PostDetail = props => {
    const [postDetail, setPostDetail] = useState()
    const [comments, setComments] = useState([])

    const POSTID = props.match.params.id
    
    const POST_API_URL = `https://sleepy-wildwood-01652.herokuapp.com/API/${props.match.params.id}`
    const COMMENT_API_URL = `https://sleepy-wildwood-01652.herokuapp.com/API/${props.match.params.id}/comment`

    const fetchingPost = async () => {
        const posts = await axios.get(POST_API_URL)
         return posts.data
    }

    const fetchingComment = async () => {
        const comments = await axios.get(COMMENT_API_URL)
         return comments.data
    }

    useEffect(async () => {
        let fetchedPostDetail = await fetchingPost()
        setPostDetail(fetchedPostDetail);
    }, [])

    useEffect( async () => {
        let fetchedComments = await fetchingComment()
        setComments(fetchedComments);
    }, [])

    return (
        <div>
            <Header title="THE BLOG"/>
            <PostContainer>
            <h3>{postDetail === undefined? "" : postDetail.postTitle}</h3>
            <PublishedText>{postDetail === undefined? " ": "Published :"} {postDetail === undefined? "" : postDetail.dateCreated}</PublishedText>
            <Content>{postDetail === undefined? "" : postDetail.postContent}</Content>
            <CommentContainer>
            {comments.map(comment =><Comment postID={POSTID} key = {comment._id} commentProps = {comment}></Comment>)}
            </CommentContainer>
            <CommentForm postID={POSTID}/>
            </PostContainer>
        </div>
    )
}

export default PostDetail

const PostContainer = styled.div`
    display: flex;
    width: 70%;
    min-width: 23rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    margin-top: 3rem;
    font-family: 'PT Serif', serif;
    margin-bottom: 3rem;
`


const Content = styled.span`
    margin-top: 0.5rem;
    max-width: 50rem;
    width: 80%;
    height: auto;
    min-width: 23rem;
    font-size: 15px;
    text-align: center;
    max-width: 30rem;
`


const PublishedText = styled.span`
    width: 80%;
    max-width: 30rem;
    height: auto;
    text-align: center;
    min-width: 23rem;
    font-size: 10px;
    color: gray;
`

const CommentContainer = styled.div`
    justify-self: flex-end;
    margin-top: 10rem;
`