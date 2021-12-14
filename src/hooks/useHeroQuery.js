import { useStaticQuery, graphql } from "gatsby"

const Data = () => {
  const {
    HeroBG,
    contentJson: { HeroComponent },
  } = useStaticQuery(graphql`
    query HeroQuery {
      contentJson {
        HeroComponent {
          aboutProject
          name
          color
          link
          ourVision
          weUniteArch
        }
      }
      HeroBG: file(relativePath: { eq: "main.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
          id
        }
      }
    }
  `)
  return { HeroComponent, HeroBG }
}
export default Data
