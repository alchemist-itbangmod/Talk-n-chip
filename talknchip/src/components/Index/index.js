import React from "react"
import Link from "gatsby-link"
import { Container, Row, Col } from "reactstrap"
import Button from "../Core/button"
import Landing from "./styled"
import styled from "styled-components"

const LinkTo = styled(Link)`
  color: #69302c;
  margin : 1%;
  &:hover {
    color: #69302c;
  }
`

const IndexPage = () => (
  <Landing>
    <Container>
      <Row>
        <Col md='2' />
        <Col md='8'>
          <h3>
            ถ้าพูดเยอะจะเจ็บคอแต่ถ้ามา <br /> Talk n' Chip <br />
            แล้วไม่พูดจะเสียใจ
          </h3>
          <p>26 สิงหาคม 2018 ณ คณะไอที ลาดกระบัง</p>
          <LinkTo to='/index'>
            <Button>ส่งหัวข้อที่จะไปพูดกันเลย !</Button>
          </LinkTo>
          หรือ
          <LinkTo to='/404'>โหวตหัวข้อตัวเองที่อยากฟัง ></LinkTo>
        </Col>
        <Col md='2' />
      </Row>
    </Container>
  </Landing>
)

export default IndexPage
