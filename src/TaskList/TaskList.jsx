import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onTaskCompletion }) => {
  return (
    <div>
      <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Tasklist</h2>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onTaskCompletion={onTaskCompletion} />
      ))}
    </div>
  );
};

export default TaskList;
