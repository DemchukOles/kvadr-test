import { useStaticQuery, graphql } from "gatsby"

const Data = () => {
  const {
    contentJson: {
      footer: {
        aboutUs,
        contacts,
        copyright,
        facebook,
        instagram,
        project,
        projecting,
        logo,
      },
    },
  } = useStaticQuery(graphql`
    query FooterQuery {
      contentJson {
        footer {
          aboutUs {
            link
            title
          }
          contacts {
            city
            link
            street
            link
            phone
            title
          }
          logo {
            link
            path {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          copyright {
            rights
            kvadr
          }
          facebook {
            link
          }
          instagram {
            link
          }
          project {
            items {
              link
              title
            }
            link
            title
          }
          projecting {
            items {
              link
              title
            }
            link
            title
          }
        }
      }
    }
  `)
  return {
    aboutUs,
    contacts,
    copyright,
    facebook,
    instagram,
    logo,

    project,
    projecting,
  }
}
export default Data
