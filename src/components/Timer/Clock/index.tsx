import style from './Clock.module.scss';

interface Props {
  time: number | undefined
}

export default function Clock({ time = 0 }: Props) {
  const minutes = Math.floor(time / 60)
  const seconds = time % 60
  
  const [leftMinute, rightMinute] = String(minutes).padStart(2, '0')
  const [leftSecond, rightSecond] = String(seconds).padStart(2, '0')

  return (
    <>
      <span className={style.clockNumber}>{leftMinute}</span>
      <span className={style.clockNumber}>{rightMinute}</span>
      <span className={style.clockDivider}>:</span>
      <span className={style.clockNumber}>{leftSecond}</span>
      <span className={style.clockNumber}>{rightSecond}</span>
    </>
  )
}