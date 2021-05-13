import { useEffect, useState } from "react";
import {getOtherUsersList} from '../functions/userCalls';
import UserList from './UserList';

const UsersPage = () => {
    const [users, setUsers] = useState(null);

    const getData = async () => {
        const user = JSON.parse(localStorage.getItem('userSession')).user._id;
        const data = await getOtherUsersList(user);
        setUsers(data);
    }

    useEffect(() => {
        getData();
    }, [])

    if (users) {
        return (
            <div>
                <UserList users={users}/>
            </div>
        )
    }
    return null;
    
}

export default UsersPage;