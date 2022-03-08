import { useState } from 'react'
import styled from 'styled-components'
import BottomBar from '../comps/bottom'
import Navigation from '../comps/navigation'
import styles from '../styles/Home.module.css'


const Cont =styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`

const Intro = styled.div`
  width:100%;
  min-height:50vh;
  display:flex;
  justify-content: center;

`
const LeftCont = styled.div`
  display:flex;
  align-items: center;
  margin-bottom: 10vh;
  margin-right: 2vw;
`

const RigitCont = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
`

const Header = styled.h1`

`

const SubHead = styled.h3`

`

const Text = styled.div`
  font-size: 22px;
  font-weight: 400;
`

export default function Home() {

  return (
    <Cont>
      <Navigation pageName={"Welcome to John Zhou portfolio"} />
      <Intro>
        <LeftCont>
          <Header>Hello,</Header>
        </LeftCont>
        <RigitCont>
          <SubHead>My name is Fangyuan Zhou. ( John Zhou )</SubHead>
          <Text>I am a web/mobile developer.</Text>
        </RigitCont>
      </Intro>
      <BottomBar />  
    </Cont>
  )
}
