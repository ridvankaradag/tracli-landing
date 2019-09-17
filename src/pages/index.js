import React, { Fragment } from "react"

import SEO from "../components/Seo/index"
import Hero from "../sections/Hero/index"
import Docs from "../sections/Docs/index"

const IndexPage = () => (
  <Fragment>
    <SEO title="Home" />
    <Hero />
    <Docs />
  </Fragment>
)

export default IndexPage
