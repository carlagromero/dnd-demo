import React from "react";
import { useDragLayer, useDrop } from "react-dnd";
import { StyledDropArea } from "./DropArea.style";

interface DropAreaProps<T> {
  id: number;
  items: T[];
  onDrop: (id: number, itemsId?: number[]) => void;
  children: React.ReactNode;
}

const DropArea = <T,>({ id, items, onDrop, children }: DropAreaProps<T>) => {
  const { isDragging } = useDragLayer((monitor) => ({
    isDragging: monitor.isDragging(),
  }));
  const [{ isOver }, drop] = useDrop(
    {
      accept: id !== 0 ? "ITEM" : "",
      drop: (item: { ids?: number[] }) => {
        const itemsToMove = item.ids;

        onDrop(id, itemsToMove);
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    },
    [items]
  );

  return (
    <StyledDropArea ref={drop} isDragging={isDragging} isOver={isOver}>
      {children}
    </StyledDropArea>
  );
};

export default DropArea;
