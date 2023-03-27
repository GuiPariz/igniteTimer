import styled, { css } from "styled-components";

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme.gray.withe};
  }
`;

export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      padding: 1rem;
      text-align: left;
      font-size: 0.875rem;
      line-height: 1.6;
      color: ${(props) => props.theme.gray.withe};
      background-color: ${(props) => props.theme.gray[4]};

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }
      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;
      border-top: 4px solid ${(props) => props.theme.gray[2]};
      background-color: ${(props) => props.theme.gray[3]};

      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }
      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`;

interface StatusProps {
  statuscolor: "yellow" | "red" | "green";
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: "";
    min-width: 0.5rem;
    min-height: 0.5rem;
    border-radius: 50%;
    ${(props) =>
      props.statuscolor === "yellow" &&
      css`
        background-color: ${(props) => props.theme.feedback.yellow};
      `}
    ${(props) =>
      props.statuscolor === "red" &&
      css`
        background-color: ${(props) => props.theme.feedback.red};
      `}
    ${(props) =>
      props.statuscolor === "green" &&
      css`
        background-color: ${(props) => props.theme.product.green};
      `}
  }
`;
