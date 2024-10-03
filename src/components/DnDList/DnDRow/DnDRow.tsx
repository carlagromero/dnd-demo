import React, { useState } from "react";
import { StyledDnDRow } from "./DnDRow.style";
import DnDCell from "../DnDCell/DnDCell";
import { MdOutlineDragIndicator } from "react-icons/md";
import { useDrag } from "react-dnd";

interface DnDRowProps {
  id: number;
  numberOfColumns: number;
  showSelector?: boolean;
  showDragIcon?: boolean;
  children: React.ReactNode;
}

const DnDRow: React.FC<DnDRowProps> = ({
  id,
  numberOfColumns,
  showSelector = false,
  showDragIcon = true,
  children,
}) => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "ITEM",
      item: {
        ids: selectedItems.includes(id) ? selectedItems : [id],
      },
      end: (_draggedItem, monitor) => {
        const dropResult = monitor.getDropResult();
        if (dropResult) {
          setSelectedItems([]);
        }
      },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      // canDrag: () => !item.assignedTo || assignedTo !== 0,
    }),
    [id, selectedItems]
  );

  const handleCheckboxChange = (itemId: number) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(itemId)
        ? prevSelectedItems.filter((id) => id !== itemId)
        : [...prevSelectedItems, itemId]
    );
  };

  return (
    <>
      <StyledDnDRow
        ref={drag}
        numberOfColumns={numberOfColumns}
        showSelector={showSelector}
        showDragIcon={showDragIcon}
        isDragging={isDragging}
      >
        {showDragIcon && (
          <DnDCell>
            <MdOutlineDragIndicator />
          </DnDCell>
        )}
        {showSelector && (
          <DnDCell>
            <input
              type="checkbox"
              checked={selectedItems.includes(id)}
              onChange={() => handleCheckboxChange(id)}
            />
          </DnDCell>
        )}
        {children}
      </StyledDnDRow>
    </>
  );
};

export default DnDRow;
