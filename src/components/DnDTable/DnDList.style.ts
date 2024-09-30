import styled from "styled-components";

interface StyledDndListContainerProps {
  isOver: boolean;
}

export const StyledDndListContainer = styled.div<StyledDndListContainerProps>`
  font-family: Roboto;
  padding: 16px 0;
  background-color: ${({ isOver }) => (isOver ? "#f0f0f0" : "white")};
  height: calc(100% - 32px);
  overflow: auto;
`;
