export interface GatesInterface {
  id: number;
  name: string;
  devices: number[];
}

export const generateGates = (total: number): GatesInterface[] => {
  const gates: GatesInterface[] = [];

  for (let i = 1; i <= total; i++) {
    gates.push({
      id: i,
      name: `Gate ${String.fromCharCode(64 + i)}`,
      devices: [],
    });
  }

  return gates;
};

export const gates = generateGates(6);
