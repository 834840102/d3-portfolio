import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import Navigation from '../comps/navigation'
import styles from '../styles/Home.module.css'

const Cont =styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Intro = styled.div`
  display: flex;
  align-items:center;
  margin: 2% 0;
`

const MyImg = styled.img`
  width:200px;
  height:200px;
  border-radius: 50%;
  object-fit:cover;
  margin-left:10%;
`

const IntroCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 2%;
`

const IntroText = styled.span`
  font-size:22px;
  font-weight:600;
`

const HeaderTxt = styled.div`
  margin-left: 3vw;
  font-size:32px;
  font-weight: 700;
`

const Line = styled.div`
  width:90%;
  height:1px;
  background-color: black;
  margin-left: 2%;
  margin-top:2%;
  margin-bottom:2%;
`

const Text = styled.div`
  width: 60vw;
  margin-left: 5vw;
  font-size:26px;
  font-weight: 400;
`

export default function About() {
  return (
    <Cont>
      <Navigation pageName={"About"} />
      <Intro>
          <MyImg src='Myself.jpg' />
          <IntroCont>
              <IntroText>John Zhou</IntroText>
              <IntroText>Graduated from BCIT</IntroText>
              <IntroText>Digital Design and Development program</IntroText>
          </IntroCont>
      </Intro>
      <HeaderTxt>Profile</HeaderTxt>
      <Line></Line>
      <Text>Use various design theories and creative toolsets to create customer-focused visual design and websites. Skilled in designing, developing and testing multiple web-based applications incorporating a range of technologies. Goal-oriented Web Designer with a strong commitment to collaboration and solutions-oriented problem-solving.</Text>
    </Cont>
  )
}
