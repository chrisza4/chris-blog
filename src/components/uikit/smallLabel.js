import React from "react"

const SmallLabel = props => {
  const style = {
    fontSize: 12,
    color: "silver",
    display: "inline",
    ...props.style,
  }

  return <div style={style}>{props.children}</div>
}

export default SmallLabel
