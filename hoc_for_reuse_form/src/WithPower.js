import React from "react";
import axios from 'axios';


const WithPower = WrapperComponent => {
    const newPower = (props) => {
        console.log('userName', props.userName);
        console.log('userEmail', props.userEmail);
        const handleGitFetch = () => {
            axios.get(`https://github.com/${props.userName}/`,
                {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Content-Type": "application/json",
                    }
                })
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        return (
            <div>
                <h2>i am aHOC</h2>
                {props && props.userName && props.userEmail ? <h3>{`hellow ${props.userName} and your email is ${props.userEmail}`}</h3> : ''}
                <form >
                    <input
                        placeholder="Github User Name"
                        type="text"
                        value={props.userName}
                        onChange={(e) => props.setUserName(e.target.value)}
                    />
                    <br />
                    <input
                        placeholder="User Email"
                        type="text"
                        value={props.userEmail}
                        onChange={(e) => props.setUserEmail(e.target.value)}
                    />
                </form>
                <button onClick={handleGitFetch} >Submit</button>
                <WrapperComponent value="Chiranjiv" />
            </div>
        );
    };
    return newPower;
};
export default WithPower;
