import express from "express";
import type { Express, Request, Response } from "express";
import cors from "cors";
import * as errore from "errore";

import { getAllPets, getPetById } from "./services/pets";
import { NotFoundError } from "./errors";

const PORT = 8000;
const app: Express = express();

app.use(cors());

app.get("/", (req: Request, res: Response) => {
	const pets = getAllPets();
	res.json(pets);
});

app.get("/:id", (req: Request, res: Response) => {
	const result = getPetById(req.params.id);
	if (result instanceof Error) {
		const response = errore.matchError(result, {
			NotFoundError: (e) => ({
				status: 404,
				body: { message: e.message },
			}),
			Error: (e) => ({
				status: 500,
				body: { message: e.message },
			}),
		});
		return res.status(response.status).json(response.body);
	}
	res.json(result);
});

app.use((req: Request, res: Response) => {
	res.status(404).json({ message: "Endpoint not found" });
});

app.listen(PORT, (): void => {
	console.log("Listening on port: ", PORT);
});
