import styled from "styled-components";

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.5rem;
`;
export const ContDownButton = styled.button`
  width: 100%;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1.25rem;
  border: 1px solid transparent;
  font-weight: bold;
  background-color: ${(props) => props.theme.product.green};
  color: ${(props) => props.theme.gray[7]};
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  &:not(:disabled):hover {
    background-color: ${(props) => props.theme.product.green_dark};
  }
`;

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
  color: ${(props) => props.theme.gray[7]};
`;

const BaseInput = styled.input`
  height: 2.5rem;
  background: transparent;
  border:0;
  border-bottom: 2px solid ${props => props.theme.gray[4]};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${props => props.theme.gray[7]};
  :focus{
    box-shadow: none !important;
  }
  &:hover{
    border-color: ${props => props.theme.product.green} ;
  }
`;

export const TaskInput = styled(BaseInput)`
  flex: 1;
  &::-webkit-calendar-picker-indicator{
    display: none !important;
  }
`
export const TimerInput = styled(BaseInput)`
  width: 4rem;
`

export const DisplayTimer = styled.div`
  font-family: "Roboto Mono", monospace;
  font-size: 10rem;
  line-height: 8rem;
  display: flex;
  gap: 1rem;
  color: ${(props) => props.theme.gray[7]};
  span {
    border-radius: 8px;
    padding: 2rem 1rem;
    background-color: ${(props) => props.theme.gray[3]};
  }
`;

export const Separator = styled.div`
  width: 5.8rem;
  display: flex;
  justify-content: center;
  overflow: hidden;
  padding: 2rem 0;
  background-color: transparent;
  color: ${(props) => props.theme.product.green};
`;
