import React from "react"
import { StyledDiv, StyledUl, StyledLi } from "../tools/styled"
import { Link } from "gatsby"
import styles from "./navBar.module.css"
import WebRing from "../webRing"

const NavBarPlaceHolder = StyledDiv({ className: styles.navBar })
const NavBarMenu = StyledUl({ className: styles.navBarMenus })
const NavBarMenuItemPlaceHolder = StyledLi({ className: styles.navBarMenu })
const NavBarMenuLink = ({ to, children }) => (
  <NavBarMenuItemPlaceHolder>
    <Link
      activeClassName={styles.navBarLinkActive}
      className={styles.navBarLink}
      to={to}
    >
      {children}
    </Link>
  </NavBarMenuItemPlaceHolder>
)

export default function NavBar() {
  return (
    <NavBarPlaceHolder>
      <NavBarMenu>
        <NavBarMenuLink to="/">Home</NavBarMenuLink>
        <NavBarMenuLink to="/talks">My Talks</NavBarMenuLink>
        <NavBarMenuItemPlaceHolder>
          <WebRing />
        </NavBarMenuItemPlaceHolder>
      </NavBarMenu>
    </NavBarPlaceHolder>
  )
}
