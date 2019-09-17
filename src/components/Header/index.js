import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/Layout/index"

import headerStyles from "./index.module.scss"
import Logo from "../../vectors/logo.svg"

const Header = () => (
  <header className={headerStyles.header}>
    <Layout>
      <nav className={headerStyles.nav}>
        <Link to="/" className={headerStyles.logo}>
          <Logo />
        </Link>
        <Link to="#documentation">Documentation</Link>
      </nav>
    </Layout>
  </header>
)

export default Header
