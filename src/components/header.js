import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <header>
    <Navbar className="py-4 shadow rounded" bg="light" variant="light" expand="lg" sticky="top">
      <Navbar.Brand href="/"><h3>{siteTitle}</h3></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    </Navbar >
  </header >
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
