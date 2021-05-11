import { useEffect, useState } from "react";
import {getUserList} from '../functions/userCalls';
import UserList from './UserList';

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
                <UserList users={users}/>
            </div>
        )
    }
    return null;
    
}

export default UsersPage;