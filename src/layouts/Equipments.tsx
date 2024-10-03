import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useEffect, useState } from "react";
import { equipments } from "../data/equipments";
import { gates } from "../data/gates";
import { Container, SideContainer } from "./Equipments.style";
import { Card } from "../components/Card";
import SearchBar from "../components/SearchBar/SearchBar";
import {
  DnDBody,
  DnDCell,
  DnDHead,
  DnDHeader,
  DnDList,
  DnDRow,
  DropArea,
} from "../components/DnDList";

export default function Equipments() {
  const [allItems, setAllItems] = useState(equipments);
  const [filteredItems, setFilteredItems] = useState(equipments);
  const [lastQuery, setLastQuery] = useState("");

  const handleSearch = (query: string) => {
    setLastQuery(query);
    const lowerCaseQuery = query.toLowerCase();
    const filtered = allItems.filter(
      (item) =>
        item.name.toLowerCase().includes(lowerCaseQuery) ||
        item.brand.toLowerCase().includes(lowerCaseQuery) ||
        item.model.toLowerCase().includes(lowerCaseQuery)
    );

    setFilteredItems(filtered);
  };

  const handleDrop = (id: number, itemsToMove?: number[]) => {
    setAllItems((prevItems) =>
      prevItems.map((i) =>
        itemsToMove?.includes(i.id)
          ? {
              ...i,
              assignedTo: id,
              assignedToName: gates.find((g) => g.id === id)?.name,
            }
          : i
      )
    );
  };

  useEffect(() => {
    handleSearch(lastQuery);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allItems]);

  return (
    <Container>
      <DndProvider backend={HTML5Backend}>
        <SideContainer>
          <div style={{ marginBottom: "10px" }}>
            <SearchBar onSearch={handleSearch} />
            <DnDList>
              <DnDHeader numberOfColumns={3} showSelector>
                <DnDHead>Name</DnDHead>
                <DnDHead>Make/Model</DnDHead>
                <DnDHead>Assigned</DnDHead>
              </DnDHeader>
              <DnDBody style={{ marginTop: "20px" }}>
                {filteredItems.map((item) => (
                  <DnDRow
                    key={item.id}
                    id={item.id}
                    numberOfColumns={3}
                    showSelector
                  >
                    <DnDCell>{item.name}</DnDCell>
                    <DnDCell>{`${item.brand}/${item.model}`}</DnDCell>
                    <DnDCell>{item.assignedToName}</DnDCell>
                  </DnDRow>
                ))}
              </DnDBody>
            </DnDList>
          </div>
        </SideContainer>

        <SideContainer>
          {gates.map((gate) => (
            <Card
              key={gate.id}
              title={gate.name}
              style={{ marginBottom: "10px" }}
            >
              <DropArea
                key={gate.id}
                items={allItems.filter((i) => i.assignedTo === gate.id)}
                id={gate.id}
                onDrop={handleDrop}
              >
                <DnDList key={gate.id}>
                  <DnDBody hideOnDrag>
                    {allItems
                      .filter((e) => e.assignedTo === gate.id)
                      .map((item) => (
                        <DnDRow
                          key={item.id}
                          id={item.id}
                          numberOfColumns={3}
                          showSelector
                        >
                          <DnDCell>{item.name}</DnDCell>
                          <DnDCell>{`${item.brand}/${item.model}`}</DnDCell>
                          <DnDCell>{item.assignedToName}</DnDCell>
                        </DnDRow>
                      ))}
                  </DnDBody>
                </DnDList>
              </DropArea>
            </Card>
          ))}
        </SideContainer>
      </DndProvider>
    </Container>
  );
}
