import styled from "styled-components";

interface StyledDnDBodyProps {
    hideOnDrag: boolean;
}

export const StyledDnDBody = styled.div.withConfig({
  shouldForwardProp: (prop) => !["hideOnDrag"].includes(prop),
})<StyledDnDBodyProps>`
  display: grid;
  display: ${({ hideOnDrag }) => `${hideOnDrag ? "none" : ""}`};
`;
