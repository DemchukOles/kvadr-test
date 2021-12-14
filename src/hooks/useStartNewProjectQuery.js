import { useStaticQuery, graphql } from "gatsby"

const Data = () => {
  const {
    StartNewProjectBg,
    contentJson: { StartNewProjectComponent },
  } = useStaticQuery(graphql`
    query StartNewProjectQuery {
      contentJson {
        StartNewProjectComponent {
          startNewProject
          link
          name
          color
        }
      }
      StartNewProjectBg: file(relativePath: { eq: "lastbg.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
          id
        }
      }
    }
  `)
  return { StartNewProjectComponent, StartNewProjectBg }
}
export default Data
