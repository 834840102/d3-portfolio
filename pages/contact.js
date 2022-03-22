import { useRouter } from 'next/router'
import styled from 'styled-components'
import BottomBar from '../comps/bottom'
import Navigation from '../comps/navigation'
import styles from '../styles/Home.module.css'

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items:center;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`

const InputCont = styled.div`
  
`

const Des = styled.p`

`

const Input = styled.input`
  width: 700px;
  height: 80px;
`

const InputBox = styled.input`
  width: 700px;
  height: 220px;
  margin-bottom: 2%;
`

export default function Contact() {

  const r = useRouter()
  return (
    <Cont>
      <Navigation pageName={"Contact"} />
      <InputCont>
        <Des>Name:</Des>
        <Input type={'text'} placeholder='Name' />
      </InputCont>
      <InputCont>
        <Des>Email:</Des>
        <Input type={'email'} placeholder='Email' />
      </InputCont>
    </Cont>
  )
}
//can delete after the email button