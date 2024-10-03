import styled from "styled-components";

interface StyledDnDListItemRowProps {
  numberOfColumns: number;
  showSelector: boolean;
  showDragIcon: boolean;
  isDragging: boolean;
}

export const StyledDnDRow = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !["numberOfColumns", "showSelector", "showDragIcon", "isDragging"].includes(
      prop
    ),
})<StyledDnDListItemRowProps>`
  display: grid;
  grid-template-columns: ${({ numberOfColumns, showSelector, showDragIcon }) =>
    `${showSelector ? "40px" : ""} ${
      showDragIcon ? "40px" : ""
    } repeat(${numberOfColumns}, 1fr) `};
  margin-bottom: 10px;
  padding: 24px 16px;
  border-radius: 8px;
  border: 1px solid #e6e9ed;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  opacity: ${({ isDragging }) => `${isDragging ? "0.5" : "1"}`};
  background-color: white;
  cursor: ${({ showDragIcon }) => `${showDragIcon ? "grab" : "cursor"}`};
`;
