import "./App.css";
export const Task = (props) => {
    return( 
    <div className='task' style={{backgroundColor: props.completed ? "green" : "white"}}>
        <h1>{props.taskName}</h1>
        <button className="b1" onClick={() => props.complete(props.id)}>Complete</button>
        <button className="b2" onClick={() => props.deleteTask(props.id)}>X</button>
    </div>
    );
};