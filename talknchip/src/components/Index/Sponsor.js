import React from "react"
import { Container, Row, Col } from "reactstrap"
import styled from "styled-components"

const Landing = styled.div`
  color:#69302c;
  font-weight: bold;
  background-color:#F1F1F1;
  min-height: 10vh;
`
const Text = styled.p`
color:#000;
`
const Images = {
  itForge: "/static/images/logoItForge.png",
  alchemist: "/static/images/logoAlchemist.png"
}
const Image = styled.img`
width: auto;
max-height: 80px;
padding: 10px 30px;
`

const Sponsor = () => (
  <Landing>
    <Container>
      <Row>
        <Col className='text-center py-5' >
          <Text >
            <span className='mr-5'>ด้วยรักจึงจัดให้</span>
            <Image src={Images.itForge} /> X
            <Image src={Images.alchemist} />
          </Text>
        </Col>
      </Row>
    </Container>

  </Landing>
)

export default Sponsor
