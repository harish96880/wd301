import './TaskCard.css'

let TaskCard = (props) => {
    console.log(props);
    return (
        <div className='TaskItem'>
            <h2 className='text-xl font-bold'>{props.title}</h2>
            <p>{props.status}: {props.dueDate}</p>
            <p>Assignee Name: {props.asigneeName}</p>
        </div>
    )
}

export default TaskCard