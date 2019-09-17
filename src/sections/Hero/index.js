import React from "react"

import Header from "../../components/Header/index"
import Layout from "../../components/layout"

import heroStyles from "./index.module.scss"
import bgImage from "../../images/bg.jpg"
import GithubLogo from "../../vectors/github.svg"
import NPMLogo from "../../vectors/npm.svg"

const Hero = () => (
  <section
    className={heroStyles.hero}
    style={{ backgroundImage: `url(${bgImage})` }}
  >
    <div className={heroStyles.mask}>
      <Header />
      <Layout>
        <div className={heroStyles.row}>
          <div className={heroStyles.left}>
            <h2>A command line app that tracks your time</h2>
            <div className={heroStyles.links}>
              <a
                href="https://github.com/ridvankaradag/tracli-terminal"
                target="_blank"
              >
                <GithubLogo />
              </a>
              <a
                href="https://www.npmjs.com/package/tracli-terminal"
                target="_blank"
              >
                <NPMLogo />
              </a>
            </div>
          </div>
          <div className={heroStyles.right}>
            <div className={heroStyles.terminal}>
              <p className={heroStyles.terminal__command}>$ tracli status</p>
              <p className={heroStyles.terminal__task}>
                Task: 1 | Do Something
              </p>
              <p className={heroStyles.terminal__date}>
                Last activity:{" "}
                <span className={heroStyles.terminal__status}>START</span> on{" "}
                {`${new Date().toDateString()} ${new Date().toLocaleTimeString()}`}
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  </section>
)

export default Hero
