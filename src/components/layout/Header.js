import React, { useState } from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"

import getMenu from "../../hooks/useMenuQuery"

import Close from "../../images/assets/close.svg"
import Logo from "./Logo"

export default function Header() {
  const { menu, langList } = getMenu()

  const [header, setHeader] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setHeader(true)
    } else {
      setHeader(false)
    }
  }
  if (typeof window !== `undefined`) {
    window.addEventListener("scroll", changeBackground)
  }

  const animatedFrom = { opacity: 0, x: "100%" }
  const animateTo = { opacity: 1, x: 0 }

  return (
    <header className={header ? "header active" : "header"} id="sticky">
      <div className="container d-flex">
        <Link to="/" className="logo">
          <Logo header={header} />
        </Link>
        <div className="nav d-flex">
          <ul className="langList">
            {langList.map((item, i) => (
              <li className="langList-item" key={i}>
                <Link to={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
          <button
            className={menuOpen ? "burger-hidden" : "burger"}
            onClick={() => setMenuOpen(true)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className="menu menu-hiden">
            {menu.map((item, i) => (
              <li className="menu-item" key={i}>
                <Link to={item.link}>
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>

          {menuOpen && (
            <motion.div
              animate={animateTo}
              initial={animatedFrom}
              transition={{
                default: { duration: 1 },
              }}
              className={menuOpen ? "wrapMenu open" : "wrapMenu"}
            >
              <button
                className="burger burger-active"
                onClick={() => setMenuOpen(false)}
              >
                <Close />
              </button>
              <ul className="menu">
                {menu.map((item, i) => (
                  <li className="menu-item" key={i}>
                    <Link to={item.link}>
                      <span className="menu-item-count">{item.count}</span>{" "}
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="langList">
                {langList.map((item, i) => (
                  <li className="langList-item" key={i}>
                    <Link to={item.link}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  )
}
