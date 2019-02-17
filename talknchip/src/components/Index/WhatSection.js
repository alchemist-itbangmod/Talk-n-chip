import React, { Fragment } from "react"
import styled from "styled-components"
import { Container, Row, Col } from "reactstrap"

const content = {
  header: "เพราะใดๆในโลกล้วนเป็น",
  headerHighlight: "เรื่องน่าเมาท์",
  body: `
    ในปีนี้ทางชุมนุม ITForge KMITL , Alchemist KMUTT , Thinc. CU จึงได้ลงเอย
    มานัดพบ ชวนทุกคนมานั่งเมาท์กินขนมให้เจ็บคอเล่นอย่างเป็นกันเอง
    เพื่อให้ทุกคนได้รู้จักกันมากขึ้นผ่าน Open Session ที่ใครอยากจะแชร์อะไร
    ก็เสนอหัวข้อกันมาได้แล้วมาฝอยกัน
  `
}

const WhatContainer = styled(Container)`
  background-color: #F0F0F0;
`

const BottomWaveBox = styled.div`
  background-image: url('/static/images/Bottom.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  height: 10vh;
`

const WhatHeader = styled.h1`
  color: #69302c;
  font-size: 45px;
  span {
    color: #f8bc00;
  }
  @media (max-width: 768px) {
    font-size: 35px;
  }
`
const WhatContent = styled.p`
  margin : 40px;
  font-size: 30px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`

const WhatImage = styled.img`
  max-width: 200px;
  height: auto;
  border-radius: 50%;
  border: 7px solid #f8bc00;
`

const images = [
  "/static/images/oval1.png",
  "/static/images/oval2.png",
  "/static/images/oval3.png"
]

const WhatSection = () => (
  <Fragment>
    <WhatContainer fluid className='py-5 px-0'>
      <Container className='py-5'>
        <Row>
          <Col className='text-center' xs={12} lg={{size: 10, offset: 1}}>
            <WhatHeader>{content.header} <span><b>{content.headerHighlight}</b></span></WhatHeader>
            <WhatContent>{content.body}</WhatContent>
            <Row className='d-flex justify-content-between align-items-center'>
              <Col xs={12} sm={12} lg={12}>
                {
                  images.map((image, index) => (
                    <WhatImage src={image} key={index} className='m-5' />
                  ))
                }
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </WhatContainer>
    <BottomWaveBox />
  </Fragment>
)
export default WhatSection
