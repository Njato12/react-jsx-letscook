import React from 'react'
import './header.scss'
import IconLogo from '../../icon/IconLogo'
import NavbarItems from '../../../pages/utils/NavbarItems'
import SearchBar from '../../general/searchBar/SearchBar'
import Button from '../../general/button/Button'
import { Link } from 'react-router-dom'
type Props = {}
type NavText = {
  label: string,
  link: string
}
const items: NavText[] = [
  {
    label: 'Home',
    link: '/'
  },
  {
    label:'Categorie',
    link:'/'
  },
  {
    label:'Meal Planners',
    link:'/'
  },
  {
    label:'Courses',
    link:'/'
  },
  {
    label:'Abouts Us',
    link:'/abouts'
  },
  {
    label:'Contact',
    link:'/'
  },
]
const Header = (props: Props) => {

  return (
    <header className='navBar'>
      <div className="logo">
        <IconLogo />
      </div>
      <div className="nav">
        <NavbarItems items={items} className='itemNav'/>
      </div>
      <div className="menu_nav">
        <SearchBar />
        <Link to='/login' >
          <Button className="btn_sing btn--orange " text="Login" />
        </Link>
        <Link to='/'>
          <Button className="btn_sing" text="Sing Up" />
        </Link>
      </div>

    </header>
  )
}

export default Header