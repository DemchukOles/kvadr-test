import React, { useState } from "react"

import getProcesses from "../hooks/useMenuQuery"

import Process from "./templates/Process"
import Button from "./buttons/Button"

export default function ProcessList() {
  const [selected, setSelected] = useState(null)

  const toggle = i => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }

  const { processes, processListComponent } = getProcesses()
  const { colorComponent, linkComponent, titleComponent, nameComponent } =
    processListComponent

  return (
    <div>
      <section className="container container-small mt-large">
        <h2 className="h3">{titleComponent}</h2>
        <div className="process-list">
          {processes.map((process, i) => {
            return (
              <Process
                key={i}
                toggle={toggle}
                text={process.text}
                number={process.number}
                title={process.title}
                i={i}
                selected={selected}
              />
            )
          })}
        </div>
        <div className="text-center">
          <Button
            name={nameComponent}
            color={colorComponent}
            link={linkComponent}
          />
        </div>
      </section>
    </div>
  )
}
