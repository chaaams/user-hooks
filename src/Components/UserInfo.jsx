import React from "react";
import '../index.css'
function UserInfo (props){
    console.log(props);
    return(
        <div className="col-6 border border-5 border-secondary border-dark">
            <h1>{props.data.name}</h1>
            <h2>{props.data.email}</h2> 
            <a href={props.data.website}>Website</a>
        </div>
    )
}

export default UserInfo