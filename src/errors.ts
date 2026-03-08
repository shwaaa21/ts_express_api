import * as errore from "errore";

export class NotFoundError extends errore.createTaggedError({
	name: "NotFoundError",
	message: "Pet with id $id not found",
}) {}
