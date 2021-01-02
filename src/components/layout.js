import React from "react"
import { Link } from "gatsby"
import Footer from "./footer"
import logo from './../../content/assets/transparent-logo.png';
import { Container, Row, Col } from "react-bootstrap";

const Layout = ({ location, title, children }) => {
	const rootPath = `${__PATH_PREFIX__}/`
	const isRootPath = location.pathname === rootPath
	let header

	if (isRootPath) {
		header = (
			<Container>
				<Row>
					<Col><h1 className="main-heading">
						<img src={logo} alt="TurboAPI logo" className="logo" />
						<Link to="/">{title}</Link>
					</h1></Col>
					<Col>
						<a class="header-button" href="https://turboapi.dev/">Get Started for Free</a>
					</Col>
				</Row>
			</Container>
		)
	} else {
		header = (
			<>
				<div>
					<Link className="header-link-home" to="/">
						<img src={logo} alt="TurboAPI logo" className="logo" />
						{title}
					</Link>
				</div>
				<div>
					<a href="https://turboapi.dev/">Get Started for Free</a>
				</div>
			</>
		)
	}

	return (
		<div className="global-wrapper" data-is-root-path={isRootPath}>
			<header className="global-header">{header}</header>
			<main>{children}</main>
			<Footer />
		</div>
	)
}

export default Layout
