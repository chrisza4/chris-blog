// Minimal Styled Component

import React from "react"

export const StyledDiv = ({ style, className }) => ({ children }) => (
  <div className={className} style={style}>
    {children}
  </div>
)
