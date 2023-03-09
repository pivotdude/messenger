import styled from "styled-components";

const Button = styled.button`
  text-align: center;
  padding: 10px 15px;
  font-size: 1.05rem;
  border-radius: 8px;
  background: ${props => props.theme.colors.fg};
  color: ${props => props.theme.colors.bg};
  cursor: pointer;
`

export default Button