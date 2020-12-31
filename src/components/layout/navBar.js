import React from "react"
import { StyledDiv } from "../tools/styled"
import styles from "./navBar.module.css"

const NavBarPlaceHolder = StyledDiv({ className: styles.navBar })

export default function NavBar() {
  return <NavBarPlaceHolder>Hi</NavBarPlaceHolder>
}
