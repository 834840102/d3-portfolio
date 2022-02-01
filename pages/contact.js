import Head from 'next/head'
import styled from 'styled-components'
import Navigation from '../comps/navigation'
import styles from '../styles/Home.module.css'

const Cont =styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items:center;
`



export default function Contact() {
  return (
    <Cont>
      <Navigation pageName={"Contact"} />
        
      <input type={'text'} placeholder='Name'/>
      <input type={'email'} placeholder='Email' />
      <input  type={'textbox'} placeholder='Message' />
    </Cont>
  )
}
