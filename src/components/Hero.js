import React from "react"

import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"

import getHero from "../hooks/useHeroQuery"
import Button from "./buttons/Button"

export default function Hero() {
  const { HeroComponent, HeroBG } = getHero()
  const { aboutProject, name, color, link, ourVision, weUniteArch } =
    HeroComponent

  return (
    <>
      <BgImage className="hero-bg" image={getImage(HeroBG)}>
        <section className="hero">
          <div className="container">
            <div className="hero-decorate">
              <span>scroll</span>
            </div>
            <div className="hero-box">
              <span className="hero-preTitle">{ourVision}</span>
              <h1 className="h1">{weUniteArch}</h1>
              <p className="hero-description">{aboutProject}</p>
              <Button name={name} color={color} link={link} />
            </div>
          </div>
        </section>
      </BgImage>
      <div className="hero-description hero-movileDescr">{aboutProject}</div>
    </>
  )
}
