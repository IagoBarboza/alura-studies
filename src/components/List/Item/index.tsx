import { ITask } from "../../../types/ITask";
import style from './Item.module.scss';

interface Props extends ITask {
  selectTask: (selectedTask: ITask) => void
}

export default function Item({
  id,
  description,
  time,
  selected,
  completed,
  selectTask
}: Props) {
  return (
    <li
      className={`${style.item} ${selected ? style.selectedItem : ''} ${completed ? style.completedItem : ''} `}
      onClick={() => !completed && selectTask({ id, description, time, selected, completed })}
    >
      <h3>{description}</h3>
      <span>{time}</span>
      {completed && <span className={style.completed}></span>}
    </li>
  )
}