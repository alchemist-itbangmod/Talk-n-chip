import styled from "styled-components"
import { Button as DefaultButton } from "reactstrap"

const Button = styled(DefaultButton)`
    cursor: pointer;
    background-color:#69302c;
    border:0px solid transparent;
    border-radius: .1em;
    color: #fff;
    padding: .7em 1.25em;
    font-size: 21px;
    width: auto;
    &:hover{
      background-color: #421714;
      text-decoration: none;
    }
`

export default Button
