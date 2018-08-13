import React from "react"
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

const WhatSection = () => (
  <Container>
    <Row>
      <Col>
        <h1>{content.header}<span>{content.headerHighlight}</span></h1>
        <p>{content.body}</p>
      </Col>
      <Col>
        <img />
        <img />
        <img />
      </Col>
    </Row>
  </Container>
)
export default WhatSection
