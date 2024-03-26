/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
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
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <>
      <div>
        <p>
          To get updates, provide your{" "}
          <Link to="/contact/"> email address</Link> here:
        </p>
      </div>
      <div className="bio">
        {/* <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      /> */}
        {author?.name && (
          <p>
            Written by <strong>{author.name}</strong> {author?.summary || null}
            {` Follow my product updates on `}
            <a href={`https://twitter.com/${social?.twitter || ``}`}>
              {" "}
              twitter
            </a>
          </p>
        )}
      </div>
    </>
  )
}

export default Bio
