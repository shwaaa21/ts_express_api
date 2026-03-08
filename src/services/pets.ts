import { pets, type Pet } from "../data/pets";
import { NotFoundError } from "../errors";

export function getAllPets(): Pet[] {
	return pets;
}

export function getPetById(id: string): Pet | NotFoundError {
	const pet = pets.find((p) => p.id.toString() === id);
	if (!pet) return new NotFoundError({ id });
	return pet;
}
