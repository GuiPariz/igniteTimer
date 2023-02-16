import styled from 'styled-components'

export const LayoutContainer = styled.div`
  width: 70rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  border-radius: 8px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.gray[2]};
`