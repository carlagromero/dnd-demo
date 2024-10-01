import React from "react";
import { useDrag } from "react-dnd";
import {
  StyledDnDListItemCell,
  StyledDnDListItemRow,
} from "./DnDListItem.style.ts";
import { EquipmentsInterface } from "../../data/equipments.ts";
import { MdOutlineDragIndicator } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";

interface DnDListItemsProps {
  item: EquipmentsInterface;
  fieldsToShow: (keyof EquipmentsInterface)[];
  handleCheckboxChange: (itemId: number) => void;
  isSelected: boolean;
  selectedItems: number[];
  setSelectedItems: React.Dispatch<React.SetStateAction<number[]>>;
  onDelete: (itemId: number) => void;
}

const DnDListItem: React.FC<DnDListItemsProps> = ({
  item,
  fieldsToShow,
  handleCheckboxChange,
  isSelected,
  selectedItems,
  setSelectedItems,
  onDelete,
}) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "ITEM",
      item: {
        ids: selectedItems.includes(item.id) ? selectedItems : [item.id],
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
    [item, selectedItems]
  );

  return (
    <StyledDnDListItemRow
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
      }}
      // Number of fields + checkbox + delete
      columnCount={fieldsToShow.length + 2}
    >
      <StyledDnDListItemCell>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => handleCheckboxChange(item.id)}
        />
      </StyledDnDListItemCell>
      <StyledDnDListItemCell>
        <MdOutlineDragIndicator />
      </StyledDnDListItemCell>
      {fieldsToShow.map((field) => (
        <StyledDnDListItemCell key={field}>
          {item[field] ?? "-"}
        </StyledDnDListItemCell>
      ))}
      <StyledDnDListItemCell>
        {item.assignedTo && (
          <RiDeleteBin5Line
            onClick={() => onDelete(item.id)}
            style={{ cursor: "pointer" }}
          />
        )}
      </StyledDnDListItemCell>
    </StyledDnDListItemRow>
  );
};

export default DnDListItem;
