import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 10px
`;

export const StyledDnDListItemCell = styled.div`
  ${({ theme }) => theme?.dndListItem?.cell};
`;
