import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import theme from './components/common/theme';
import Heading from './components/atoms/typography/Heading';
import Intro from './components/atoms/typography/Intro';
import A from './components/atoms/A';
import HorizontalList from './components/molecules/HorizontalList';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Libre+Baskerville|Libre+Franklin')
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
            <section>
              <Heading>Hello, you.</Heading>
            </section>
            <section>
              <Intro>I’m Dan, a designer and developer based in Sheffield, UK.</Intro>
              <Intro>I’m currently building Capital One UK’s design system, and trying to find ways to bring design and engineering closer together.</Intro>
            </section>
            <section>
              <HorizontalList>
                <A href="#">Twitter.</A>
                <A href="#">LinkedIn.</A>
                <A href="#">Email😔.</A>
              </HorizontalList>
            </section>
          </div>
      </ThemeProvider>
    );
  }
}

export default App;
