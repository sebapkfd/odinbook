import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {getUserDetail} from '../functions/userCalls';
import PostList from './PostList';
import UserList from './UserList';

const Profile = () => {
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);
    const [content, setContent] = useState('posts')
    const {id} = useParams();

    const getData = async () => {
        const {userDetail, userPosts} = await getUserDetail(id);
        setUser(userDetail);
        setPosts(userPosts);
    }

    const changeContent = (value) => {
        const contentType = {
            'posts' : <PostList posts={posts}/>,
            'friends': <UserList users={user.friendList}/>,
            'requests': <UserList users={user.friendRequests}/>
        }
        setContent(contentType[value]);
    }

    useEffect(() => {
        getData();// eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (user) {
        return (
            <div>
                <p>{user.firstName}</p>
                <div>
                    <button onClick={e => changeContent('posts')}>Post</button>
                    <button onClick={e => changeContent('friends')}>Friends</button>
                    <button onClick={e => changeContent('requests')}>Friend Requests</button>
                </div>
                {content}
            </div>
        )
    }
    return null;
}

export default Profile;