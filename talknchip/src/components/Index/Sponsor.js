import React from "react"
import { Container, Row, Col } from "reactstrap"
import styled from "styled-components"

const Landing = styled.div`
  color:#69302c;
  /* font-weight: bold; */
  background-color:#F1F1F1;
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
  padding: 0 1em;
  width: auto;
  max-height: 80px;
  @media (max-width: 768px) {
    max-height: 50px;
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

const Sponsor = () => (
  <Landing>
    <Container>
      <Row className='py-5'>
        <SponsorCol xs={12} md={4}>
          <Text>ด้วยรักจึงจัดให้จาก</Text>
        </SponsorCol>
        <Col xs={12} md={8}>
          <Image src={Images.itForge} /> X
          <Image src={Images.alchemist} />
        </Col>
      </Row>
    </Container>
  </Landing>
)

export default Sponsor
