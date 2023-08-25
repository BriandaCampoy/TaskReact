import React from 'react';
import TaskForm from '../../../../components/TaskForm';
import useTasks from '../../../../hooks/useTask';
import { useNavigate } from 'react-router-dom';

const AddTask = () => {
  const {createTask} = useTasks();
  const navigate = useNavigate()

  const handleCreateTask =(newTask)=>{
    createTask(newTask).then(res=>{
      navigate('/task')
    });
  }

  return (
    <div className="p-5">
      <div className="text-center">
        <h1 className="h4 text-gray-900 mb-4">Add task</h1>
        <TaskForm actionSubmit={handleCreateTask} />
      </div>
    </div>
  );
};

export default AddTask;
