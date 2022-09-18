import React from "react";
import { translate } from "../utils/translate";
class Todo1 extends React.Component{
    constructor(props){
        super();
        this.state = {
            text: "",
        }
    }
    componentDidMount(){
        translate(this.props.text, { to: "fr" })
        .then(res=>{
            this.setState({text: res.text})
        })
        .catch(err=>console.error(err))
    }
    
    render(){
        return (
            <li >
               <input type="checkbox" />
               <span>{this.state.text }</span>
            </li>
           )
    }
    
}

export default function Todo({todo,handleDone,handleDelete}){

    return (
        <li >
            <input type="checkbox" checked={todo.done} onChange={()=>handleDone(todo.id)}/>
            <span style={{textDecoration:`${todo.done ? 'line-through': ''}`}}>{todo.text}</span>
            <button onClick={()=>handleDelete(todo.id)}>delete</button>
        </li>
    )
}