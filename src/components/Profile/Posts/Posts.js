import s from './Posts.module.css';
import CreatePost from '../../../containers/CreatePost/CreatePost';
import Post from './Post/Post';


const Posts = (props) => {
    return (
      <>
            <CreatePost />
            {props.posts.map((post, index) => 
              <Post postText = {post.postText} key = {index} />
            )}
      </>
    );
}
  
export default Posts;
  