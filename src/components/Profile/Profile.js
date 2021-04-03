import s from './Profile.module.css';
import Posts from './Posts/Posts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <>
            <ProfileInfo />
            <Posts posts = {props.profilePage.posts} newPostText = {props.profilePage.newPostText} addPost = {props.addPost} updateNewPostText = {props.updateNewPostText} />
        </>
    );
}

export default Profile;