export interface GatesInterface {
  id: number;
  name: string;
}

export const generateGates = (total: number): GatesInterface[] => {
  const gates: GatesInterface[] = [];

  for (let i = 1; i <= total; i++) {
    gates.push({
      id: i,
      name: `Gate ${String.fromCharCode(64 + i)}`,
    });
  }

  return gates;
};

export const gates = generateGates(6);
