import s from './Post.module.css';


const Post = (props) => {
    return (
      <>
        <div className='pageBlock'>
            <p>{props.postText}</p>
        </div> 
        
      
      </>
    );
}
  
export default Post;