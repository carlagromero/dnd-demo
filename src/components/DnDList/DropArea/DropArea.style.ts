import styled from "styled-components";

interface StyledDropAreaProps {
  isDragging: boolean;
  isOver: boolean;
}

export const StyledDropArea = styled.div.withConfig({
  shouldForwardProp: (prop) => !["isDragging", "isOver"].includes(prop),
})<StyledDropAreaProps>`
  border: ${({ isDragging }) => (isDragging ? "1px dashed #1856a7" : "none")};
  border-radius: ${({ isDragging }) => (isDragging ? "8px" : "0")};
  background-color: ${({ isDragging }) => (isDragging ? "#F5F9FE" : "")};
  background-color: ${({ isOver }) => (isOver ? "#1856A7" : "")};
  opacity: ${({ isOver }) => (isOver ? "0.3" : "1")};
  height: calc(100% - 10px);
`;
