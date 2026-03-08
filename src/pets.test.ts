import { describe, it, expect } from "vitest";
import request from "supertest";
import express from "express";
import cors from "cors";

import { getAllPets, getPetById } from "./services/pets";

const app = express();
app.use(cors());
app.get("/", (req, res) => {
	const pets = getAllPets();
	res.json(pets);
});
app.get("/:id", (req, res) => {
	const result = getPetById(req.params.id);
	if (result instanceof Error) {
		return res.status(404).json({ message: result.message });
	}
	res.json(result);
});

describe("GET /", () => {
	it("returns all pets", async () => {
		const res = await request(app).get("/");
		expect(res.status).toBe(200);
		expect(res.body).toHaveLength(3);
		expect(res.body[0].name).toBe("Buddy");
	});
});

describe("GET /:id", () => {
	it("returns pet when found", async () => {
		const res = await request(app).get("/1");
		expect(res.status).toBe(200);
		expect(res.body.name).toBe("Buddy");
	});

	it("returns 404 when pet not found", async () => {
		const res = await request(app).get("/999");
		expect(res.status).toBe(404);
		expect(res.body.message).toBe("Pet with id 999 not found");
	});
});
