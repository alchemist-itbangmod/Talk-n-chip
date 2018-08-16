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
  &:hover {
    color: #FFF;
  }
  
`
const Span = styled.span`

`

const Landing = styled.div`
  color:#69302c;
  font-weight: bold;
  background-color:#F1BE42;
  min-height: 10vh;
`
const Text = styled.h1`
`
const Weight = styled.span`
font-weight: 800;

`
const SectionSubmitTopic = () => (
  <Landing>
    <Container>
      <Row>
        <Col className='text-center py-5'>
          <Text>
          อ่านมาขนาดนี้แล้วยังไม่ส่งหัวข้ออีกหรอ ?<Weight> ส่งเร็ว!</Weight>
          </Text>
          <LinkTo to='../Submit'>
            <DownButton>ส่งหัวข้อที่จะไปพูดกันเลย !</DownButton>
          </LinkTo><br /><br />
          <Span >หรือ <LinkTo to='/404'>โหวตหัวข้อตัวเองที่อยากฟัง ></LinkTo>
          </Span>
        </Col>
      </Row>
    </Container>

  </Landing>
)

export default SectionSubmitTopic
