import { useEffect, useState } from "react";
import {getUserList} from '../functions/userCalls';

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
                    return <div key={user._id}>{user.firstName}</div>
                })}
            </div>
        )
    }
    return null;
    
}

export default UsersPage;