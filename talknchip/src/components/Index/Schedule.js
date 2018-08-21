import React from "react"
import {Container, Row, Col, Card as DefaultCard, CardBody, CardTitle as DefaultCardTitle} from "reactstrap"
import styled from "styled-components"

const Landing = styled(Container)`
  min-height: calc(100vh - 200px - 100px);
  background-image: url('/static/images/IT.png');
  background-repeat: no-repeat;
  background-size: cover;
`
const Card = styled(DefaultCard)`
  border: 2px solid #000;
  margin-top: -15vh;
  border-radius: 5px;
  background-color: #ffffff;
  width: 540px;

`
const CardLocation = styled(DefaultCard)`
  border: 0px solid transparent;
  background: transparent;
  width: 80%;
  text-align: right;
  @media (max-width: 768px) {
    text-align: center;
  }
`

const CardTitle = styled(DefaultCardTitle)`
  font-size: 79px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: right;
  color: #f8bc00;
  @media (max-width: 1196px) {
    font-size: 4rem;
  }
  @media (max-width: 768px) {
    font-size: 2.1rem;
  }
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
  font-size: 32px;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 25px;
  }
`
const Session = styled.p`
  font-size: 32px;
  @media (max-width: 768px) {
    font-size: 25px;
  }
`
const Faculty = styled.h3`
  color: #f8bc00;
  font-size: 32px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: right;
  color: #f8bc00;
  @media (max-width: 768px) {
    text-align: left;
  }
`
const Describe = styled.p`
  color: #fff;
  font-size: 26px;
  @media (max-width: 768px) {
    text-align: left;
    font-size: 14px;
  }
`

const Schedule = () => (
  <Landing fluid className='py-5'>
    <Container>
      <Row>
        <Col xs={12} md={6} lg={6} className='d-flex justify-content-center'>
          <Card className='py-5 px-4'>
            <CardBody>
              <CardTitle className='text-left'>
                SCHEDULE
              </CardTitle>
              {Schedules.map((index) => (
                <div key={index}>
                  <Time>{index.time}</Time>
                  <Session>{index.schedule}</Session>
                </div>
              ))}
            </CardBody>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={6} align='center'>
          <CardLocation className='mt-4'>
            <CardBody>
              <CardTitle className='mt-5 mb-3'>
              LOCATION
              </CardTitle>
              <div>
                <Faculty>คณะเทคโนโลยีสารสนเทศ</Faculty>
                <Describe>
                  สถาบันเทคโนโลยีพระจอมเกล้า<br />
                  เจ้าคุณทหารลาดกระบัง
                </Describe>
              </div>
            </CardBody>
          </CardLocation>
        </Col>
      </Row>
    </Container>
  </Landing>
)
export default Schedule
