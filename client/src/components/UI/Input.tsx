import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  border: 0;
  outline: 0;
  background: transparent;
  font-size: 1.2rem;
  margin-top: 30px;
  color: ${props => props.theme.colors.fg};
  padding: 10px 10px;
  border-bottom: 1px solid ${props => props.theme.colors.fg};
`

export default Input