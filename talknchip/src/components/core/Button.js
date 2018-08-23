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
`

export default Button
