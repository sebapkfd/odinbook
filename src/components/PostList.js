import PostItem from './PostItem';
import Empty from './Empty';

const PostList = (props) => {
    const {posts} = props;

    if (posts.length > 0) {
        return (
            <div className={'post-list'}>
                {posts.map(post => {
                    return (
                        <PostItem key={post._id} post={post} useLink={true} defaultState={true}/>
                    )
                })}
            </div>
        )
    }
    return <Empty/>
}

export default PostList;