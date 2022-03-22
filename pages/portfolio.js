import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import BottomBar from '../comps/bottom'
import Navigation from '../comps/navigation'

const Cont =styled.div`
-webkit-touch-callout: none; /* iOS Safari */
-webkit-user-select: none; /* Safari */
-khtml-user-select: none; /* Konqueror HTML */
-moz-user-select: none; /* Old versions of Firefox */
-ms-user-select: none; /* Internet Explorer/Edge */
user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`
const Categories = styled.div`
display: flex;
justify-content: space-around;
align-items:center;
margin: 2% 0;
`

const Item = styled.div`
  width:400px;
  height:500px;
  border: 1px solid black;
  display: flex;
  justify-content: space-around;
  align-items:center;
  flex-direction: column;
`

const Description = styled.a`
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
      <Navigation pageName={"Projects"} />
        <Categories>
            <Item>
                <Description target='_blank' href='https://github.com/saihajvir/Frefurnish' rel="noreferrer">Frefurnish / Mobile App</Description>
                <a target='_blank' href='https://github.com/saihajvir/Frefurnish' rel="noreferrer">
                <ItemImgDiff src='/Frefurnish_round.png'  />
                </a>
            </Item> 
            <Item>
                <Description target='_blank' href='https://github.com/834840102/dynamic-finalproject-group5' rel="noreferrer">Nutritional Spaces / Website</Description>
                <a target='_blank' href='https://github.com/834840102/dynamic-finalproject-group5' rel="noreferrer">
                <ItemImg src='/Logo3.png'/>
                </a>
            </Item>
            <Item>
                <Description target='_blank' rel="noreferrer" href='https://www.figma.com/proto/5y2Cpr6Jy9pWpWPIoBDYYf/West-Point-Hotel-Prototype-Website?node-id=211%3A2&scaling=min-zoom&page-id=211%3A1&starting-point-node-id=211%3A2'>West Point Hotel / WordPress</Description>
                <a target='_blank' rel="noreferrer" href='https://www.figma.com/proto/5y2Cpr6Jy9pWpWPIoBDYYf/West-Point-Hotel-Prototype-Website?node-id=211%3A2&scaling=min-zoom&page-id=211%3A1&starting-point-node-id=211%3A2'>
                <ItemImg src='Frame.png'/>
                </a>
            </Item>
        </Categories>
        <BottomBar />
    </Cont>
  )
}

//Above the card have blur
//
//Live view hint