import React, { useEffect, useState } from 'react';
import useTasks from '../../hooks/useTask';

const DoneCheck = ({ id, doneStatus }) => {
  const { updateTask } = useTasks();
  const [done, setDone] = useState(doneStatus);

  const onDone = (event) => {
    event.stopPropagation();
    if (!done) {
      setDone(true);
      const taskDone={
        done: true
      }
      updateTask(id, taskDone).then((res) => {});
    }
  };

  return (
    <>
      {done && (
        <div onClick={onDone} className="col-auto btn pointer">
          <i
            className="fa-solid fa-check fa-2xl"
            style={{ color: '#4dff00' }}
          ></i>
        </div>
      )}
      {done === false && (
        <div onClick={onDone} className="col-auto btn pointer">
          <i className="fa-solid fa-check fa-2xl"></i>
        </div>
      )}
    </>
  );
};

export default DoneCheck;
