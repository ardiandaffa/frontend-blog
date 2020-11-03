import Header from './components/Header';
import Post from './components/Post';
import 'normalize.css';
import './App.css';
import styled from 'styled-components';
import axios from 'axios';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

function App() {
  const fetchingPost = async () => {
    const posts = await axios.get(`https://sleepy-wildwood-01652.herokuapp.com/API/`)
     return posts.data
}

  const [postData, setPostData] = useState([]);

useEffect(async () => {
  let fetchedPost = await fetchingPost();
  console.log(fetchedPost)
  setPostData(fetchedPost);
}, [])


 


  return (
    <AppContainer>
      <Header title='THE BLOG'></Header>
      <PostContainer>
      {postData.map(post =><Post key = {post._id} post = {post}></Post>)}
      </PostContainer>
    </AppContainer>
  );
}

export default App;



const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const PostContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 50%;
  margin-right: auto;
  margin-left: auto;
`