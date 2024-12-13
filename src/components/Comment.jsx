import { useQuery } from "@tanstack/react-query"

export default function Comment() {

    const { data: comments, isPending } = useQuery(
        {
            queryKey: ['comments'],
            queryFn: async () => {
                const res = await fetch('https://jsonplaceholder.typicode.com/comments')
                return await res.json()
            }
        }
    )
    if (isPending) return <p>Loading</p>
    return (
        <div>
            {
                comments.map(comment => (
                    <div key={comment.id}>
                        <h3>{comment.name}</h3>
                        <p>{comment.body}</p>
                    </div>
                ))
            }
        </div>
    )
}
