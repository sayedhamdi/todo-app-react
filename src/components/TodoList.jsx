import React, { useState,useEffect } from "react";

import CreateTodo from "./CreateTodo";

import Todos from "./Todos";


export class TodoList1 extends React.Component{
    constructor(props){
        super();
        this.state = {
            text: "",
            todos: [{ 
                id:1,
                text: "Learn React",
                done: false
            }]
        }
        this.handleDone = this.handleDone.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(e){
        this.setState({text: e.target.value })
    }
    handleClick (e){
        this.setState({todos: [...this.state.todos,{text: this.state.text,done:false,id:this.state.todos.length+1 }] })
        this.setState({text:"" })
    }
    handleDone(id){
        let newList = this.state.todos.map(todo=>todo.id === id ? {...todo,done:!todo.done} : todo)
        this.setState({ todos: newList})
    }

    render(){
        return (
            <div>
                <h1>Todo List</h1>
                <CreateTodo  handleChange={this.handleChange} handleClick={this.handleClick} text={this.state.text} />
                <Todos handleDone = {this.handleDone} todos={this.state.todos}/>
            </div>
        )
    }
}

export default function TodoList(){
    const [text,setText] = useState("");
    const [todos,setTodos] = useState([])
    // cdmount 
    useEffect(()=>{
        console.log("fel use effect")  
    },[])
    // cdupdate
    useEffect(()=>{
        
    },[text])

    /// CDmount + didupdate
    useEffect(()=>{
        console.log("fel use effect")
    })

    function handleClick (){
        let newTodo = { 
                        text:text,
                        done:false,
                        id:todos.length+1 
                    }
        setTodos([...todos,newTodo])
        setText("")
    }

    function handleChange(e){
        setText(e.target.value)
    }

    function handleDone(id){
        let newList = todos.map(todo=>todo.id === id ? {...todo,done:!todo.done} : todo)
        setTodos(newList)
    }

    function handleDelete(id){
        console.log(id)
        setTodos([...todos.filter(todo=>todo.id !== id)])
    }
    return (
        <div>
            <h1>Todo List</h1>
            done : {todos.reduce((total,todo)=>todo.done ? total+1 : total,0)}
            <CreateTodo text={text} handleChange={handleChange} handleClick={handleClick}/>
            <Todos todos={todos} handleDone={handleDone} handleDelete={handleDelete}/>
        </div>
    )
}