import React, { useState, useRef } from "react";
import { CardBody, CardHeader, CardStyled, IconWrapper } from "./Card.style";
import { GoChevronDown, GoChevronRight } from "react-icons/go";

interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  const [isCollapsible, setIsCollapsible] = useState(false);

  const dragTimeoutRef = useRef<number | null>(null);

  const handleClick = () => {
    setIsCollapsible((prevState) => !prevState);
  };

  const handleDragEnter = () => {
    dragTimeoutRef.current = window.setTimeout(() => {
      setIsCollapsible(true);
    }, 500);
  };

  const handleDragLeave = () => {
    if (dragTimeoutRef.current) {
      clearTimeout(dragTimeoutRef.current);
      dragTimeoutRef.current = null;
    }
  };

  return (
    <CardStyled>
      <CardHeader>
        {title}
        <IconWrapper
          onClick={handleClick}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
        >
          {isCollapsible ? <GoChevronDown /> : <GoChevronRight />}
        </IconWrapper>
      </CardHeader>
      {isCollapsible && <CardBody>{children}</CardBody>}
    </CardStyled>
  );
};

export default Card;
