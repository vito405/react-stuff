import { useState } from "react"



export default function GithubProfileFinder(){

    const [userName, setUserName] = useState('vito405')

    function handleSubmit(){
        
    }

    return<div className="github-container">
        <div className="input-wrapper">
           <input 
           name="search"
           type="text"
           placeholder="Search Github UserName..."
           />
           <button onClick={handleSubmit}>Search</button>
        </div>
    </div>
}