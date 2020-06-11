import React from "react"
import { Link } from "react-router-dom"

import "./ProjectPage.css"

export default class ProjectPage extends React.Component {
  constructor( props ) {
    super( props )

    this.src = this.props.location.search.split( `=` )[ 1 ]
    this.ref = React.createRef()
  }

  componentDidMount() {
    if (!window.importedProjectInstances) window.importedProjectInstances = {}

    const projects = window.importedProjectInstances
    const { href } = window.location

    if (href in projects) {
      try {
        projects[ href ].mount()
      } catch(err) {
        console.log( err )
      }
    } else {
      const script = document.createElement( `script` )

      script.type = `module`
      script.async = true
      script.src = this.src

      this.ref.current.appendChild( script )
    }
  }

  componentWillUnmount() {
    const projects = window.importedProjectInstances
    const { href } = window.location

    if (href in projects) projects[ href ].unmount()
  }

  render() {

    return <div className="project_page" ref={this.ref}>
      <Link className="project_page-homepage_link" to="/">
        &lt;- back to homepage -
      </Link>
      <div id="project_wrapper" />
    </div>
  }
}