import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "reactstrap"

const FooterContainer = styled(Container)`
  background-color: #F1F1F1;
`

const creditText = {
  creditText: "Made with <3 by",
  creditHilight: "Artisan + Alchemist + Thinc."
}
const Credit = styled.p`
  font-size: 23px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;

  margin-bottom: 0px;
  span{
    font-weight: 600;
    color: #f8bc00;
  }
  @media (max-width: 768px) {
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
  alchemist: "/static/images/logoAlchemist.png",
  thinc: "/static/images/thinc.png"

}

const Footer = () => (
  <FooterContainer fluid>
    <Container>
      <Row>
        <Col xs={12} className='my-1'>
          <Row className='d-flex justify-content-between align-items-center'>
            <Col xs={12} md={6} lg={7} className='py-3'>
              <Credit>{creditText.creditText} <span>{creditText.creditHilight}</span></Credit>
            </Col>
            <Col xs={12} md={6} lg={5} className='pb-2' align='center'>
              <CreditImage src={images.itforge} />
              <CreditImage src={images.alchemist} />
              <CreditImage src={images.thinc} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </FooterContainer>
)

export default Footer
