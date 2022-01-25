import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import Navigation from '../comps/navigation'
import styles from '../styles/Home.module.css'

const Cont =styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items:center;
`



export default function About() {
  return (
    <Cont>
      <Navigation pageName={"About"} />
      <div>
          <img />
          <div>
              <span>John Zhou</span>
              <span>Graduated from BCIT</span>
              <span>Digital Design and Development program</span>
          </div>
      </div>
      <header>Profile</header>
      <div></div>
      <p>Use various design theories and creative toolsets to create customer-focused visual design and websites. Skilled in designing, developing and testing multiple web-based applications incorporating a range of technologies. Goal-oriented Web Designer with a strong commitment to collaboration and solutions-oriented problem-solving.</p>
    </Cont>
  )
}
