import Todo from "./Todo";

export default function Todos({todos,handleDone,handleDelete}){
    return (
        <ul>
            {todos.map((todo,index) => <Todo handleDelete={handleDelete} handleDone={handleDone} key={index} todo={todo}  />)}
        </ul>
    )
}