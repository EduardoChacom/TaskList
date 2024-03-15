import React, { useState } from 'react';
import TaskList from './TaskList/TaskList';
import CssBaseline from '@mui/material/CssBaseline';
import './styles.css'; // Importa el archivo CSS de estilos

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Hacer la compra', completed: false },
    { id: 2, title: 'Lavar el coche', completed: false },
    { id: 3, title: 'Preparar la cena', completed: true },
    { id: 4, title: 'Hacer ejercicio', completed: false },
    { id: 5, title: 'Estudiar para el examen', completed: true },
    { id: 6, title: 'Limpiar la casa', completed: false },
    { id: 7, title: 'Ir al gimnasio', completed: false },
  ]);

  const [completedCount, setCompletedCount] = useState(
    tasks.filter(task => task.completed).length
  );

  const handleTaskCompletion = (taskId) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      );
      const completedTasks = updatedTasks.filter(task => task.completed).length;
      setCompletedCount(completedTasks);
      return updatedTasks;
    });
  };

  return (
    <>
      <CssBaseline />
      <div className="task-container">
        <h1 style={{ textAlign: 'center', fontSize: '48px', marginBottom: '20px' }}>TaskList</h1>
        <TaskList tasks={tasks} onTaskCompletion={handleTaskCompletion} />
        <h2 style={{ textAlign: 'left', fontSize: '14px', marginTop: '10px' }}>Total de tareas completadas: {completedCount}</h2>
      </div>
    </>
  );
};

export default App;
