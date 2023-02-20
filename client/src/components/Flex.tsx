import styled from "styled-components";

type justifyModel = 'center' | 'space-between' | 'flex-end' | 'flex-start' | 'space-around'

interface FlexProps {
    justify?: justifyModel | null,
}

const Flex = styled.div<FlexProps>`
  display: flex;
  justify-content: ${props => props.justify};
  align-items: center;
`

export default Flex
