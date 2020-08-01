import React from 'react'
import PropTypes from 'prop-types'
import Header from './header'

import { Global, css } from '@emotion/core'

const colors = {
  background: '#fff',
  selection: 'rgba(0, 0, 0, 0.99)',
  lightGray: '#dedede',
}

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

  * {
    box-sizing: border-box;
  }

  ::selection {
    text-shadow: none;
    background: ${colors.selection};
    color: ${colors.background};
  }

  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    line-height: 1.5;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-size: 16px;
    background: #fff;
    color: #000;
    font-display: block;
    font-feature-settings: 'calt' 'case' 'rlig';
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    min-height: 100vh;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
    display: flex;
    flex-direction: column;
    max-width: 45rem;
    margin: 0 auto;
    padding: 0 1rem;
  }

  p,
  li {
    letter-spacing: -0.33px;
    font-size: 1.125rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
    font-weight: 600;
    line-height: 1.75;
  }

  ${'' /* h1 {
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 1.25;
    letter-spacing: -0.89px;
  } */}

  h2 {
    font-size: 2rem;
    letter-spacing: -0.69px;
  }

  h3 {
    font-size: 1.5rem;
    letter-spacing: -0.47px;
  }

  h4 {
    font-size: 1.25rem;
    letter-spacing: -0.33px;
  }

  hr {
    border: none;
    border-bottom: 1px solid ${colors.lightGray};
  }
`

const Layout = ({ children }) => (
  <>
    <Global styles={globalStyles} />
    <Header />
    <main>{children}</main>
  </>
)

// const Layout = ({ children }) => {
//   const data = useStaticQuery(graphql`
//     query SiteTitleQuery {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `)

//   return (
//     <>
//       <Header siteTitle={data.site.siteMetadata.title} />
//       <div
//         style={{
//           margin: `0 auto`,
//           maxWidth: 960,
//           padding: `0 1.0875rem 1.45rem`,
//         }}
//       >
//         <main>{children}</main>
//         <footer>
//           © {new Date().getFullYear()}, Built with
//           {` `}
//           <a href="https://www.gatsbyjs.org">Gatsby</a>
//         </footer>
//       </div>
//     </>
//   )
// }

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
