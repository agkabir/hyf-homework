export default function TodoDetails({ todo }) {
    return (
        <ul>
            <li>Description : { todo.description }</li>
            <li>Deadline : { todo.deadline }</li>
        </ul>
    )
}