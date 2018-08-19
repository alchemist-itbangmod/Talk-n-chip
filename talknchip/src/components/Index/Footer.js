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
    text-align: center;
  }
`
const CreditImage = styled.img`
  width: auto;
  max-height: 75px;
  padding: 15px 25px;
  margin: 15px 0px;
  @media (max-width: 992px) {
    max-height: 50px;
    margin: 0px;
    padding: 10px 20px;
  }
`

const images = {
  itforge: "/static/images/Artisan Logo.png",
  alchemist: "/static/images/logoAlchemist.png"
}

const Footer = () => (
  <FooterContainer fluid>
    <Container className='py-1'>
      <Row>
        <Col xs={12}>
          <Row className='d-flex justify-content-between align-items-center'>
            <Col xs={12} md={6} lg={7} className='py-3'>
              <Credit>{creditText.creditText} <span><b>{creditText.creditHilight}</b></span></Credit>
            </Col>
            <Col xs={12} md={6} lg={5} className='py-2' align='center'>
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
