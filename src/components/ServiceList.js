import React from "react"

import getServices from "../hooks/useMenuQuery"

import Button from "./buttons/Button"
import Service from "./templates/Service"

export default function ServiceList() {
  const { services, serviceListComponent } = getServices()
  const { colorComponent, linkComponent, titleComponent, nameComponent } =
    serviceListComponent
  return (
    <section className="mt-large">
      <h2 className="h3">{titleComponent}</h2>
      <div className="servicesBox">
        {services.map((service, i) => (
          <Service service={service} key={i} />
        ))}
      </div>
      <div className="text-center">
        <Button
          name={nameComponent}
          color={colorComponent}
          link={linkComponent}
        />
      </div>
    </section>
  )
}
