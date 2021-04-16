import { useEffect, useState } from 'react';
import {getPostList} from '../functions/postsCalls';
import PostItem from './PostItem';

const Home = () => {
    const [postList, setPostList] = useState([]);

    const getData = async () => {
        const data = await getPostList();
        setPostList(data);
        console.log(data);
    }

    useEffect(()=> {
        getData();
    }, [])

    return (
        <div>
            <h1>Home</h1>
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