export interface EquipmentsInterface {
  id: number;
  name: string;
  brand: string;
  model: string;
  assignedTo?: number | null;
  assignedToName?: string;
}

export const generateEquipments = (total: number): EquipmentsInterface[] => {
  const equipments: EquipmentsInterface[] = [];

  for (let i = 1; i <= total; i++) {
    equipments.push({
      id: i,
      name: `Device ${i.toString().padStart(2, '0')}`,
      brand: "Janam",
      model: "XT2",
      assignedTo: i % 3 === 0 ? Math.ceil(Math.random() * 3) : null,
      assignedToName: i % 3 === 0 ? `Gate ${String.fromCharCode(64 + Math.ceil(Math.random() * 3))}` : undefined,
    });
  }

  return equipments;
};

export const equipments = generateEquipments(500);