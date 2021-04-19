import { useEffect, useState } from 'react';
import {getPostList} from '../functions/postsCalls';
import PostItem from './PostItem';
import PostInput from './PostInput';

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
            {postList.map(post => {
                return (
                    <PostItem
                    post={post}
                    key={post._id}
                    />
                )
            })}
        </div>
    )
}

export default Home;