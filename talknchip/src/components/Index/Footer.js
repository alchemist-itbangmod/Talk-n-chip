import React from "react"
import styled from "styled-components"

const creditText = {
  creditText: "Made with <3 by",
  creditHilight: "Artisan + Alchemist"
}
const Credit = styled.p`
  padding: 25px 80px;
  span{
    color: #f8bc00;
  }
`
const Footer = () => (
  <div>
    <Credit>{creditText.creditText} <span><b>{creditText.creditHilight}</b></span></Credit>
  </div>
)

export default Footer
