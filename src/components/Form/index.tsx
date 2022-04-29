import React from 'react';
import { ITask } from '../../types/ITask';
import { Button } from './Button';
import style from './Form.module.scss';
import { v4 as uuidv4 } from 'uuid';

export class Form extends React.Component<{
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}> {

  state = {
    description: '',
    time: '00:00'
  }

  addTask(e: React.FormEvent) {
    e.preventDefault();
    this.props.setTasks(currentTasks => [
      ...currentTasks,
      {
        id: uuidv4(),
        ...this.state,
        selected: false,
        completed: false
      }
    ])
    this.setState({
      description: '',
      time: '00:00'
    })
  }

  render() {
    return (
      <form className={style.newTask} onSubmit={this.addTask.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="description">
            Add a new study
          </label>
          <input
            id="description"
            name="description"
            type="text"
            value={this.state.description}
            onChange={e => this.setState({...this.state, description: e.target.value })}
            placeholder="What do you wanna study?"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="time">
            Time
          </label>
          <input
            id="time"
            name="time"
            type="time"
            step="1"
            value={this.state.time}
            onChange={e => this.setState({...this.state, time: e.target.value })}
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Button type='submit'>
          Add
        </Button>
      </form>
    )
  }
}