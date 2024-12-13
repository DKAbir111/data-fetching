import { useEffect, useState } from "react"

export default function Post() {
    const [posts, setPosts] = useState([])
    //load data using fetch
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                setPosts(data)
                console.log(data)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div className="grid grid-cols-3 gap-5 container mx-auto">
            {
                posts.map(post => <div key={post.id} className="bg-slate-300 p-5 rounded-md shadow-lg hover:scale-105 duration-300">

                    <h3 className="text-xl font-semibold">Title:{post.title}</h3>
                    <p>Post:{post.body}</p>

                </div>)
            }
        </div>
    )
}
