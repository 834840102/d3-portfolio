import Head from 'next/head'
import styled from 'styled-components'
import Navigation from '../comps/navigation'
import styles from '../styles/Home.module.css'

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items:center;
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
`

const IconCont = styled.div`
display: flex;
padding: 30px 0;
`

const Icons = styled.img`
  width:${props=>props.w};
  height:50px;
  padding: 0 20px;
`

const SignText = styled.div`
  font-size:30px;
  font-weight400;
`

export default function Contact() {
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
      <InputCont>
        <Des>Message:</Des>
        <InputBox type={'textbox'} placeholder='Message' />
      </InputCont>
      <IconCont>
      <Icons src='/Facebook_icon.png' w={50}/>
      <Icons src='/LinkedIn_icon_circle.svg.png' w={50}/>
      <Icons src='/Twitter-logo.png' w={56}/>
      <SignText>© 2022 John Zhou</SignText>
      </IconCont>
    </Cont>
  )
}
