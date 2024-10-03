import React from "react";
import { StyledDnDCell } from "./DnDCell.style";

interface DnDCellProps {
  children: React.ReactNode;
}

const DnDCell: React.FC<DnDCellProps> = ({ children }) => {
  return <StyledDnDCell>{children}</StyledDnDCell>;
};

export default DnDCell;
