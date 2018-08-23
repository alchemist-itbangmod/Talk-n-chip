import React, { Fragment } from "react"
import styled from "styled-components"
import { Container, Row, Col } from "reactstrap"

const content = {
  header: "คนอยากเมาท์",
  headerHighlight: "กับเรื่องที่จะเมาท์",
  body: `
  นอกจากจะมี Open Session แล้ว
  เรายังมีหัวข้อดีๆ
  จาก Speaker ของทั้งสองทีม
  ที่จะมาแชร์ความรู้แบบวร้ายๆ
  ให้ได้ฟังกันอีกด้วย
  `
}

const speakers = [
  {
    name: "เต้",
    team: "Alchemist",
    topic: "กินข้าวกับโค้ดกันเถอะ",
    image: "https://scontent.fbkk14-1.fna.fbcdn.net/v/t31.0-8/19144003_758900554284312_5658595717333519338_o.jpg?_nc_cat=0&oh=9aaa31dc4d00dfb03b410c175b285bfb&oe=5BF69118"
  },
  {
    name: "เต้",
    team: "Alchemist",
    topic: "กินข้าวกับโค้ดกันเถอะ",
    image: "https://scontent.fbkk14-1.fna.fbcdn.net/v/t31.0-8/19144003_758900554284312_5658595717333519338_o.jpg?_nc_cat=0&oh=9aaa31dc4d00dfb03b410c175b285bfb&oe=5BF69118"
  },
  {
    name: "เต้",
    team: "Alchemist",
    topic: "กินข้าวกับโค้ดกันเถอะ",
    image: "https://scontent.fbkk14-1.fna.fbcdn.net/v/t31.0-8/19144003_758900554284312_5658595717333519338_o.jpg?_nc_cat=0&oh=9aaa31dc4d00dfb03b410c175b285bfb&oe=5BF69118"
  },
  {
    name: "เต้",
    team: "Alchemist",
    topic: "กินข้าวกับโค้ดกันเถอะ",
    image: "https://scontent.fbkk14-1.fna.fbcdn.net/v/t31.0-8/19144003_758900554284312_5658595717333519338_o.jpg?_nc_cat=0&oh=9aaa31dc4d00dfb03b410c175b285bfb&oe=5BF69118"
  },
  {
    name: "เต้",
    team: "Alchemist",
    topic: "กินข้าวกับโค้ดกันเถอะ",
    image: "https://scontent.fbkk14-1.fna.fbcdn.net/v/t31.0-8/19144003_758900554284312_5658595717333519338_o.jpg?_nc_cat=0&oh=9aaa31dc4d00dfb03b410c175b285bfb&oe=5BF69118"
  }
]

const SessionContainer = styled(Container)`
  background-repeat: no-repeat;
  background-size: cover;
  color: #64342F;
`

const InnerSessionContainer = styled(Container)`
  padding: 4em 15px 7em;
  h1 {
    font-size: 45px;
    font-weight: 500;
    @media (max-width: 768px) {
      font-size: 35px;
    }
  }
  span {
    font-weight: 700;
  }
  p {
    color: #525252;
    font-size: 30px;
    @media (max-width: 768px) {
      font-size: 20px;
      margin: 0 auto;
    }
  }
  @media (max-width: 768px) {
    text-align: center;
  }
`

const AvatarContainer = styled.div`
  font-size: 28px;
  img {
    max-width: 100px;
    border-radius: 50%;
    border: 4px solid #fff;
  }
  b {
    font-weight: 600;
  }
  h2 {
    font-size: 28px;
    color: #64342F;
  }
  h4 {
    color: #525252;
  }
  @media (max-width: 768px) {
    text-align: center;
  }
`

const Content = styled.p`
  font-size: 30px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.8em;
  margin-top: 1em;
  letter-spacing: normal;
  color: #3c3c3c;
  max-width: 383px;
`

const Avatar = ({ speaker: {name, team, topic, image} }) => (
  <AvatarContainer>
    <img src={image} />
    <h2 className='pt-3'><b>{topic}</b></h2>
    <h4><b>{name}</b> {team}</h4>
  </AvatarContainer>
)

const SpeakerContainer = () => (
  <Fragment>
    {
      speakers.map((speaker, index) => (
        <Col key={index} xs={12} md={6} className='pb-5' >
          <Avatar speaker={speaker} />
        </Col>
      ))
    }
  </Fragment>
)

const MainSession = () => (
  <SessionContainer fluid className='px-0 pt-5'>
    <InnerSessionContainer>
      <Row>
        <Col className='py-5' xs={12} lg={5}>
          <h1>{content.header}</h1>
          <h1><span>{content.headerHighlight}</span></h1>
          <Content>{content.body}</Content>
        </Col>
        <Col lg={7}>
          <Row>
            <SpeakerContainer />
          </Row>
        </Col>
      </Row>
    </InnerSessionContainer>
  </SessionContainer>
)

export default MainSession
