import React from 'react'
import { useEffect } from 'react'
type Props = {
  del:boolean,
  setDel:React.Dispatch<React.SetStateAction<boolean>>
}

const Home = ({del,setDel}: Props) => {
  useEffect(()=>{
    if(!del){
      setDel(true)
    }
  },[del])
  return (
    <div>Home</div>
  )
}

export default Home