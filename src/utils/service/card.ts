import { IAnimal } from "@/app/services/servicesPage";

export const renderAnimalNames = (animals: IAnimal[]) => {
  if (!animals || animals.length === 0) return "Não informado";

  const names = animals.map((animal) => animal.name);

  return names.join(", ");
};
