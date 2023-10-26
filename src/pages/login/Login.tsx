import React, { useEffect } from 'react'
import CardLogin from '../../components/display/card/cardLogin/CardLogin'

type Props = {
  del:boolean,
  setDel:React.Dispatch<React.SetStateAction<boolean>>
}

const Login = ({del,setDel}: Props) => {
//   useEffect(() => {
//     del ? setDel(false) : null
// }, [del])
      useEffect(()=>{
        if(del){
          setDel(false)
        }
      },[del])
  return (
    <div>
       <CardLogin textLS='Welcome Back'/>
    </div>
  )
}

export default Login