import styled from "styled-components";

interface StyledDndListContainerProps {
  isOver: boolean;
}

export const StyledDndListContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => !["isOver"].includes(prop),
})<StyledDndListContainerProps>`
  font-family: Roboto;
  padding: 16px 0;
  background-color: ${({ isOver }) => (isOver ? "#f0f0f0" : "white")};
  height: calc(100% - 32px);
  overflow: auto;
`;

export const StyledEmptyState = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
`;
