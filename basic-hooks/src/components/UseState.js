
import React, { useContext, useState,useEffect } from 'react'
import {ChangeTheme} from '../App'
import '../App.css'

function UseState() {
const theme = useContext(ChangeTheme)
const [content,setContent]=useState("")
const [like,setLike]=useState(0)
const style = {
    backgroundColor:theme?"grey":"black",
    color:theme?"black":"white",
    padding:"2rem",
    margin:"2rem"
   
}
const likeIncrease=()=>{
    setLike(like+1)
}
useEffect(()=>{
    alert("Change button clicked")
  },[content])
const write=()=>{
    if(content===""){
    setContent(" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus atque excepturi similique dignissimos corrupti saepe, maxime eligendi possimus illum ratione aliquid esse dolorem quidem consequatur pariatur facilis placeat fugit ullam sed dolor cupiditate. Aliquid nobis quia vel rerum at architecto esse, blanditiis neque vero optio error provident tenetur officia ut. Repellat illo est, sint libero ducimus, itaque reprehenderit optio dignissimos nemo magnam nam ipsa consectetur?")
    }
    else{
        setContent("")
    }
}

  return (<>
  
    <div style={style} id="display">
      <button onClick={write}>Content</button>
     
      <h2>{content}</h2>
      <button onClick={likeIncrease}>Like</button>
      <h2>{like}</h2>
    </div>
    </>
  )
}

export default UseState

