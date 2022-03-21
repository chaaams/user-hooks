import React, { useEffect, useState } from "react";
import axios from 'axios'
import UserInfo from "./UserInfo";
import '../index.css'

function Users(){

    const [state, setState] = useState([]);

    useEffect (() =>{
        const URL = 'https://jsonplaceholder.typicode.com/users';
        axios(URL).then(res => {
            // console.log(res.data);
            const data = res.data;
            setState(data);
        })  
    }, [])

    return(
        <div className="container-fluid">
            <div className="row">
                <h1 className="text-center bg-dark text-white">Users Exercices</h1>
                    {
                        state.map(user =>{
                            return <UserInfo data={user}/>
                        })
                    }
            </div>
        </div>
    )
}

export default Users