import { gates } from "./gates";

export interface EquipmentsInterface {
  id: number;
  name: string;
  brand: string;
  model: string;
  assignedTo?: number | null;
  assignedToName?: string | null;
}

export const generateEquipments = (total: number): EquipmentsInterface[] => {
  const equipments: EquipmentsInterface[] = [];

  for (let i = 1; i <= total; i++) {
    const gateId = i % 3 === 0 ? Math.ceil(Math.random() * 3) : null;

    equipments.push({
      id: i,
      name: `Device ${i.toString().padStart(2, "0")}`,
      brand: "Janam",
      model: "XT2",
      assignedTo: gateId,
      assignedToName: gateId ? gates.find((g) => g.id === gateId)?.name : null,
    });
  }

  return equipments;
};

export const equipments = generateEquipments(500);
