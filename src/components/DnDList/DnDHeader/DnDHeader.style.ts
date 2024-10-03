import styled from "styled-components";

interface StyledDnDHeaderProps {
  numberOfColumns: number;
  showSelector: boolean;
  showDraggableIcon: boolean;
}

export const StyledDnDHeader = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !["numberOfColumns", "showSelector", "showDragIcon"].includes(prop),
})<StyledDnDHeaderProps>`
  display: grid;
  grid-template-columns: ${({ numberOfColumns, showSelector, showDraggableIcon: showDragIcon }) =>
    `${showSelector ? "40px" : ""} ${
      showDragIcon ? "40px" : ""
    } repeat(${numberOfColumns}, 1fr) `};
  padding: 16px;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  border-bottom: 1px solid #181f25;
`;
