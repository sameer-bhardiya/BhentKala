import styled from "styled-components"

const Container = styled.div`
    height:30px;
    width:100%;
    background-color:teal;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:14px;
    font-weight:bold;
    z-index: 1001;
    position: fixed;
    top:0;

    @media (max-width: 488px) {
    position:absolute;
    /* height: 90px; */
  }
`

const Announcement = () => {
  return (
    <Container>
       All the Art you need in one place
    </Container>
  )
}

export default Announcement