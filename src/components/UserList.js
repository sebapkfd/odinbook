import UserItem from './UserItem';

const UserList = (props) => {
    const {users} = props;
    if (users.length > 0) {
        return (
            <div>
                {users.map(user => {
                    return <UserItem key={user._id} user={user}/>
                })}
            </div>
        )
    }
    return null;
}

export default UserList;