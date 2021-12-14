import * as React from "react"

import Hero from "../components/Hero"
import ProjectList from "../components/ProjectList"
import Layout from "../components/layout/Layout"
import ServiceList from "../components/ServiceList"
import ProcessList from "../components/ProcessList"
import WhyUs from "../components/WhyUs"
import BgColorSection from "../components/BgColorSection"
import AboutUs from "../components/AboutUs"
import StartNewProject from "../components/StartNewProject"

import "../styles/main.scss"

const IndexPage = () => (
  <>
    <Layout>
      <Hero />
      <ProjectList />
      <ServiceList />
      <ProcessList />
      <WhyUs />
      <BgColorSection />
      <AboutUs />
      <StartNewProject />
    </Layout>
  </>
)

export default IndexPage
