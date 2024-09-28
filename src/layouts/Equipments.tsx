import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DnDList } from "../components/DnDTable";
import { useEffect, useState } from "react";
import { equipments } from "../data/equipments";
import { gates } from "../data/gates";
import { Container, SideContainer } from "./Equipments.style";
import { Card } from "../components/Card";
import SearchBar from "../components/SearchBar/SearchBar";

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
            <DnDList
              id={0}
              name="source"
              items={filteredItems}
              setAllItems={setAllItems}
              fieldsToShow={["name", "brand", "model", "assignedToName"]}
              showHeader
            />
          </div>
        </SideContainer>

        <SideContainer>
          {gates.map((gate) => (
            <Card title={gate.name} key={gate.id}>
              <DnDList
                id={gate.id}
                name={gate.name}
                items={allItems.filter((i) => i.assignedTo === gate.id)}
                setAllItems={setAllItems}
                fieldsToShow={["name", "brand", "model"]}
                showHeader={false}
              />
            </Card>
          ))}
        </SideContainer>
      </DndProvider>
    </Container>
  );
}
