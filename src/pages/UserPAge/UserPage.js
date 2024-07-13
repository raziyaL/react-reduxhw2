import React,{useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchReqestAction, getUsersIdAction} from "../../redux/actions";
import UserCard from "../../component/UserCard";

function UserPage() {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.UsersPageReducer.users);
    const [idUser, setIdUser] = useState(null);


    const getUsers=()=>{
        dispatch(fetchReqestAction())
    }
    const getUsersIdInfo = (userId) =>{
        setIdUser(userId)
        console.log(userId)
        dispatch(getUsersIdAction(userId))
    }

    return (
        <div>
            <button onClick={getUsers}>Получить пользователей</button>
            <div style={{display: "flex", flexWrap: "wrap", textAlign: "center",width:"100%"}}>
                {users && users.length > 0 && (
                    users.map(user => (
                        idUser === user.id ? (
                            <h1 style={{marginTop:"160px", width:"300px"}}>User's ID: {user.id}</h1>
                        ) : (
                            <UserCard onClick={getUsersIdInfo} userInfo={user} key={user.id} />
                        )
                    ))
                )}
            </div>
        </div>
    );
}

export default UserPage;