import styled from "styled-components"
import { Button as DefaultButton } from "reactstrap"

const Button = styled(DefaultButton)`
    cursor: pointer;
    background-color:#69302c;
    border:0px solid transparent;
    border-radius: 3px;
    color: #fff;
    padding: 0.4em 1.25em;
    font-size: 21px;
    width: auto;
    &:hover, &:active {
      background-color: #421714 !important;
      text-decoration: none;
      box-shadow: none !important;
    }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`

export const ButtonOutline = styled(Button)`
    background-color: transparent;
    color: #69302c;
    border: 1px solid #69302c;


    &:hover, &:active {
      color: #fff;
      background-color: #421714 !important;
      text-decoration: none;
      box-shadow: none !important;
    }
`

export default Button
