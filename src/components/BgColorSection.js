import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function BgColorSection() {
  return (
    <section className="bgColorSection">
      <div className="container">
        <h2 className="h3">Клієнти</h2>
        <ul className="logoList">
          <li>
            <StaticImage src="../images/riel_logo.png" alt="alt" />
          </li>
          <li>
            <StaticImage src="../images/avalon_logo.png" alt="alt" />
          </li>
          <li>
            <StaticImage
              src="../images/innovation-development_logo.png"
              alt="alt"
            />
          </li>
        </ul>
      </div>
    </section>
  )
}
