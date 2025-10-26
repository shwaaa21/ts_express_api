export type Pet = {
	id: number;
	name: string;
	species: string;
	age: number;
	adopted: boolean;
	breed: string;
	intakeDate: Date;
	adoptionDate?: Date;
	medicalRecord: {
		vaccinations: string[];
		neutered: boolean;
		weight: number;
		microchipId: null | string;
	};
	photo: string;
};

export const pets: Pet[] = [
	{
		id: 1,
		name: "Buddy",
		species: "Dog",
		age: 5,
		adopted: true,
		breed: "Golden Retriever",
		intakeDate: new Date("2024-01-15"),
		medicalRecord: {
			vaccinations: ["Rabies", "Distemper"],
			neutered: true,
			weight: 30,
			microchipId: "123456789",
		},
		photo: "https://example.com/photos/buddy.jpg",
	},
	{
		id: 2,
		name: "Mittens",
		species: "Cat",
		age: 3,
		adopted: false,
		breed: "Siamese",
		intakeDate: new Date("2024-01-20"),
		medicalRecord: {
			vaccinations: ["Rabies", "Feline Leukemia"],
			neutered: true,
			weight: 10,
			microchipId: null,
		},
		photo: "https://example.com/photos/mittens.jpg",
	},
	{
		id: 3,
		name: "Charlie",
		species: "Dog",
		age: 2,
		adopted: true,
		breed: "Beagle",
		intakeDate: new Date("2024-01-25"),
		adoptionDate: new Date("2024-02-10"),
		medicalRecord: {
			vaccinations: ["Rabies"],
			neutered: true,
			weight: 20,
			microchipId: "987654321",
		},
		photo: "https://example.com/photos/charlie.jpg",
	},
];
