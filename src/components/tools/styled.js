// Minimal Styled Component

import React from "react"

export const StyledDiv = ({ style, className }) => ({ children }) => (
  <div className={className} style={style}>
    {children}
  </div>
)

export const StyledUl = ({ style, className }) => ({ children }) => (
  <ul className={className} style={style}>
    {children}
  </ul>
)

export const StyledLi = ({ style, className }) => ({ children }) => (
  <li className={className} style={style}>
    {children}
  </li>
)
