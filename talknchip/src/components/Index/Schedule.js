import React from "react"
import {Container, Row, Col, Card as DefaultCard, CardText, CardBody, CardTitle as DefaultCardTitle} from "reactstrap"
import styled from "styled-components"

const Landing = styled(Container)`
  height: 100vh;
  background-color: #60302c;
`
const Card = styled(DefaultCard)`
  border: 2px solid #000;
  border-radius: .2em;
  width: 80%;
`

const CardTitle = styled(DefaultCardTitle)`
  color: #f8bc00;
  font-weight: 500;
  font-size: 5rem;
`

const Schedules = [
  {
    time: "10.00",
    schedule: "เริ่มงาน"
  },
  {
    time: "11.00 - 12.00",
    schedule: "Session 1"
  },
  {
    time: "12.00 - 13.00",
    schedule: "พักเที่ยง"
  },
  {
    time: "13.00 - 14.00",
    schedule: "Session 2"
  },
  {
    time: "14.00 - 15.00",
    schedule: "Session 3"
  },
  {
    time: "15.00 - 16.00",
    schedule: "Session 4"
  },
  {
    time: "16.00 - 17.00",
    schedule: "Session 5"
  }
]
const Time = styled.p`
  color: #69302c;
`
const Schedule = () => (
  <Landing fluid>
    <Container>
      <Row>
        <Col>
          <Card className='mt-2'>
            <CardBody>
              <CardTitle>
                SCHE-<br />DULE
              </CardTitle>
              {Schedules.map((index) => (
                <CardText key={index} >
                  <Time>{index.time}</Time>
                  <p>{index.schedule}</p>
                </CardText>
              ))}
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card className='mt-4'>
            <CardBody className='text-right'>
              <CardTitle>
            LOCA-<br />TION
              </CardTitle>
              <CardText >
                <h3>คณะเทคโนโลยีสารสนเทศ</h3>
              สถาบันเทคโนโลยีพระจอมเกล้า<br />
              เจ้าคุณทหารลาดกระบัง
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  </Landing>
)
export default Schedule
