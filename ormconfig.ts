const {
	TYPEORM_HOST: host,
	TYPE_ORM: port,
	TYPEORM_USERNAME: username,
	TYPEORM_PASSWORD: password,
	TYPEORM_DATABASE: database,
} = process.env;

const ormconfig = {
	type: "mysql",
	host,
	port: Number(port),
	username,
	password,
	database,
	synchronize: true,
	logging: false,
	entities: ["src/entity/**/*.ts"],
	cli: {
		entitiesDir: "src/entity",
	},
};
export default ormconfig;
