import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "reactstrap"

const content = {
  header: "เพราะใดๆในโลกล้วนเป็น",
  headerHighlight: "เรื่องน่าเมาท์",
  body: `
    ในปีนี้ทางชุมนุม ITForge KMITL และ Alchemist KMUTT จึงได้ลงเอย
    มานัดพบ ชวนทุกคนมานั่งเม้าท์กินขนมให้เจ็บคอเล่นอย่างเป็นกันเอง
    เพื่อให้ทุกคนได้รู้จักกันมากขึ้นผ่าน Open Session ที่ใครอยากจะแชร์อะไร
    ก็เสนอหัวข้อกันมาได้แล้วมาฝอยกัน
  `
}

const WhatContainer = styled(Container)`
  background-image: url('/static/images/Bottom.png');
  background-repeat: no-repeat;
  background-size: cover;
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
  margin: 10px 30px;
`

const images = [
  "https://pbs.twimg.com/profile_images/1011171409471524864/vDjaHTj8_400x400.jpg",
  "https://pbs.twimg.com/profile_images/1011171409471524864/vDjaHTj8_400x400.jpg",
  "https://pbs.twimg.com/profile_images/1011171409471524864/vDjaHTj8_400x400.jpg"
]

const WhatSection = () => (
  <WhatContainer fluid className='py-5 px-0'>
    <Container className='py-5'>
      <Row>
        <Col className='text-center' xs={12} lg={{size: 10, offset: 1}}>
          <WhatHeader>{content.header} <span><b>{content.headerHighlight}</b></span></WhatHeader>
          <WhatContent>{content.body}</WhatContent>
          <Row className='d-flex justify-content-between align-items-center'>
            {
              images.map((image, index) => (
                <Col xs={12} lg={4}>
                  <WhatImage src={image} key={index} />
                </Col>
              ))
            }
          </Row>
        </Col>
      </Row>
    </Container>
  </WhatContainer>
)
export default WhatSection
