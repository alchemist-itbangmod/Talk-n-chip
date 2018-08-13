import React from "react"
import Link from "gatsby-link"
import { Container, Row, Col } from "reactstrap"
import Button from "../core/button"
import styled from "styled-components"

const LinkTo = styled(Link)`
  color: #69302c;
  &:hover {
    color: #69302c;
  }
`
const DownButton = styled(Button)`
  color: #FFF;
  margin-right: 3%;
  margin-left: 41%;
  &:hover {
    color: #FFF;
  }
  
`
const Span = styled.span`
margin-left: 40%;
margin-bottom: 25%;

`

const Landing = styled.div`
  color:#69302c;
  font-weight: bold;
  background-color:#F1BE42;
  height: 100vh;
`
const Text = styled.h1`
  margin-bottom: 3%;
  margin-top: 10%;
  margin-left: 18%;
`

const SectionSubmidTopic = () => (
  <Landing>
    <Container>
      <Row>
        <Col>
          <Text>
          อ่านมาขนาดนี้แล้วยังไม่ส่งหัวข้ออีกหรอ ? ส่งเร็ว!
          </Text>
          <LinkTo to='/index'>
            <DownButton>ส่งหัวข้อที่จะไปพูดกันเลย !</DownButton>
          </LinkTo><br /><br />
          <Span >หรือ <LinkTo to='/404'>โหวตหัวข้อตัวเองที่อยากฟัง ></LinkTo>
          </Span>
        </Col>
      </Row>
    </Container>

  </Landing>
)

export default SectionSubmidTopic
