import React from "react"
import Link from "gatsby-link"
import { Container, Row, Col } from "reactstrap"
import Button from "../core/Button"
import styled from "styled-components"

const LinkTo = styled(Link)`
  color: #69302c;
  &:hover {
    color: #69302c;
  }
`
const DownButton = styled(Button)`
  color: #FFF;
  max-width: 431px;
  width: 100%;
  height: 64px;
  border-radius: 3px;
  background-color: #69302c;

  &:hover {
    color: #FFF;
  }
`

const Landing = styled.div`
  padding: 5em 0;
  color:#69302c;
  font-weight: bold;
  min-height: 10vh;
  background-image: url('/static/images/Pattern.png');
  background-color: #f8bc00;
  background-repeat: no-repeat;
  background-size: cover;
  span {
    font-size: 21px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #733c0b;
  }
`
const Text = styled.h1`
  font-size: 45px;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: center;
  color: #69302c;

  span {
    font-size: 45px;
    font-weight: bold;
    @media (max-width: 768px) {
      font-size: 35px;
    }
  }

  @media (max-width: 768px) {
    font-size: 35px;
  }
`
const SectionSubmitTopic = () => (
  <Landing>
    <Container>
      <Row>
        <Col className='text-center py-5 d-flex flex-column'>
          <Text>
          อ่านมาขนาดนี้แล้วยังไม่ส่งหัวข้ออีกหรอ ?<span> ส่งเร็ว!</span>
          </Text>
          <LinkTo to='../submit'>
            <DownButton className='my-4'>ส่งหัวข้อที่จะไปพูดกันเลย !</DownButton>
          </LinkTo>
          <span>
            หรือ <LinkTo to='../vote'>โหวตหัวข้อตัวเองที่อยากฟัง ></LinkTo>
          </span>
        </Col>
      </Row>
    </Container>
  </Landing>
)

export default SectionSubmitTopic
