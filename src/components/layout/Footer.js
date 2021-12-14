import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import getFooter from "../../hooks/useFooterQuery"

import Face from "../../images/assets/face.svg"
import Inst from "../../images/assets/inst.svg"

export default function Footer() {
  const {
    aboutUs,
    contacts,
    copyright,
    facebook,
    instagram,
    logo,
    project,
    projecting,
  } = getFooter()
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <div className="footer-general">
            <div className="footer-iconList">
              <Link to={instagram.link}>
                <Inst />
              </Link>
              <Link to={facebook.link}>
                <Face />
              </Link>
            </div>
            <Link to="/">
              <GatsbyImage
                className="logo"
                image={getImage(logo.path)}
                alt="footerLogo"
              />
            </Link>
          </div>
          <div className="footer-listBox">
            <ul className="footer-listBox-item">
              <li className="footer-title">
                <Link to={project.link}>{project.title}</Link>
              </li>
              {project.items.map((item, i) => (
                <li key={i}>
                  <Link to={item.link}>{item.title}</Link>
                </li>
              ))}

              <li className="footer-title pt-25">
                <Link to={aboutUs.link}>{aboutUs.title}</Link>
              </li>
              <li className="footer-title footer-mobile-hidden">
                {contacts.title}
              </li>
              <li className="footer-mobile-hidden">
                {contacts.city} <br /> {contacts.street}
              </li>
            </ul>
            <ul className="footer-listBox-item">
              <li className="footer-title">
                <Link to={projecting.link}>{projecting.title}</Link>
              </li>
              {projecting.items.map((item, i) => (
                <li key={i}>
                  <Link to={item.link}>{item.title}</Link>
                </li>
              ))}
            </ul>
            <ul className="footer-listBox-item">
              <li className="footer-title">{contacts.title}</li>
              <li>
                {contacts.city} <br /> {contacts.street}
              </li>
              <li>
                <Link to={contacts.link}>{contacts.phone}</Link>
              </li>
              <div className="footer-iconList">
                <Link to="/">
                  <Inst />
                </Link>
                <Link to="/">
                  <Face />
                </Link>
              </div>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&#169;{copyright.rights}</span>
          <span>{copyright.kvadr}</span>
        </div>
      </div>
      <div className="footer-decorate">
        <span>back to top</span>
      </div>
    </footer>
  )
}
