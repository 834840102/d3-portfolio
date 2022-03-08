import { useRouter } from "next/router";
import styled from "styled-components";

const Cont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
  width: 100%;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`

const IconCont = styled.div`
  width:100%;
  display: flex;
  justify-content: space-between;
  align-items:center;
  padding: 30px 0;
  background-color: ${props=>props.color};
`

const Icons = styled.img`
  cursor: pointer;
  width:${props=>props.w};
  height:50px;
  padding: 0 20px;
`

const SignText = styled.div`
  font-size:20px;
  font-weight: 400;
`

const PolicyCont = styled.div`
  max-height: 200px;
  display: flex;
  margin-right:2%;
`

const Term = styled.div`
  cursor: pointer;
  padding-right: 5px;
  white-space:nowrap;
  font-size:22px;
  font-weight: 400;
  :hover {
		color: #fff;
	}
`


const Break = styled.div`
  width: 1px;
  height: 30px;
  background-color: #000;
`

const Policy = styled.div`
  cursor: pointer;
  padding-left: 5px;
  white-space:nowrap;
  font-size:22px;
  font-weight: 400;
  :hover {
		color: #fff;
	}
`

export default function BottomBar ({
    color= '#60BAE0',
}) {
    const r = useRouter()
    return <Cont>
    <IconCont color={color}>
        <div>
        <Icons src='/Facebook_icon.png' w={50} />
        <Icons src='/LinkedIn_icon_circle.svg.png' w={50} />
        <Icons src='/Twitter-logo.png' w={56} />
        </div>
        <SignText>©Copyright 2022. John Zhou. BCIT Front End Developer Portfolio.</SignText>
        <PolicyCont>
          <Term onClick={()=>r.push("/term")}>Terms of Use</Term>
          <Break></Break>
          <Policy onClick={()=>r.push("/policy")}>Privacy Policy</Policy>
        </PolicyCont>
      </IconCont>
      </Cont>
}