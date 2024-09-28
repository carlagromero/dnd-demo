import React from "react";
import { useDrag } from "react-dnd";
import {
  StyledDnDListItemCell,
  StyledDnDListItemRow,
} from "./DnDListItem.style.ts";
import { EquipmentsInterface } from "../../data/equipments.ts";
import { MdOutlineDragIndicator } from "react-icons/md";

interface DnDListItemsProps {
  item: EquipmentsInterface;
  origin: number;
  fieldsToShow: string[];
  handleCheckboxChange: (itemId: number) => void;
  isSelected: boolean;
  selectedItems: number[];
  setSelectedItems: React.Dispatch<React.SetStateAction<number[]>>;
}

const DnDListItem: React.FC<DnDListItemsProps> = ({
  item,
  origin,
  fieldsToShow,
  handleCheckboxChange,
  isSelected,
  selectedItems,
  setSelectedItems,
}) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "ITEM",
      item: {
        id: item.id,
        ids: selectedItems.includes(item.id) ? selectedItems : [item.id],
        origin,
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
      canDrag: () => !item.assignedTo || origin !== 0,
    }),
    [item, selectedItems]
  );

  console.log("fieldsToShow.length", fieldsToShow);

  return (
    <StyledDnDListItemRow
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
      }}
      // Number of fields + checkbox column
      columnCount={fieldsToShow.length + 1}
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
    </StyledDnDListItemRow>
  );
};

export default DnDListItem;
