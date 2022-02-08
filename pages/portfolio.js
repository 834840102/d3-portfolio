import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import Navigation from '../comps/navigation'
import styles from '../styles/Home.module.css'

const Cont =styled.div`

`
const Categories = styled.div`
display: flex;
justify-content: space-around;
align-items:center;
margin-top:2%;
`

const Item = styled.div`

`

const Description = styled.div`
font-size:26px;
font-weight: 400;
`

const ItemImg = styled.img`
  width:300px;
  height:400px;
  margin-top:2%;
`

const ItemImgDiff = styled.img`
width:300px;
height:300px;
`

export default function Project() {
  return (
    <Cont>
      <Navigation pageName={"Project"} />
        <Categories>
            <Item>
                <Description>Frefurnish / Mobile App</Description>
                <ItemImgDiff src='/Frefurnish_round.png'/>
            </Item> 
            <Item>
                <Description>Nutritional Spaces / Website</Description>
                <ItemImg src='/Logo3.png'/>
            </Item>
            <Item>
                <Description>West Point Hotel / WordPress</Description>
                <ItemImg src='Frame.png'/>
            </Item>
        </Categories>
      
    </Cont>
  )
}
