import { useState } from 'react'
import styled from 'styled-components'
import BottomBar from '../comps/bottom'
import Navigation from '../comps/navigation'
import styles from '../styles/Home.module.css'

const Cont =styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items:center;
  background-image: url('/ME.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`

const Down = styled.div`
  width:100vw;
  height: 100px;
  background-color: #fff;
  opacity: 0.8;
`

const Content = styled.div`

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

  const [open, setOpen] = useState(false)
  return (
    <Cont>
      <Navigation pageName={"Welcome"} />
      <Down onClick={()=>setOpen(!open)}></Down>
      {open ? (
        <Content>
          <Text>Hello,my name is John. This is my portfolio to graduate from BCIT & apply for web/mobile developer.</Text>
          <BottomBar /> 
        </Content>
      ) : (
      <></>
      )
    }
      
    </Cont>
  )
}
