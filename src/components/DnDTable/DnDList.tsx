import React, { useState } from "react";
import DnDListItems from "./DnDListItem.tsx";
import { useDrop } from "react-dnd";
import { StyledDndListContainer } from "./DnDList.style";
import { EquipmentsInterface } from "../../data/equipments.ts";

interface DnDListProps {
  items: EquipmentsInterface[];
  setAllItems: React.Dispatch<React.SetStateAction<EquipmentsInterface[]>>;
  id: number;
  name: string;
  fieldsToShow: string[];
  showHeader: boolean;
}

const DnDList: React.FC<DnDListProps> = ({
  items,
  setAllItems,
  id,
  name,
  fieldsToShow,
  showHeader,
}) => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const [{ isOver }, drop] = useDrop(
    {
      accept: id !== 0 ? "ITEM" : "",
      drop: (item: { ids?: number[] }) => {
        const itemsToMove = item.ids;

        setAllItems((prevItems) =>
          prevItems.map((i) =>
            itemsToMove?.includes(i.id)
              ? {
                  ...i,
                  assignedTo: id,
                  assignedToName: name,
                }
              : i
          )
        );
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    },
    [items]
  );

  const handleCheckboxChange = (itemId: number) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(itemId)
        ? prevSelectedItems.filter((id) => id !== itemId)
        : [...prevSelectedItems, itemId]
    );
  };

  return (
    <StyledDndListContainer ref={drop} isOver={isOver}>
      {showHeader && <h2>HEADER</h2>}
      {items
        .sort((a) => (a.assignedTo === null ? -1 : 1))
        .map((item) => (
          <DnDListItems
            key={item.id}
            item={item}
            assignedTo={id}
            fieldsToShow={fieldsToShow}
            handleCheckboxChange={handleCheckboxChange}
            isSelected={selectedItems.includes(item.id)}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
          />
        ))}
    </StyledDndListContainer>
  );
};

export default DnDList;
