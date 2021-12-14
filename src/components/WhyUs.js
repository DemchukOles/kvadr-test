import React from "react"

import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"

import getWhyUs from "../hooks/useWhyUsQuery"

export default function WhyUs() {
  const { WhyUsBG, whyUsComponent } = getWhyUs()
  const {
    activity,
    exploitation,
    meters,
    objects,
    objectsHanded,
    squareMeters,
    whyWe,
    years,
    yearsOnMarket,
  } = whyUsComponent

  return (
    <BgImage image={getImage(WhyUsBG)} className="mt-large imgCard">
      <div className="imgOverlay">
        <div className="container container-small ">
          <p className="h2">{activity}</p>
          <div className="imgCard-box">
            <p className="h2">{whyWe}</p>
            <div>
              <div className="imgCard-list">
                <div className="imgCard-item">
                  <span>{years}</span>
                  <span>{yearsOnMarket}</span>
                </div>
                <div className="imgCard-item">
                  <span>{objects}</span>
                  <span>
                    {objectsHanded}
                    <br /> {exploitation}
                  </span>
                </div>
              </div>
              <div className="imgCard-list">
                <div className="imgCard-item">
                  <span>{meters}</span>
                  <span>{squareMeters}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BgImage>
  )
}
