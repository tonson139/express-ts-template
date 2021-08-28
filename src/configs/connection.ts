import { createConnection } from "typeorm";

const connectSql = async () => {
	const connection = await createConnection();
	return connection;
};
export default connectSql;
