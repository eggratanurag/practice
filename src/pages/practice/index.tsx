

import React, {useState, useEffect} from 'react'

const Practice = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
       
        console.log("hello kitty")

        return () => console.log("bye kitty")
    }, [count])

    return (
        <div>
            <h1>Practice</h1>
            <p>count {count}</p>
            <button onClick={() => setCount(prev => prev + 1)} >count</button>
        </div>
    )
}

export default Practice;