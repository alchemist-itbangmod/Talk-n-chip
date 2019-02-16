import React from "react"
import styled from "styled-components"
import {Container, Row, Col, Card as DefaultCard, CardBody as DefaultCardBody, CardTitle as DefaultCardTitle} from "reactstrap"
import GoogleMap from "./GoogleMap"

const Landing = styled(Container)`
  min-height: calc(100vh - 200px - 100px);
  background-image: url('/static/images/IT.png');
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 768px) {
    padding: 0px;
  }
`
const Card = styled(DefaultCard)`
  margin-top: -15vh;
  border-radius: 5px;
  background-color: #ffffff;
  width: 540px;

`

const CardBody = styled(DefaultCardBody)`
  @media (max-width: 768px) {
    padding-left: 0px;
    padding-right: 0px;
  }
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
  @media (max-width: 768px) {
    font-size: 34px;
    text-align: center;
  }
`

const Schedules = [
  {
    time: "10.00-10.30",
    schedule: "ลงทะเบียน"
  },
  {
    time: "11.00 - 12.00",
    schedule: "แนะนำตัว และพูดทำความรู้จักกัน"
  },
  {
    time: "12.00 - 13.00",
    schedule: "พักรัปประทานอาหารกลางวัน"
  },
  {
    time: "13.00 - 13.20",
    schedule: "Session 1, 2"
  },
  {
    time: "13.20 - 13.30",
    schedule: "พัก"
  },
  {
    time: "13.30 - 13.50",
    schedule: "Session 3, 4"
  },
  {
    time: "13.50 - 14.00",
    schedule: "พัก"
  },
  {
    time: "14.00 - 14.20",
    schedule: "Session 5, 6"
  },
  {
    time: "14.20 - 14.30",
    schedule: "พัก"
  },
  {
    time: "14.30 - 14.50",
    schedule: "Session 7, 8"
  },
  {
    time: "14.50 - 15.00",
    schedule: "พัก"
  },
  {
    time: "15.00 - 15.20",
    schedule: "Session 9, 10"
  },
  {
    time: "15.20 - 15.30",
    schedule: "พัก"
  },
  {
    time: "15.30 - 15.50",
    schedule: "Session 11, 12"
  },
  {
    time: "15.50 - 16.00",
    schedule: "พัก"
  },
  {
    time: "16.00",
    schedule: "ปิดกิจกรรม"
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
    font-size: 20px;
    text-align: center;
  }
`
const Describe = styled.p`
  color: #fff;
  font-size: 26px;
  @media (max-width: 768px) {
    text-align: center;
    font-size: 20px;
  }
`

const Maps = styled.div`
  border: 2px solid #000;
  border-radius: .2em;
  padding: 0;
`

const Schedule = () => (
  <Landing fluid className='py-5'>
    <Container>
      <Row>
        <Col xs={12} lg={6} className='d-flex justify-content-center'>
          <Card className='py-5 px-4'>
            <CardBody>
              <CardTitle className='text-left'>
                SCHEDULE
              </CardTitle>
              {
                Schedules.map((data, index) => (
                  <div key={index}>
                    <Time>{data.time}</Time>
                    <Session>{data.schedule}</Session>
                  </div>
                ))
              }
            </CardBody>
          </Card>
        </Col>
        <Col xs={12} lg={6} align='center'>
          <CardLocation className='mt-4'>
            <CardBody>
              <CardTitle className='mt-5 mb-3'>
              LOCATION
              </CardTitle>
              <div className='mb-4'>
                <Faculty>อาคารเรียนรวม 2</Faculty>
                <Describe>
                มหาวิทยาลัย<br />
                เทคโนโลยีพระจอมเกล้าธนบุรี
                </Describe>
              </div>
              <div align='right'>
                <GoogleMap />
              </div>
            </CardBody>
          </CardLocation>
        </Col>
      </Row>
    </Container>
  </Landing>
)
export default Schedule
