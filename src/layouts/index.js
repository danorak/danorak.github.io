import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'; 
import theme from '../components/common/theme';
import { color } from 'styled-system';
import './index.css';

const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  height: 100vh;
`;

const MainContainer = styled.div`
  ${color};
  height: 100vh;
  width: 100vw;
`

MainContainer.defaultProps = {
  bg: 'white'
}

const TemplateWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet
        title="Dan Jones. An interaction designer."
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <LayoutContainer>
        <div style={{gridColumn: 2, gridRow: 2}}>
          {children()}
        </div>
      </LayoutContainer>
    </div>
  </ThemeProvider>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
