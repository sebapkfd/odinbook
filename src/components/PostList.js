import PostItem from './PostItem';

const PostList = (props) => {
    const {posts} = props;

    return (
        <div>
            {posts.map(post => {
                return (
                    <PostItem key={post._id} post={post} useLink={true}/>
                )
            })}
        </div>
    )
}

export default PostList;