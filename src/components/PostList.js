import PostItem from './PostItem';
import Empty from './Empty';

const PostList = (props) => {
    const {posts, source} = props;

    if (posts.length > 0) {
        return (
            <div className={'post-list'}>
                {posts.map(post => {
                    return (
                        <PostItem key={post._id} post={post} useLink={true} source={source}/>
                    )
                })}
            </div>
        )
    }
    return <Empty/>
}

export default PostList;