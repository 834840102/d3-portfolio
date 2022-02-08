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

const HeroImg = styled.img`
  width:100%;
  height: 500px;
`

const Text = styled.div`
  width:100%;
  min-height:10vh;
  display: flex;
  justify-content: center;
  align-items:center;
  background-color: #66BAE9;
  font-size: 22px;
  font-weight: 400;
`

export default function Home() {
  return (
    <Cont>
      <Navigation pageName={"Welcome"} />
        <HeroImg src='/workplace.jpg' />
      <Text>Hello,my name is John. This is my portfolio to graduate from BCIT & apply for web/mobile developer.</Text>
    </Cont>
  )
}
