import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: path.resolve(__dirname, "..", "..", ".env") });

export const appPort = Number(process.env.APP_PORT ?? 3000);
