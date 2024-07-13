import React from 'react';


function UserCard({userInfo, onClick}) {

    return (
        <div
            onClick={()=>onClick(userInfo.id)}

             style={{width:'300px',marginTop:"20px", height:"200px", padding:'16px'}}>
            <img
                style={{height:'100px'}}
                src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png" alt=""/>

            <h1>{userInfo.name}</h1>
            <p>{userInfo.username}</p>
            <p>{userInfo.email}</p>
        </div>
    );
}

export default UserCard;