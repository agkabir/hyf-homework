export default function TodoDetails({ description, deadline }) {
    return (
        <ul>
            <li>Description : { description }</li>
            <li>Deadline : { deadline }</li>
        </ul>
    )
}