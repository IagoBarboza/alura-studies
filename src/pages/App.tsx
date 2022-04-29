import { useState } from 'react';
import { Form } from '../components/Form';
import { List } from '../components/List';
import Timer from '../components/Timer';
import { ITask } from '../types/ITask';
import style from './App.module.scss';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [selectedTask, setSelectedTask] = useState<ITask>()

  function selectTask(selectedTask: ITask) {
    setSelectedTask(selectedTask)
    setTasks(currentTasks => currentTasks.map(task => ({
      ...task,
      selected: task.id === selectedTask.id 
    })))
  }

  function finishSelectedTask() {
    if (selectedTask) {
      setTasks(currentTasks => currentTasks.map(task => {
        if (task.id === selectedTask.id) {
          return {
            ...task,
            selected: false,
            completed: true
          }
        }
        return task
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} selectTask={selectTask} />
      <Timer
        selectedTask={selectedTask}
        finishSelectedTask={finishSelectedTask}
      />
    </div>
  );
}

export default App;
