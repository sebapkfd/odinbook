import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {getUserDetail} from '../functions/userCalls';
import PostList from './PostList';

const Profile = () => {
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);
    const [content, setContent] = useState(0)
    const {id} = useParams();

    const getData = async () => {
        const {userDetail, userPosts} = await getUserDetail(id);
        setUser(userDetail);
        setPosts(userPosts);
    }

    const changeContent = (value) => {
        setContent(value)
    }

    useEffect(() => {
        getData();// eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (user) {
        return (
            <div>
                <p>{user.firstName}</p>
                {content}
                <div>
                    <button onClick={e => changeContent(0)}>Post</button>
                    <button onClick={e => changeContent(1)}>Friends</button>
                    <button onClick={e => changeContent(2)}>Friend Requests</button>
                </div>
                <PostList posts={posts}/>
            </div>
        )
    }
    return null;
}

export default Profile;