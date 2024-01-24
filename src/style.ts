import styled, { createGlobalStyle } from 'styled-components'
import { Button } from './components/Form/styles'

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    color: #fff;
    background-color: #2f3640;
    font-family: 'Roboto', sans-serif;
  }
`
export const SaveBtn = styled(Button)`
  background-color: #44bd32;
`
export const EditBtn = styled(Button)`
  background-color: #0a3bfc;
`
export const DeleteBtn = styled(Button)`
  background-color: #c23616;
`
export const CancelBtn = styled(Button)`
  background-color: #fcba03;
`
export default GlobalStyle
