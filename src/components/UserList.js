import UserItem from './UserItem';

const UserList = (props) => {
    const {users} = props;

    return (
        <div>
            {users.map(user => {
                return <UserItem key={user._id} user={user}/>
            })}
        </div>
    )
}

export default UserList;