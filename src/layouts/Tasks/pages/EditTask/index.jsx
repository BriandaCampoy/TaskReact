import React, { useEffect, useState } from 'react'
import TaskForm from '../../../../components/TaskForm'
import { useNavigate, useParams } from 'react-router-dom'
import useTasks from '../../../../hooks/useTask'

/**
 * EditTask Component
 * This component provides a form to edit an existing task.
 *
 * @returns {JSX.Element} The JSX element representing the EditTask component.
 */
const EditTask = () => {
  const {getTask, updateTask} = useTasks();
  const {id}=useParams()
  const [task, setTask] = useState()
  const navigate = useNavigate()

  /**
   * Handles the editing of the task.
   * @param {object} updatedTask - The updated task object.
   */
  const editTask=(updatedTask)=>{
    updateTask(id, updatedTask).then(res=>{
      navigate('../')
    })
  }

  useEffect(()=>{
    getTask(id).then(data=>{
      setTask(data)
    })
  },[])

  if(task===undefined){
    return <>Loading...</>
  }else{
    return (
      <div className="p-5">
      <div className="text-center">
        <h1 className="h4 text-gray-900 mb-4">Edit task</h1>
        <TaskForm actionSubmit={editTask} task={task}/>
      </div>
    </div>
    )

  }

}

export default EditTask