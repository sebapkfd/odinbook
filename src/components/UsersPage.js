import { useEffect, useState } from "react";
import {getUserList} from '../functions/userCalls';
import UserItem from './UserItem';

const UsersPage = () => {
    const [users, setUsers] = useState(null);

    const getData = async () => {
        const data = await getUserList();
        setUsers(data);
    }

    useEffect(() => {
        getData();
    }, [])

    if (users) {
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

export default UsersPage;