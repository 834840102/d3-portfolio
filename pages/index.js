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
  
`

export default function Home() {
  return (
    <Cont>
      <Navigation pageName={"Welcome"} />

      <HeroImg src=''></HeroImg>
      
      <p>Hello,my name is John. This is my portfolio to graduate from BCIT & apply for web/mobile developer.</p>
    </Cont>
  )
}
