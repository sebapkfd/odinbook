import PostItem from './PostItem';

const PostList = (props) => {
    const {posts, source} = props;

    return (
        <div>
            {posts.map(post => {
                return (
                    <PostItem key={post._id} post={post} useLink={true} source={source}/>
                )
            })}
        </div>
    )
}

export default PostList;