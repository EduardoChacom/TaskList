import React, { useState } from 'react';
import TaskList from './TaskList/TaskList';
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
      <div className="app-container">
        <h1 className="app-title">TaskList</h1>
        <TaskList tasks={tasks} onTaskCompletion={handleTaskCompletion} />
        <p className="completed-count">Total de tareas completadas: {completedCount}</p>
      </div>
    </>
  );
};

export default App;
