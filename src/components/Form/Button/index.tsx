import React from 'react';
import style from './Button.module.scss';

export class Button extends React.Component<{
  children: any,
  type?: 'button' | 'submit' | 'reset' | undefined,
  onClick?: () => void 
}> {
  render() {
    const { type = 'button' } = this.props

    return (
      <button
        className={style.button}
        type={type}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    )
  }
}