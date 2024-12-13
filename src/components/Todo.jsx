import { useLoaderData } from "react-router-dom"

export default function Todo() {
    const todos = useLoaderData()
    return (
        <div className="grid grid-cols-3 gap-5 container mx-auto ">
            {
                todos.map(todo => <div key={todo.id} className="bg-blue-300 p-5 rounded-lg  shadow-md hover:scale-105 duration-300 hover:bg-blue-400 cursor-pointer">
                    <h3>Todo No:{todo.id}</h3>
                    <h2>Title:{todo.title}</h2>
                    <span>Complitation status:{todo.completed ? "Yes" : "No"} </span>
                </div>)
            }
        </div>
    )
}
