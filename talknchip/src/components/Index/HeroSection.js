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
const LinkButton = styled(Link)`
  color: #69302c;
  margin: 0px;
  &:hover {
    color: #69302c;
    text-decoration: none;
  }
`

const Landing = styled.div`
  color:#69302c;
  font-weight: 500;
  margin-bottom: 5em;
`
const Text = styled.h1`
  margin-bottom: 3%;
  margin-top: 10%;
  font-size: 55px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.35;
  letter-spacing: normal;
  color: #69302c;
  @media (max-width: 768px) {
    font-size: 35px;
  }
`

const SubText = styled.div`
  font-size: 21px;
`

const Date = styled.p`
  font-size: 24px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #69302c;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`

const IndexPage = () => (
  <Landing className='py-2'>
    <Container>
      <Row>
        <Col>
          <Text>
            ถ้าพูดเยอะอาจจะเจ็บคอ<br />
            แต่ถ้ามา Talk n' Chip <br />
            แล้วพูดไม่พอจะเสียใจ
          </Text>
          <Date>26 สิงหาคม 2018 ณ คณะไอที ลาดกระบัง</Date>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={4} lg={3} className='m-0'>
          <LinkButton to='/submit'>
            <Button block>ส่งหัวข้อที่จะไปพูดกันเลย !</Button>
          </LinkButton>
        </Col>
        <Col xs={12} md={5} lg={4} className='py-2 mt-1 my-0 pl-1'>
          <SubText>
            <span className='mx-3'>หรือ</span>
            <LinkTo to='/vote'>{"โหวตหัวข้อตัวเองที่อยากฟัง >"}</LinkTo>
          </SubText>
        </Col>
      </Row>
    </Container>
  </Landing>
)

export default IndexPage
