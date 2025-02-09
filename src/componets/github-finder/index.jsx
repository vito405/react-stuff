import { useEffect, useState } from "react"
import User from "./user"
import './github-finder.css'



export default function GithubProfileFinder() {

    const [userName, setUserName] = useState('vito405')
    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(false)

    async function fetchGitHubUserData() {
        setLoading(true)
        const res = await fetch(`https://api.github.com/users/${userName}`)

        const data = await res.json()


        if (data) {
            setUserData(data)
            setLoading(false)
            setUserName('')
        }
      
    }

    function handleSubmit() { 
        if(userName === ''){
            return alert('Input a Name please')
        }
        fetchGitHubUserData()
    }

    useEffect(() => {
        fetchGitHubUserData()
    }, [])

    if (loading) return <div>Loading Please Wait</div>

    return <div className="github-container">
        <div className="input-wrapper">
            <input
                name="search"
                type="text"
                placeholder="Search Github UserName..."
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
            />
            <button onClick={handleSubmit}>Search</button>
        </div>
        {
            userData !== null ? <User user={userData}/> : null
        }
    </div>
}