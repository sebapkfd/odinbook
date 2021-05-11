import { useEffect, useState } from 'react';
import {getPostList} from '../functions/postsCalls';
import PostInput from './PostInput';
import PostList from './PostList';

const Home = () => {
    const [postList, setPostList] = useState([]);

    const getData = async () => {
        const data = await getPostList();
        setPostList(data);
    }

    useEffect(()=> {
        getData();
    }, [])

    return (
        <div>
            <h1>Home</h1>
            <PostInput/>
            <PostList posts={postList}/>
        </div>
    )
}

export default Home;