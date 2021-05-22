import UserItem from './UserItem';

const UserList = (props) => {
    const {users, option} = props;


    if (users.length > 0) {
        return (
            <div className={'user-list'}>
                {users.map(user => {
                    return <UserItem key={`option/${user._id}`} user={user} option={option}/>
                })}
            </div>
        )
    }
    return null;
}

export default UserList;