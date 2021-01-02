import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { FeedbackFish } from '@feedback-fish/react'

const Footer = () => (
	<footer className="footer">
		<Container>
			<Row>
				<Col>
					<p className="copyrightNotice">© Copyright Turbo Technologies Ltd</p>
				</Col>

				<Col>
					<h5>Site</h5>
					<div className="footer-item">
						<a href="https://turboapi.dev/pricing" class="footerLink">Pricing</a>
					</div>
					<div class="footer-item">
						<a href="https://turboapi.dev/about" class="footerLink">About</a>
					</div>
					<div class="footer-item">
						<a href="https://turboapi.dev" class="footerLink">Homepage</a>
					</div>
					<div class="footer-item">
						<a href="https://docs.turboapi.dev" class="footerLink">Documentation</a>
					</div>
					<div class="footer-item">
						<a href="https://status.turboapi.dev" class="footerLink">Status</a>
					</div>
					<FeedbackFish projectId="68c2337b417b9c">
						<a class="footerLink">Feedback</a>
					</FeedbackFish>
				</Col>

				<Col>
					<h5>Social</h5>
					<div class="footer-item">
						<a href="mailto:hello@turboapi.dev" class="footerLink">hello@turboapi.dev</a>
					</div>
					<div class="footer-item"><a href="https://twitter.com/turboapi" class="footerLink">
						Twitter
            </a></div>
					<div class="footer-item"><a href="https://www.indiehackers.com/product/turboapi" className="footerLink">
						IndieHackers
            </a></div>
				</Col>
			</Row>
		</Container>
	</footer >
);

export default Footer;
