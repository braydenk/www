import React from 'react'
// import { Link } from 'gatsby'
import styled from '@emotion/styled'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Title = styled.h1`
  font-size: 6em;
  font-weight: 300;
  margin: 0;
`

const SubTitle = styled.h3`
  font-size: 1.625em;
  font-weight: 300;
  margin: 0;
`
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Title>Brayden Killeen.</Title>
    <SubTitle>
      Computer Science Graduate from La Trobe University focusing on building
      data-driven web applications.
    </SubTitle>
    {/* <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default IndexPage
