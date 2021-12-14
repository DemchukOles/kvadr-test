import React from "react"

import getProjects from "../hooks/useMenuQuery"

import Button from "./buttons/Button"
import Project from "./templates/Project"

export default function ProjectList() {
  const { projects, projectListComponent } = getProjects()
  const { colorComponent, linkComponent, titleComponent, nameComponent } =
    projectListComponent

  return (
    <section className="container container-small mt-large">
      <h2 className="h3">{titleComponent}</h2>
      <div className="projectsBox">
        {projects.map((project, i) => (
          <Project project={project} key={i} />
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
