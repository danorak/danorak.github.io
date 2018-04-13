import React from 'react'
import Link from 'gatsby-link'
import Heading from '../components/atoms/typography/Heading';
import Intro from '../components/atoms/typography/Intro';
import A from '../components/atoms/A';
import HorizontalList from '../components/molecules/HorizontalList'

const IndexPage = () => (
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
)

export default IndexPage;
