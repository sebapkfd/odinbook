import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {getUserDetail} from '../functions/userCalls';
import PostList from './PostList';

const Profile = () => {
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);
    const {id} = useParams();

    const getData = async () => {
        const {userDetail, userPosts} = await getUserDetail(id);
        setUser(userDetail);
        setPosts(userPosts);
    }

    useEffect(() => {
        getData();// eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (user) {
        return (
            <div>
                <p>{user.firstName}</p>
                <PostList posts={posts}/>
            </div>
        )
    }
    return null;
}

export default Profile;