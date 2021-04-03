import s from './Posts.module.css';
import CreatePost from '../../../containers/CreatePost/CreatePost';
import Post from './Post/Post';
import { useEffect, useState } from 'react';


const Posts = (props) => {


    return (
      <>
            <CreatePost addPost = {props.addPost} newPostText = {props.newPostText} updateNewPostText = {props.updateNewPostText} />
            {props.posts.map((post, index) => 
              <Post postText = {post.postText} key = {index} />
            )}
      </>
    );
}
  
export default Posts;
  