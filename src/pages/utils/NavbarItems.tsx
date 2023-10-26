import React from 'react'
import { Link } from 'react-router-dom'
import './navbarItems.scss'
type Props = {
  items: {
    label: string,
    link: string
  }[],
  className: string
}


const NavbarItems = ({ items, className }: Props) => {
  return (
    <div className={className}>
      {items.map((items, idx) => (<Link to={items.link} className={className} key={idx}>{items.label}</Link>))}
    </div>
  )
}

export default NavbarItems