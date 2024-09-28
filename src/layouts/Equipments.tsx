import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DnDList } from "../components/DnDTable";
import { useState } from "react";
import { equipments } from "../data/equipments";
import { gates } from "../data/gates";
import { Container, SideContainer } from "./Equipments.style";
import { Card } from "../components/Card";

export default function Equipments() {
  const [allItems, setAllItems] = useState(equipments);

  return (
    <Container>
      <DndProvider backend={HTML5Backend}>
        <SideContainer>
          <div style={{ marginBottom: "10px" }}>
            <DnDList
              id={0}
              items={allItems}
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
