import { ITask } from '../../types/ITask';
import Item from './Item';
import style from './List.module.scss'; 

interface Props {
  tasks: ITask[]
  selectTask: (selectedTask: ITask) => void
}

export function List({ tasks, selectTask }: Props) {
  return (
    <aside className={style.taskList}>
      <h2>Day Studies</h2>
      <ul>
        { tasks.map(task => 
          <Item
            key={task.id}
            {...task}
          selectTask={selectTask}
          />
        )}
      </ul>
    </aside>
  )
}
