import React from "react";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Button from "../buttons/Button";

export default function Service({ service }) {
  const { imgDesc, imgMob, title, link, number, name, color } = service;

  return (
    <div className="servicesBox-item">
      <div className="projectsBox-desctop">
        <GatsbyImage
          className="servicesBox-item"
          image={getImage(imgDesc)}
          alt="alt"
        />
      </div>
      <div className="projectsBox-mobile">
        <GatsbyImage
          className="servicesBox-item"
          image={getImage(imgMob)}
          alt="alt"
        />
      </div>

      <div className="servicesBox-info">
        <div>
          <span className="servicesBox-number">{number}</span>
          <h5 className="h5">{title}</h5>
        </div>
        <Button name={name} color={color} link={link} />
      </div>
    </div>
  );
}
