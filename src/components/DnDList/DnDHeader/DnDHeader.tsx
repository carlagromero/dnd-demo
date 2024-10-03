import React from "react";
import { StyledDnDHeader } from "./DnDHeader.style";
import DnDHead from "../DnDHead/DnDHead";

interface DnDHeaderProps {
  numberOfColumns: number;
  showSelector?: boolean;
  showDragIcon?: boolean;
  children: React.ReactNode;
}

const DnDHeader: React.FC<DnDHeaderProps> = ({
  numberOfColumns,
  showSelector = false,
  showDragIcon = true,
  children,
}) => {
  return (
    <StyledDnDHeader
      numberOfColumns={numberOfColumns}
      showSelector={showSelector}
      showDraggableIcon={showDragIcon}
    >
      {showDragIcon && <DnDHead> </DnDHead>}
      {showSelector && (
        <DnDHead>
          <input
            type="checkbox"
            // checked={selectedItems.includes(id)}
            // onChange={() => handleCheckboxChange(id)}
          />
        </DnDHead>
      )}
      {children}
    </StyledDnDHeader>
  );
};

export default DnDHeader;
