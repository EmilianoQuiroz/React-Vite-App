import { createContext, useState, useEffect } from "react";
import { task as data } from "../task";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [task, setTask] = useState([]);

  function createTask(tasks) {
    setTask([
      ...task,
      {
        title: tasks.title,
        id: task.length,
        description: tasks.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTask(task.filter((tasks) => tasks.id !== taskId));
  }

  useEffect(() => {
    setTask(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{ task: task, deleteTask: deleteTask, createTask: createTask }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
