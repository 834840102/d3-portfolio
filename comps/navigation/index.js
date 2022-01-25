import styled from "styled-components"

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
}) =>{
    return (
        <Cont>
            <div></div>
            <NavCont>
                <NavName>Home</NavName>
                <NavName>About</NavName>
                <NavName>Project</NavName>
                <NavName>Contact</NavName>
            </NavCont>
            <IntroText>{pageName}</IntroText>
        </Cont>
    )
}

export default Navigation;