import React, { useState } from "react"
import { StyledDiv, StyledUl, StyledLi } from "../tools/styled"
import { Link } from "gatsby"
import * as styles from "./navBar.module.css"
import WebRing from "../webRing"
import useIsMobile from "../../hooks/useIsMobile"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons"
import Hamburgur from "hamburger-react"

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

const BurgerMenu = StyledDiv({ className: styles.shadow })
const BurgerMenuBackground = StyledDiv({ className: styles.burgerMenu })
const BurgerMenuItem = StyledDiv({ className: styles.burgerMenuItem })
const BurgerMenuOverlay = StyledDiv({ className: styles.overlay })

const menus = [
  { to: "/", title: "Home" },
  { to: "/favorite-contents", title: "Favorite Blogs" },
  { to: "/course", title: "Humanistic Architecture Course" },
  { to: "/techlead-course", title: "Tech Leadership Course" },
  { to: "/otherCourses", title: "Other Courses" },
  { to: "/talks", title: "Talks" },
]

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div onClick={() => setIsOpen(!isOpen)}>
      <Hamburgur toggled={isOpen} />
      {isOpen && (
        <BurgerMenu>
          <BurgerMenuBackground>
            {menus.map(m => (
              <BurgerMenuItem key={m.to}>
                <NavBarMenuLink to={m.to}>{m.title}</NavBarMenuLink>
              </BurgerMenuItem>
            ))}
          </BurgerMenuBackground>
          <BurgerMenuOverlay />
        </BurgerMenu>
      )}
    </div>
  )
}

export default function NavBar() {
  const isMobile = useIsMobile()
  if (isMobile) {
    return (
      <NavBarPlaceHolder>
        <NavBarMenuItemPlaceHolder>
          <HamburgerMenu />
        </NavBarMenuItemPlaceHolder>
      </NavBarPlaceHolder>
    )
  }
  return (
    <NavBarPlaceHolder>
      <NavBarMenu>
        {menus.map(m => (
          <NavBarMenuLink to={m.to} key={m.to}>
            {m.title}
          </NavBarMenuLink>
        ))}
        <NavBarMenuItemPlaceHolder>
          <WebRing />
        </NavBarMenuItemPlaceHolder>
      </NavBarMenu>
    </NavBarPlaceHolder>
  )
}
