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



export default function Project() {
  return (
    <Cont>
      <Navigation pageName={"Project"} />
        <div>
            <div>
                <span>Frefurnish / Mobile App</span>
                <img />
            </div>
            <div>
                <span>Nutritional Spaces / Website</span>
                <img />
            </div>
            <div>
                <span>West Point Hotel / WordPress</span>
                <img />
            </div>
        </div>
      
    </Cont>
  )
}
