import React from "react"

import SEO from "./seo"
import Header from "./header"
import Footer from "./footer"

import "./sanitize.css"
import styles from "./layout.module.css"

export default class Layout extends React.Component {
  state = {
    theme: localStorage.getItem( `theme` ) === `dark` ? styles.isDark : ``,
  }

  changeTheme = isDark => {
    const theme = isDark ? `dark` : ``
    this.setState( { theme:(theme === `dark` ? styles.isDark : ``) } )

    localStorage.setItem( `theme`, theme )
  }

  render = () => <div className={`${styles.layout} ${this.state.theme}`}>
    <SEO title="Home" />
    <Header themeChanger={this.changeTheme}/>
    <main className={`${styles.main} ${this.props.className}`}>{this.props.children}</main>
    <Footer />
  </div>
}