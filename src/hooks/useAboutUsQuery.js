import { useStaticQuery, graphql } from "gatsby"

const Data = () => {
  const {
    contentJson: { AboutUsComponent },
  } = useStaticQuery(graphql`
    query AboutUsQuery {
      contentJson {
        AboutUsComponent {
          titleSection
          philosophy
          whatWeDo
          link
          name
          color
          imgDesc {
            childImageSharp {
              gatsbyImageData
            }
          }
          imgMob {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  `)
  return { AboutUsComponent }
}
export default Data
