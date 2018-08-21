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
  padding: 4em 0 7em;
  h1 {
    font-weight: 500;
  }
  span {
    font-weight: 700;
  }
  p {
    font-size: 1.70rem;
    color: #525252;
  }
`

const AvatarContainer = styled.div`
  img {
    max-width: 100px;
    border-radius: 50%;
    border: 4px solid #fff;
  }
  b {
    font-weight: 500;
  }
  h2 {
    color: #64342F;
  }
  h4 {
    color: #525252;
  }
`

const Avatar = ({ speaker: {name, team, topic, image} }) => (
  <AvatarContainer>
    <img src={image} />
    <h2 className='pt-3'>{topic}</h2>
    <h4><b>{name}</b> {team}</h4>
  </AvatarContainer>
)

const SpeakerContainer = () => (
  <Fragment>
    {
      speakers.map((speaker, index) => (
        <Col key={index} xs={12} lg={6} className='pb-5' >
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
        <Col className='py-5' lg={5}>
          <h1>{content.header}</h1>
          <h1><span>{content.headerHighlight}</span></h1>
          <p>{content.body}</p>
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
