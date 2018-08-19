import React from "react"
import { Container, Row, Col } from "reactstrap"
import styled from "styled-components"

const Landing = styled.div`
  color:#69302c;
  background-image: url('/static/images/Top.png');
  background-color:#F1BE42;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 10vh;
`
const Text = styled.p`
  color:#000;
  margin: 0;
`
const Images = {
  itForge: "/static/images/ITFORGE.png",
  alchemist: "/static/images/logoAlchemist.png"
}
const Image = styled.img`
  padding: 0.5em 1.5em;
  width: auto;
  max-height: 70px;
  @media (max-width: 992px) {
    max-height: 50px;
    padding: 0 0.5em;
    margin: 10px 0px;
  }
  @media (max-width: 768px) {
    max-height: 25px;
    padding: 0 0.5em;
    margin: 10px 0px;
  }
`
const SponsorCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 768px) {
    justify-content: center;
  }
`
const SponsorImageCol = styled(Col)`
  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
`

const Sponsor = () => (
  <Landing>
    <Container className='p-5'>
      <Row className='py-5'>
        <SponsorCol xs={12} md={4} lg={{size:3}}>
          <Text>ด้วยรักจึงจัดให้จาก</Text>
        </SponsorCol>
        <SponsorImageCol xs={12} md={8} lg={7} align='center'>
          <Image src={Images.itForge} /> X
          <Image src={Images.alchemist} />
        </SponsorImageCol>
      </Row>
    </Container>
  </Landing>
)

export default Sponsor
