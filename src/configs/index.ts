import path from "path";
import dotenv from "dotenv";

console.log(path.resolve(__dirname, "..", ".."));
dotenv.config({ path: path.resolve(__dirname, "..", "..") });

export const appPort = Number(process.env.APP_PORT ?? 3000);
