import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import theme from './components/common/theme';
import Heading from './components/atoms/typography/Heading';
import Intro from './components/atoms/typography/Intro';
import A from './components/atoms/A';
import HorizontalList from './components/molecules/HorizontalList';
import {Flex, Box} from 'grid-styled';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Libre+Baskerville|Libre+Franklin')
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Flex>
          
            <main>
            <Box mx={[ 4,4,6]} my={4}>
              <section>
                <Heading>Hello, you.</Heading>
              </section>
            </Box>
            <Box mx={[4,4,6]} my={4}>
              <section>
                <p>
                  <Intro>I’m Dan Jones. I'm a designer and developer based in Sheffield, UK.</Intro><br />
                  <Intro>I’m currently building Capital One UK’s design system, and finding ways to bring design and engineering closer together.</Intro>
                </p>
              </section>
            </Box>
            <Box mx={[4,4,6]} mt={6} mb={4}>
              <section>
                <HorizontalList>
                  <A href="#">Twitter.</A>
                  <A href="#">LinkedIn.</A>
                  <A href="#">Email😔.</A>
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
