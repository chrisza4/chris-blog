import React, { useState } from "react"
import { StyledDiv, StyledUl, StyledLi } from "../tools/styled"
import { Link } from "gatsby"
import * as styles from "./navBar.module.css"
import WebRing from "../webRing"
import useIsMobile from "../../hooks/useIsMobile"
import { AnimatePresence, motion } from "framer-motion"
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

const BurgerMenu = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className={styles.shadow}
    >
      {children}
    </motion.div>
  )
}
const BurgerMenuBackground = StyledDiv({ className: styles.burgerMenu })
const BurgerMenuItem = StyledDiv({ className: styles.burgerMenuItem })
const BurgerMenuOverlay = StyledDiv({ className: styles.overlay })

const menus = [
  { to: "/", title: "Home" },
  { to: "/enneagram", title: "Enneagram" },
  { to: "/course", title: "Humanistic Architecture Course" },
  { to: "/techlead-course", title: "Tech Leadership Course" },
  { to: "/large-scale-course", title: "Design Large Scale System Course" },
  { to: "/otherCourses", title: "Other Courses" },
  { to: "/talks", title: "Talks" },
]

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div onClick={() => setIsOpen(!isOpen)}>
      <Hamburgur toggled={isOpen} />
      {isOpen && (
        <AnimatePresence>
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
        </AnimatePresence>
      )}
    </div>
  )
}

export default function NavBar() {
  const isMobile = useIsMobile()
  if (isMobile) {
    return (
      <NavBarPlaceHolder>
        <div className={styles.navBarMenu}>
          <HamburgerMenu />
        </div>
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
