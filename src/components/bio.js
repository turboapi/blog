/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Bio = () => {
	const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
					description
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

	// Set these values by editing "siteMetadata" in gatsby-config.js
	const description = data.site.siteMetadata?.description;

	return (
		<div className="bio">
			{description && (
				<p>
					{description}
				</p>
			)}
		</div>
	)
}

export default Bio
