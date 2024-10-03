import React from "react";
import { useDragLayer } from "react-dnd";
import { StyledDnDBody } from "./DnDBody.style";

interface DnDBodyProps {
  hideOnDrag?: boolean;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const DnDBody: React.FC<DnDBodyProps> = ({ hideOnDrag = false, style, children }) => {
  const { isDragging } = useDragLayer((monitor) => ({
    isDragging: monitor.isDragging(),
  }));

  return (
    <StyledDnDBody style={style} hideOnDrag={hideOnDrag && isDragging}>
      {children}
    </StyledDnDBody>
  );
};

export default DnDBody;
