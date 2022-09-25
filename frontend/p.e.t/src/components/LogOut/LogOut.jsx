import React from 'react';
import {useContext} from 'react'
import { UserContext } from "../../App";

export default function LogOut(){

    const userContext = useContext(UserContext);

    async function onClick() {
        const answer = window.confirm("Are you sure you want to log out?");

        if(answer){
        const res = await fetch('/api/logout', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: userContext.email,
            }),
        }).catch( (error ) => {
            window.alert(error);
            return;
        });
        const answer = await res.json();
        if(!res.ok)
        window.alert(answer.msg);
       if(res.ok){
        window.alert(answer.msg);
        window.location.reload();
    }
    }
}


    return(
        <button className="petButton opaque" onClick={onClick}>Log Out</button>
    )
}