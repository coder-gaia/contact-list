import styled from 'styled-components'

export const FormWrapper = styled.form`
  max-width: 547px;
  widt: 100%;
  margin: 32px auto;
`

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 10px;

  input {
    width: 100%;
    padding: 8px;
    background-color: #fff;
    color: #000;
    border-color: #666;
    border-radius: 8px;
    font-weight: bold;
  }
`
export const ErrorMsg = styled.p`
  color: red;
  margin-top: 8px;
  margin: 8px auto;
`
export const Button = styled.button`
  background-color: #000;
  margin-right: 8px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  border: none;
  cursor: pointer;
  padding: 8px 12px;
`
