import React from "react"
import {Container, Row, Col, Card as DefaultCard, CardText as DefaultCardText, CardBody, CardTitle as DefaultCardTitle} from "reactstrap"
import styled from "styled-components"

const Landing = styled(Container)`
  height: 100vh;
`
const Card = styled(DefaultCard)`
  border: 0 solid transparent;
`
const CardText = styled(DefaultCardText)`
  color: #69302c;
`
const CardTitle = styled(DefaultCardTitle)`
  color: #f8bc00;
  font-weight: 500;
  font-size: 5rem;
`
const Schedule = () => (
  <Landing>
    <Row>
      <Col>
        <Card>
          <CardBody>
            <CardTitle>
                Schedule
            </CardTitle>
            <CardText>
              10.00
              <br />
              เริ่มงาน
              <br />
              11.00 - 12.00
              <br />
              Session 1
              <br />
              12.00 - 13.00
              <br />
              พักเที่ยง
              <br />
              13.00 - 14.00
              <br />
              Session 2
              <br />
              14.00 - 15.00
              <br />
              Session 3
              <br />
              15.00 - 16.00
              <br />
              Session 4
              <br />
              16.00 - 17.00
              <br />
              Session 5
            </CardText>
          </CardBody>
        </Card>
      </Col>
      <Col>
        Location
      </Col>
    </Row>
  </Landing>
)
export default Schedule
