import React from "react"

import LogoWhite from "../../images/assets/logo-light.svg"
import LogoBlack from "../../images/assets/logo.svg"

export default function Logo({ header }) {
  return <>{header ? <LogoBlack /> : <LogoWhite />}</>
}
