import React from "react"
import Link from "gatsby-link"
import { Container, Row, Col } from "reactstrap"
import Button from "../core/Button"
import styled from "styled-components"

const LinkTo = styled(Link)`
  color: #69302c;
  margin: 0px;
  &:hover {
    color: #69302c;
  }
`
const Landing = styled.div`
  color:#69302c;
  font-weight: 500;
  background-image: url('/static/images/Pattern.png');
  background-color:#F1BE42;
  background-size: cover;
  background-repeat: no-repeat;
  /* height: 100vh; */
`
const Text = styled.h1`
  margin-bottom: 3%;
  margin-top: 10%;
  font-size: 2.70rem;
`
const Date = styled.p`
  font-size: 1.70rem;
`

const IndexPage = () => (
  <Landing className='py-2'>
    <Container>
      <Row>
        <Col>
          <Text>
            ถ้าพูดเยอะจะเจ็บคอแต่ถ้ามา <br /> Talk n' Chip <br />
            แล้วไม่พูดจะเสียใจ
          </Text>
          <Date>26 สิงหาคม 2018 ณ คณะไอที ลาดกระบัง</Date>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={4} lg={3} className='m-0'>
          <LinkTo to='../Submit'>
            <Button block>ส่งหัวข้อที่จะไปพูดกันเลย !</Button>
          </LinkTo>
        </Col>
        <Col xs={12} md={5} lg={4} className='py-2 mt-1 my-0 pl-1'>
          <span className='mx-3'>หรือ</span>
          <LinkTo to='/404'>โหวตหัวข้อตัวเองที่อยากฟัง ></LinkTo>
        </Col>
      </Row>
    </Container>
  </Landing>
)

export default IndexPage
