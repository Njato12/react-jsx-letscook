import { type } from 'os'
import React from 'react'

type Props = {
    type:string,
    placeholder:string,
    className?:string
}

const Input = ({type,placeholder,className}: Props) => {
  return (
    <input type={type} placeholder={placeholder} className={className}/>
  )
}

export default Input