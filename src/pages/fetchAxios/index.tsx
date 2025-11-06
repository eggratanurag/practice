

import React, {useState, useEffect} from 'react'


interface Posts {
    id: number,
    title: string,
    description: string,
}
const FetchAxios = () => {

    const [data, setData] = useState<Posts[] | null>(null)

    // const _getData = () => {
    //    const data = fetch("https://jsonplaceholder.typicode.com/posts")

    //    data.then(res => res.json())
    //    .then(data => setData(data))
    //    .catch(err => console.log(err))
    // }

    // useEffect(() => {
    //     _getData()
    // }, [])

    useEffect(() => {
        console.log("Effect runs");
        // return () => console.log("Cleanup runs");
      }, []);

     return (
        <div>
            <h1>Fetch Axios</h1>
            {data && data.map((item) => (
                <div className='bg-red-500' key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    )
}


export default FetchAxios;