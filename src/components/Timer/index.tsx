import { useEffect, useState } from "react";
import { timeToSeconds } from "../../common/utils/time";
import { ITask } from "../../types/ITask";
import { Button } from "../Form/Button";
import Clock from "./Clock";
import style from './Timer.module.scss';

interface Props {
  selectedTask: ITask | undefined
  finishSelectedTask: () => void
}

export default function Timer({ selectedTask, finishSelectedTask } : Props){

  const [time, setTime] = useState(0)

  useEffect(() => {
    if (selectedTask) setTime(timeToSeconds(selectedTask.time))
  }, [selectedTask])

  function countDown(counter: number = 0) {
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1)
        return countDown(counter - 1)
      }
      finishSelectedTask()
    }, 1000)
  }

  return (
    <div className={style.timer}>
      <p className={style.title}>Pick a card and start the timer</p>
      <div className={style.clockWrapper}>
        <Clock time={time}></Clock>
      </div>
      <Button onClick={() => countDown(time)}>
        Start!
      </Button>
    </div>
  )
}