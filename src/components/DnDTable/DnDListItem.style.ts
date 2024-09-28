import styled from "styled-components";

interface StyledDnDListItemRowProps {
  columnCount: number;
}

export const StyledDnDListItemRow = styled.div<StyledDnDListItemRowProps>`
  display: grid;
  grid-template-columns: ${({ columnCount }) =>
    `40px repeat(${columnCount}, 1fr) 40px`};
  margin-bottom: 10px;
  padding: 24px 16px;
  border-radius: 8px;
  border: 1px solid #e6e9ed;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
`;

export const StyledDnDListItemCell = styled.div`
  min-width: 50px;
`;
