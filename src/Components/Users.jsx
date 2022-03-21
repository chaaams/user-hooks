import React, { useEffect, useState } from "react";
import axios from 'axios'

function Users(){

    const [state, setState] = useState([]);

    useEffect (() =>{
        const URL = 'https://jsonplaceholder.typicode.com/users';
        axios(URL).then(res => {
            console.log(res.data);
            setState(res.data)
        })
        
    }, [])

    return(
        <div className="container ">
            <h1 className="text-center">Users Exercices</h1>
        </div>
    )
}

export default Users