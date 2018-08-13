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
`
const CreditImage = styled.img`
  width: auto;
  max-height: 80px;
  padding: 10px 30px;
`
const images = {
  itforge: "/static/images/logoItForge.png",
  alchemist: "/static/images/logoIAlchemist.png"
}

const Footer = () => (
  <FooterContainer fluid>
    <Container className='py-1'>
      <Row>
        <Col xs={12} lg={{size: 10, offset: 1}}>
          <div className='d-flex justify-content-between align-items-center'>
            <Credit>{creditText.creditText} <span><b>{creditText.creditHilight}</b></span></Credit>
            <div>
              <CreditImage src={images.itforge} />
              <CreditImage src={images.alchemist} />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </FooterContainer>
)

export default Footer
