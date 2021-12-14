import React from "react"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"

import getStartNewProject from "../hooks/useStartNewProjectQuery"
import Button from "./buttons/Button"

export default function StartNewProject() {
  const { StartNewProjectBg, StartNewProjectComponent } = getStartNewProject()
  const { startNewProject, link, name, color } = StartNewProjectComponent
  return (
    <div>
      <BgImage className="qqq" image={getImage(StartNewProjectBg)}>
        <section className="bgImgSection imgOverlay d-flex mt-large">
          <div className="container">
            <h2 className="h3">{startNewProject}</h2>
            <Button name={name} color={color} link={link} />
          </div>
        </section>
      </BgImage>
    </div>
  )
}
