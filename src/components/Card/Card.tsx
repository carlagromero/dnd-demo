import React from "react";
import { CardBody, CardHeader, CardStyled } from "./Card.style";

interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <CardStyled>
      <CardHeader>{title}</CardHeader>
      <CardBody>{children}</CardBody>
    </CardStyled>
  );
};

export default Card;
