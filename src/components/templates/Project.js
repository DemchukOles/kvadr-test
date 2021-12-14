import React from "react"

import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Button from "../buttons/Button"

export default function Project({ project, i }) {
  const { img, title, link, address, date, name, color } = project

  return (
    <div key={i} className="projectsBox-item">
      <div className="projectsBox-imgWrap">
        <GatsbyImage
          className="projectsBox-imgWrap-img"
          image={getImage(img)}
          alt="alt"
        />
        <div className="projectsBox-overlay">
          <Button name={name} color={color} link={link} />
        </div>
      </div>
      <div className="projectsBox-info">
        <div className="d-flex">
          <h5 className="h5">{title}</h5>
          <span>{date}</span>
        </div>
        <p>{address}</p>
      </div>
    </div>
  )
}
