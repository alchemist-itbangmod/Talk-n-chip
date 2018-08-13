import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "reactstrap"

const content = {
  header: "เพราะใดๆในโลกล้วนเป็น",
  headerHighlight: "เรื่องน่าเมาท์",
  body: `
    ในปีนี้ทางชุมชน ITForge KMITL และ Alchemist KMUTT จึงได้ลงเอย
    มานัดพบ ชวนทุกคนมานั่งเมาท์กินขนมให้เจ็บคอเล่นอย่างเป็นกันเอง
    เพื่อให้ทุกคนได้รู้จักกันมากขึ้นผ่าน Open Session ที่ใครอยากจะแชร์อะไร
    ก็มาเสนอหัวข้อกันได้แล้วมาฝอยกัน
  `
}

const WhatContainer = styled(Container)`
  background-color: #F1F1F1;
`

const WhatHeader = styled.h1`
  color: #69302c;

  span {
    color: #f8bc00;
  }
`
const WhatContent = styled.p`
  margin : 40px;
  font-size: 24px;
`

const WhatImage = styled.img`
  max-width: 250px;
  height: auto;
  border-radius: 50%;
  padding: 10px 30px;
`

const images = [
  "https://pbs.twimg.com/profile_images/1011171409471524864/vDjaHTj8_400x400.jpg",
  "https://pbs.twimg.com/profile_images/1011171409471524864/vDjaHTj8_400x400.jpg",
  "https://pbs.twimg.com/profile_images/1011171409471524864/vDjaHTj8_400x400.jpg"
]

const WhatSection = () => (
  <WhatContainer fluid className='px-0'>
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
