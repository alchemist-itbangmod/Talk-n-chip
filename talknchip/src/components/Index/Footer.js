import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "reactstrap"

const FooterContainer = styled(Container)`
  background-color: #F1F1F1;
`

const creditText = {
  creditText: "Made with <3 by",
  creditHilight: "Artisan + Alchemist"
}
const Credit = styled.p`
  margin-bottom: 0px;
  span{
    color: #f8bc00;
  }
  @media (max-width: 768px) {
    font-size: 0.90rem;
  }
`
const CreditImage = styled.img`
  width: auto;
  max-height: 80px;
  padding: 10px 30px;
  @media (max-width: 768px) {
    max-height: 50px;
  }
`
const images = {
  itforge: "/static/images/logoItForge.png",
  alchemist: "/static/images/logoAlchemist.png"
}

const Footer = () => (
  <FooterContainer fluid>
    <Container className='py-1'>
      <Row>
        <Col xs={12}>
          <Row className='d-flex justify-content-between align-items-center'>
            <Col xs={12} md={6} lg={8} className='py-3'>
              <Credit>{creditText.creditText} <span><b>{creditText.creditHilight}</b></span></Credit>
            </Col>
            <Col xs={12} md={6} lg={4} className='py-2'>
              <CreditImage src={images.itforge} />
              <CreditImage src={images.alchemist} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </FooterContainer>
)

export default Footer
