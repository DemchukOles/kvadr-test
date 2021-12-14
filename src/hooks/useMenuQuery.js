import { useStaticQuery, graphql } from "gatsby"

const Data = () => {
  const {
    contentJson: {
      menu,
      langList,
      projects,
      processes,
      services,
      processListComponent,
      projectListComponent,
      serviceListComponent,
    },
  } = useStaticQuery(graphql`
    query MenuQuery {
      contentJson {
        menu {
          name
          count
          link
        }
        langList {
          link
          name
        }
        serviceListComponent {
          colorComponent
          linkComponent
          nameComponent
          titleComponent
        }
        services {
          color
          link
          name
          number
          title
          imgDesc {
            childImageSharp {
              gatsbyImageData
            }
          }
          imgMob {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        processListComponent {
          colorComponent
          linkComponent
          titleComponent
          nameComponent
        }
        processes {
          number
          text
          title
        }
        projectListComponent {
          colorComponent
          linkComponent
          titleComponent
          nameComponent
        }
        projects {
          date
          address
          link
          title
          name
          color
          img {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)
  return {
    menu,
    langList,
    projects,
    processes,
    services,
    processListComponent,
    projectListComponent,
    serviceListComponent,
  }
}
export default Data
