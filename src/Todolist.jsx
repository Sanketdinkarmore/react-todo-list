import React, { useState } from 'react'

export default function Todolist() {
  const [tasks,setTask]=useState(["walk","Eat breakfast","take shower","walk the dog"]);
  const [NewTask,setNewTask]=useState("");

  function handleInputchange(event){
    setNewTask(event.target.value);
  }
  function addTask(){
    if(NewTask.trim()!=="")
    setTask(t=>[...t,NewTask])
    setNewTask('');

  }
  function deleteTask(index){
    const updatedtask=tasks.filter((_element,i)=>i!==index)
    setTask(updatedtask);
  }
  function moveTaskup(index){
   if (index>0){
    const updatedTasks=[...tasks];
    [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]];
    setTask(updatedTasks);
   }

  }
  function moveTaskdown(index){
    if(index<tasks.length-1){
      const updatetaskdown=[...tasks];
      [updatetaskdown[index],updatetaskdown[index+1]]=[updatetaskdown[index+1],updatetaskdown[index]];
      setTask(updatetaskdown);
    }

  }
  
  



  return (
    <div className='to-do-list'>
      <h1>To-Do-List</h1>
      <div>
        <input type='text' placeholder='enter the task...' value={NewTask} onChange={handleInputchange} />
        <button className='add-btn' onClick={addTask}> ADD </button>
      </div>
      <ol>{tasks.map((task,index)=><li key={index}>
        <span className='text'>{task}</span>
        <button className='delete-btn' onClick={()=>deleteTask(index)}>Delete</button>
        <button className='move-btn' onClick={()=>moveTaskup(index)}>👆</button>
        <button className='move-btn' onClick={()=>moveTaskdown(index)}>👇</button>
        
        
        </li>)}
      
      
      
      </ol>
    </div>
    
  )
}
