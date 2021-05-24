import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {getUserDetail} from '../functions/userCalls';
import PostList from './PostList';
import UserList from './UserList';
import verifySession from '../functions/verifySession';

const Profile = () => {
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);
    const [content, setContent] = useState('')
    const {id} = useParams();

    const getData = async () => {
        const {userDetail, userPosts} = await getUserDetail(id);
        setUser(userDetail);
        setPosts(userPosts);
    }

    const changeContent = (value) => {
        const contentType = {
            'posts' : <PostList posts={posts}/>,
            'friends': <UserList users={user.friendList} option={'Friends'}/>,
            'requests': <UserList users={user.friendRequests} option={'Requests'}/>
        }
        setContent(contentType[value]);
    }

    useEffect(() => {
        getData();// eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (user) {
        const userId = (verifySession()) ? JSON.parse(localStorage.getItem('userSession')).user._id : null;
        const friendRequestButton = (userId === user._id) ? (
            <button onClick={e => changeContent('requests')}>Friend Requests</button>
        ) : (null);

        return (
            <div className={'profile'}>
                <h1 className={'user-name'}>{user.firstName} {user.lastName}</h1>
                <div className={'profile__content'}>
                    <button onClick={e => changeContent('posts')}>Post</button>
                    <button onClick={e => changeContent('friends')}>Friends</button>
                    {friendRequestButton}
                </div>
                {content}
            </div>
        )
    }
    return null;
}

export default Profile;