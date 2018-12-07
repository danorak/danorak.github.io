import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import theme from './components/common/theme';
import Heading from './components/atoms/typography/Heading';
import Intro from './components/atoms/typography/Intro';
import A from './components/atoms/A';
import HorizontalList, {ItemWrapper} from './components/molecules/HorizontalList';
import {Flex, Box} from 'grid-styled';
import { width } from 'styled-system';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Libre+Baskerville|Libre+Franklin')
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Flex>
          <main>
            <Box mx={[ 5,6,7]} mt={7} mb={1}>
              <section>
                <Heading>Hello, you.</Heading>
              </section>
            </Box>
            <Box mx={[5,6,7]} my={[1,2]} width={[0.8, 0.65]}>
              <section>
                <p>
                  <Intro>I’m Dan Jones. I'm a creative technologist based in Sheffield, UK.</Intro><br />
                  <Intro>Right now I'm working as a Creative Director for the BBC in Salford, looking at how we can evolve to meet the needs of our future audiences.</Intro>
                  <br />
                  <Intro>I'm not looking for a new role right now, but I'm always keen to chat about ways of helping design, product & engineering work more harmoniously. <br />Get in touch!</Intro>  
                </p>
              </section>
            </Box>
            <Box mx={[5,6,7]} mt={1} mb={[2,4]}>
              <section>
                
                <HorizontalList>
                  <ItemWrapper>
                    <A href="https://twitter.com/danorak">Twitter.</A>
                  </ItemWrapper>
                  <ItemWrapper>
                    <A href="https://www.linkedin.com/in/uxdanjones/">LinkedIn.</A>
                  </ItemWrapper>
                  <ItemWrapper>
                    <A href="mailto:hello@danjones.website">Email.</A>
                  </ItemWrapper>
                </HorizontalList>
              </section>
            </Box>
            </main>
        </Flex>
      </ThemeProvider>
    );
  }
}

export default App;
