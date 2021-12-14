import React from "react"
import { Link } from "gatsby"

import ArrowLight from "../../images/assets/line-light.svg"
import ArrowDark from "../../images/assets/line-dark.svg"

export default function Button(props) {
  const { name, color, link } = props

  return (
    <Link to={link} className={`button btn-${color}`}>
      <span>{name}</span>
      {color === "light" ? <ArrowDark /> : <ArrowLight />}
    </Link>
  )
}
