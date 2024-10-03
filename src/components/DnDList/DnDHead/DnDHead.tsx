import React from "react";
import { StyledDnDHead } from "./DnDHead.style";

interface DnDHeadProps {
  children: React.ReactNode;
}

const DnDHead: React.FC<DnDHeadProps> = ({ children }) => {
  return <StyledDnDHead>{children}</StyledDnDHead>;
};

export default DnDHead;
