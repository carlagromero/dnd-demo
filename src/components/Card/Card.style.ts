import styled from "styled-components";

export const CardStyled = styled.div`
  font-family: Roboto;
  padding: 16px 24px;
  border-radius: 8px;
  border: 1px solid #e6e9edcc;
  background-color: #ffffff;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
  overflow: hidden;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #181f25;
  font-family: Roboto;
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  text-align: left;
`;

export const CardBody = styled.div`
  overflow: auto;
  height: 200px;
`;

export const IconWrapper = styled.div`
  cursor: pointer;

  &:hover {
    color: gray;
  }
`;
