import React, { Fragment } from "react"
import styled from "styled-components"
import { Card, CardBody, CardTitle, CardSubtitle, Container, Row, Col } from "reactstrap"
import { db, getAll } from "../../tools/firebasehelper"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fas } from "@fortawesome/free-solid-svg-icons"

library.add(fas)

const SessionContainer = styled(Container)`
  min-height: calc(105vh - 200px - 100px);
`

const InnerSessionContainer = styled(Container)`
  h1 {
    font-weight: 500;
  }
  span {
    font-weight: 700;
  }
  p {
    font-size: 1.75rem;
  }
`
const CardTitleStyled = styled(CardTitle)`
  color: #64342F;
`

const CardSubtitleStyled = styled(CardSubtitle)`
  color: #282829;
`

class CardContainer extends React.Component {
  state = {

    speakers: [],
    speakersTemp: [],
    votes: []
  }
  fechData = () => {
    getAll("topics/").on("value", topicssnap => {
      try {
        let topicssnapobj = Object.values(topicssnap.val())
        this.state.speakersTemp = []
        for (let i = 0; i <= topicssnapobj.length; i++) {
          let tempobj = Object.values(topicssnapobj[i])
          try {
            for (let z = 0; z < tempobj.length; z++) {
              this.state.speakersTemp.push(tempobj[z])
            }
          } catch (e) {
            console.log(e)
          }
        }

        this.setState({
          speakers: this.state.speakersTemp
        })
      } catch (e) {
        this.setState({
          speakers: this.state.speakersTemp
        })
      }
    }
    )
    getAll("votes/").on("value", votessnap => {
      try {
        let votess = Object.values(votessnap.val())
        this.setState({ votess })
      } catch (e) {

      }
    }
    )
  }
  componentDidMount () {
    this.fechData()
  }
  componentWillMount () {
    // this.fechData()
  }

  render () {
    return (
      <Fragment>
        {
          this.state.speakers.map((speaker, index) => (
            <Col key={index} sm='4' className='pb-5' >
              <CardVote speaker={speaker} value={index} />
            </Col>
          ))
        }
      </Fragment>
    )
  }
}

const CardVote = ({ speaker: {topic, date} }) => (
  <Card >
    <CardBody>
      <CardTitleStyled className='text-center'>{topic}</CardTitleStyled>
      <div className='d-flex justify-content-between align-items-center pt-4'>
        <CardSubtitleStyled className='text-left'>{date}</CardSubtitleStyled>
        <div>
          <button type='button' className='btn btn-default mx-1'>
            <div>
              <FontAwesomeIcon icon='heart' />
            </div>
          </button>
        </div>
      </div>
    </CardBody>
  </Card>
)
const AllCardVote = () => (
  <SessionContainer fluid className='px-0 pt-5'>
    <InnerSessionContainer >
      <Row>
        <Col xs='12' xl='12'>
          <Row>
            <CardContainer />
          </Row>
        </Col>
      </Row>
    </InnerSessionContainer>
  </SessionContainer>
)

export default AllCardVote