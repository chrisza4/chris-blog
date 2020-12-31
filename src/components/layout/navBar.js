import React from "react"
import { StyledDiv, StyledUl, StyledLi } from "../tools/styled"
import styles from "./navBar.module.css"

const NavBarPlaceHolder = StyledDiv({ className: styles.navBar })
const NavBarMenu = StyledUl({ className: styles.navBarMenus })
const NavBarMenuItemPlaceHolder = StyledLi({ className: styles.navBarMenu })

export default function NavBar() {
  return (
    <NavBarPlaceHolder>
      <NavBarMenu>
        <NavBarMenuItemPlaceHolder>aaa</NavBarMenuItemPlaceHolder>
        <NavBarMenuItemPlaceHolder>bbb</NavBarMenuItemPlaceHolder>
      </NavBarMenu>
    </NavBarPlaceHolder>
  )
}
