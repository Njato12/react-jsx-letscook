import React from 'react'
import IconSearch from '../../icon/IconSearch'
import Input from '../input/Input'
import './searchBar.scss'
type Props = {}

const SearchBar = (props: Props) => {
  return (
    <div className='search'>
        <IconSearch/>
        <Input type='text' className='input_none' placeholder='email'/>
    </div>
  )
}

export default SearchBar