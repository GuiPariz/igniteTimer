import styled from "styled-components";

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.5rem;
  button{
    width: 100%;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 1.25rem;
    border: 1px solid transparent;
    background-color: ${props => props.theme.product.green};
    color: ${props => props.theme.gray[7]};
    
  }
`

export const SetTimer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.6;
  font-weight: bold;
  flex-wrap: wrap;
  color: ${props => props.theme.gray[7]};
  input{
    background: transparent;
    border-top: none;
    border-right:none;
    border-left:none;
    max-width:fit-content;
  }
`

export const DisplayTimer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  display: flex;
  gap: 1rem;
  color: ${props => props.theme.gray[7]};
  span{
    border-radius: 8px;
    padding: 2rem 1rem;
    background-color: ${props => props.theme.gray[3]};
  }
`
export const Separator = styled.div`
  width: 5.8rem;
  display: flex;
  justify-content: center;
  overflow: hidden;
  padding: 2rem 0;
  background-color: transparent;
  color: ${props => props.theme.product.green};
`