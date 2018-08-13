import React from "react"
import Link from "gatsby-link"
import { Container, Row, Col } from "reactstrap"
import Button from "../core/button"
import {Landing, Text, Date} from "./styled"
import styled from "styled-components"

const LinkTo = styled(Link)`
  color: #69302c;
  margin-right: 3%;
  margin-left: 3%;
  &:hover {
    color: #69302c;
  }
`

const IndexPage = () => (
  <Landing>
    <Container>
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
