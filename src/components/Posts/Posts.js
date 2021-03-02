import s from './Posts.module.css';
import CreatePost from '../../containers/CreatePost/CreatePost';
import Post from './Post/Post';


const Posts = () => {
    return (
      <>
            <CreatePost />
            <Post postText = 'Привет всем! Это мой первый пост.'/>
            <Post postText = 'Второй пост.'/>
      </>
    );
}
  
export default Posts;
  