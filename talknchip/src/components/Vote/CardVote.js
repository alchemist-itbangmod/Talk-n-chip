import React from "react"
import styled from "styled-components"
import moment from "moment"
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap"

import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fas } from "@fortawesome/free-solid-svg-icons"

library.add(fas)

const CardTitleStyled = styled(CardTitle)`
  color: #64342F;
  line-height: 1.5;
`

const CardSubtitleStyled = styled(CardSubtitle)`
  color: #282829;
  line-height: 1.5;
`

const CardVote = ({ topic: { title, description, createdAt }, vote }) => (
  <Card >
    <CardBody>
      <CardTitleStyled>{title}</CardTitleStyled>
      <CardSubtitleStyled>{description}</CardSubtitleStyled>
      <div className='d-flex justify-content-between align-items-center pt-4'>
        <CardSubtitleStyled className='text-left'>{`เสนอเมื่อ ${moment(createdAt).format("DD/MM")}`}</CardSubtitleStyled>
        {/* <button type='button' className='btn btn-default mx-1'>
          <div>
            <FontAwesomeIcon icon='heart' />
          </div>
        </button> */}
      </div>
    </CardBody>
  </Card>
)

export default CardVote
