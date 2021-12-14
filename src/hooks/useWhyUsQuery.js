import { useStaticQuery, graphql } from "gatsby"

const Data = () => {
  const {
    WhyUsBG,
    contentJson: { whyUsComponent },
  } = useStaticQuery(graphql`
    query whyUsQuery {
      contentJson {
        whyUsComponent {
          activity
          exploitation
          meters
          objects
          objectsHanded
          squareMeters
          whyWe
          years
          yearsOnMarket
        }
      }
      WhyUsBG: file(relativePath: { eq: "whyus.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
          id
        }
      }
    }
  `)
  return { whyUsComponent, WhyUsBG }
}
export default Data
