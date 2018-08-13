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
  ที่จะมทาแชร์ความรู้แบบวร้ายๆ
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

const AvatarContainer = styled.div`
  margin: 2em 0;
  img {
    max-width: 100px;
    border-radius: 50%;
    border: 5px solid #fff;
  }
`

const Avatar = ({ speaker: {name, team, topic, image} }) => (
  <AvatarContainer>
    <img src={image} />
    <h2>{topic}</h2>
    <h2>{name} {team}</h2>
  </AvatarContainer>
)

const SpeakerContainer = () => (
  <Fragment>
    {
      speakers.map((speaker, index) => (
        <Col xs={12} lg={6}>
          <Avatar speaker={speaker} key={index} />
        </Col>
      ))
    }
  </Fragment>
)

const MainSession = () => (
  <Container>
    <Row>
      <Col lg={4}>
        <h1>
          {content.header}
        </h1>
        <h1>
          <b><span>{content.headerHighlight}</span></b>
        </h1>
        <p>
          {content.body}
        </p>
      </Col>
      <Col lg={8}>
        <Row>
          <SpeakerContainer />
        </Row>
      </Col>
    </Row>
  </Container>
)

export default MainSession
