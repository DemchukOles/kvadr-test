import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import getAboutUs from "../hooks/useAboutUsQuery"
import Button from "./buttons/Button"

export default function AboutUs() {
  const { AboutUsComponent } = getAboutUs()
  const {
    titleSection,
    philosophy,
    whatWeDo,
    imgDesc,
    imgMob,
    link,
    name,
    color,
  } = AboutUsComponent

  return (
    <section className="container container-small mt-large padding-null">
      <h2 className="h3">{titleSection}</h2>
      <div className="artBox">
        <div className="artBox-info">
          <h5 className="h5">{philosophy}</h5>
          <p>{whatWeDo}</p>
          <Button name={name} color={color} link={link} />
        </div>
        <div className="artBox-imgWrap">
          <GatsbyImage
            image={getImage(imgDesc)}
            className="img-desc"
            alt="AboutUs"
          />
          <GatsbyImage
            image={getImage(imgMob)}
            className="img-mob"
            alt="AboutUs"
          />
        </div>
      </div>
    </section>
  )
}
