import React from "react";
import { Button } from "react-bootstrap"
export default function CreateTodo({handleChange, handleClick, text}){

  
    
  return (
        <div>
            <input type="text" onChange={handleChange} value={text}/>
            <Button variant={'danger'} onClick = {handleClick}>add </Button>
        </div>
        );
    
   

}