import React from "react"
import Link from "gatsby-link"
import { Container, Row, Col } from "reactstrap"
import Button from "../core/button"
import styled from "styled-components"
import NavBar from "../Core/Navbar.js"

const LinkTo = styled(Link)`
  color: #69302c;
  margin-right: 3%;
  margin-left: 3%;
  &:hover {
    color: #69302c;
  }
`
const Landing = styled.div`
  color:#69302c;
  font-weight: bold;
  background-color:#f8bc00;
  height: 100vh;
`
const Text = styled.h1`
  margin-bottom: 3%;
  margin-top: 10%;
  margin-left: 3%;
`
const Date = styled.p`
  margin-left: 3%;
`

const IndexPage = () => (
  <Landing>
    <Container>
      <NavBar />
      <Row>
        <Col>
          <Text>
            ถ้าพูดเยอะจะเจ็บคอแต่ถ้ามา <br /> Talk n' Chip <br />
            แล้วไม่พูดจะเสียใจ
          </Text>
          <Date>26 สิงหาคม 2018 ณ คณะไอที ลาดกระบัง</Date>
          <LinkTo to='/index'>
            <Button>ส่งหัวข้อที่จะไปพูดกันเลย !</Button>
          </LinkTo>
          หรือ
          <LinkTo to='/404'>โหวตหัวข้อตัวเองที่อยากฟัง ></LinkTo>
        </Col>
      </Row>
    </Container>
  </Landing>
)

export default IndexPage
