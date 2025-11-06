

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Protection = () => {
    const navigate = useNavigate()
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(password === import.meta.env.VITE_HOME_PAGE_PROTECTION_CODE) {
            localStorage.setItem(import.meta.env.VITE_HOME_PAGE_PROTECTION_KEY, import.meta.env.VITE_HOME_PAGE_PROTECTION_CODE)
            navigate('/')
        } else {
            setError("Invalid password")
        }
    }

    return (
        <div className="min-h-screen flex bg-white flex-col text-gray-800 items-center justify-center pb-20 light">
            <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-4 border-2 border-gray-300 rounded-md p-4">  
            <h2>Home page is Protected</h2>
            <input type="text" placeholder="Enter the password" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            <button type="submit" className="bg-gray-800 text-white rounded-md p-2">Submit</button>
            {error && <p className="text-red-500">{error}</p>}
            </form>
        </div>
    )
}

export default Protection;