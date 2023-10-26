import React from 'react'
import IconFacebook from '../../icon/IconFacebook'
import IconInsta from '../../icon/IconInsta'
import IconCoeur from '../../icon/IconCoeur'
import IconTwiter from '../../icon/IconTwiter'
import Input from '../../general/input/Input'
import Button from '../../general/button/Button'
import NavbarItems from '../../../pages/utils/NavbarItems'
import IconLogo from '../../icon/IconLogo'
import './footer.scss'

type Props = {}
type NavText = {
  label: string,
  link: string
}
const menuFooter: NavText[] = [
  {
    label: "Home",
    link: "/"
  },
  {
    label: "Recipes",
    link: "/recipes"
  }
  ,
  {
    label: "About us",
    link: "/about"
  }
  ,
  {
    label: "Privacy Policy",
    link: "/privacy"
  }
  ,
  {
    label: "Terms of service",
    link: "/termsofservice"
  }
  ,
  {
    label: "sitemap",
    link: "/sitemap"
  }
  ,
  {
    label: "Contact us",
    link: "/contact"
  }
  ,
  {
    label: "Blog",
    link: "/blog"
  }
  ,
  {
    label: "Career",
    link: "/career"
  }
  ,
  {
    label: "Dinner",
    link: "/dinner"
  }
  ,
  {
    label: "Meals",
    link: "/meals"
  }
  ,
  {
    label: "Ingredients",
    link: "/ingredients"
  }
  ,
  {
    label: "Product vetting",
    link: "/product"
  }
  ,
  {
    label: "Occasions",
    link: "/occasions"
  }
  ,
  {
    label: "KItchen Tips",
    link: "/kitchen"
  }
  ,
  {
    label: "News",
    link: "/news"
  }
  ,
  {
    label: "Feature",
    link: "/feature"
  }
  ,
  {
    label: "Home",
    link: "/"
  }
  ,
  {
    label: "Home",
    link: "/"
  }

]
const Footer = (props: Props) => {
  return (
    <footer>
      <div className="wrap">
        <div className='wrap_footer'>
          <div className="contact_footer">
            <div className="box_rsociaux">
              <h4>Story Connected</h4>
              <div className="card_rsociaux">
                <IconFacebook />
                <IconInsta />
                <IconCoeur />
                <IconTwiter />
              </div>
            </div>
            <div className="newsletter_footer">
              <h4>Subscribe to our Newsetter</h4>
              <Input type='text' placeholder='E-mail' className='input_ladin'/>
              <Button className="btn_sing  btn--orange " text="Subscribe" />
            </div>
          </div>
          <div className=" menus_footer ">
            <NavbarItems items={menuFooter} className="menu_footer" />
          </div>
          <div className="logo_footer">
            <IconLogo />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer