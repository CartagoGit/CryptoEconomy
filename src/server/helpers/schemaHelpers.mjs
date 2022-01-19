import { getSchema } from "../schemas/root.mjs";

//Helper to get only keys from object in the Schema
export const getKeysInSchemaData = (body, type) => {
	const schema = getSchema(type);
	return Object.assign(
		{},
		...Object.keys(schema).map((key) => ({
			[key]: (key in body ? body : schema)[key]
		}))
	);
};

//Helper to write db only with Schema params
export const createDataOnlyWithSchema = (db, type) => {
	const dataWithSchema = getKeysInSchemaData(db.data, type);
	if (JSON.stringify(db.data) !== JSON.stringify(dataWithSchema)) {
		db.data = dataWithSchema;
		db.write();
	}
};

//Helper to get Amount in Schemas
