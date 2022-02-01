import styled from "styled-components"
import { useRouter } from "next/router"

const Cont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 340px;
    background-color: #66BAE9;
`

const NavCont = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const NavName = styled.button`
    border: none;
    background-color: #66BAE9;
    color: #fff;
`

const IntroText = styled.div`
    display: flex;
    color: #fff;
`;

const Navigation = ({
    pageName,
    index = "/",
    about = "/about",
    portfolio = "/portfolio",
    contact = "/contact"
}) =>{

    const r = useRouter()
    return (
        <Cont>
            <div></div>
            <NavCont>
                <NavName onClick={()=>r.push(index)}>Home</NavName>
                <NavName onClick={()=>r.push(about)}>About</NavName>
                <NavName onClick={()=>r.push(portfolio)}>Project</NavName>
                <NavName onClick={()=>r.push(contact)}>Contact</NavName>
            </NavCont>
            <IntroText>{pageName}</IntroText>
        </Cont>
    )
}

export default Navigation;