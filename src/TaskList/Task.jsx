import React from 'react';
import { Checkbox } from '@mui/material';

const Task = ({ task, onTaskCompletion }) => {
  const handleChange = () => {
    onTaskCompletion(task.id);
  };

  return (
    <div style={{ marginBottom: '10px' }}>
      <Checkbox
        checked={task.completed}
        onChange={handleChange}
        color="primary"
        inputProps={{ 'aria-label': 'checkbox with default color' }}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none', marginLeft: '8px' }}>
        {task.title}
      </span>
    </div>
  );
};

export default Task;
