import React from 'react'
import './button.scss'
type Props={
    className:string,
    text:string,
    onClick?:any
}
const Button = ({className,text,onClick}: Props) => {
  return (
    <button onClick={onClick} className={className}>{text}</button>
  )
}

export default Button