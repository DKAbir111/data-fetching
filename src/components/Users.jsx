import { useState, useEffect } from "react";
import axios from "axios";

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetching the given data using Axios
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => setUsers(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="container mx-auto p-5">
            <h1 className="text-3xl font-bold mb-5 text-center">User Information</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {users.map(user => (
                    <div
                        key={user.id}
                        className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        <h2 className="text-xl font-semibold text-blue-600 mb-2">{user.name}</h2>
                        <p className="text-gray-600">
                            <span className="font-bold">Username:</span> {user.username}
                        </p>
                        <p className="text-gray-600">
                            <span className="font-bold">Email:</span> {user.email}
                        </p>
                        <p className="text-gray-600">
                            <span className="font-bold">Phone:</span> {user.phone}
                        </p>
                        <p className="text-gray-600">
                            <span className="font-bold">Website:</span> <a href={`https://${user.website}`} className="text-blue-500 hover:underline">{user.website}</a>
                        </p>
                        <div className="mt-4">
                            <h3 className="font-semibold">Address:</h3>
                            <p className="text-gray-600">{user.address.suite}, {user.address.street}</p>
                            <p className="text-gray-600">{user.address.city}, {user.address.zipcode}</p>
                        </div>
                        <div className="mt-4">
                            <h3 className="font-semibold">Company:</h3>
                            <p className="text-gray-600">{user.company.name}</p>
                            <p className="text-gray-600 italic">"{user.company.catchPhrase}"</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
