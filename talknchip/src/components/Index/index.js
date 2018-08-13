import React from "react"
import Link from "gatsby-link"
import { Container, Row, Col } from "reactstrap"
import Button from "../Core/button"

const IndexPage = () => (
  <Container>
    <Row>
      <Col md='2' />
      <Col md='8'>
        <h3>ถ้าพูดเยอะจะเจ็บคอแต่ถ้ามา <br /> Talk n' Chip <br />แล้วไม่พูดจะเสียใจ</h3>
        <p>
        26 สิงหาคม 2018 ณ คณะไอที ลาดกระบัง
        </p>
        <Button>
        ส่งหัวข้อที่จะไปพูดกันเลย !
        </Button>
        <Link to='/404'> โหวตหัวข้อตัวเองที่อยากฟัง
        </Link>
      </Col>
      <Col md='2' />
    </Row>
  </Container>
)

export default IndexPage
