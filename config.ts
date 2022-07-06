import { config } from "dotenv";
import * as path from "path";
config();

export const Config = {
  PORT: process.env.PORT,
  // relative to ./out -- emitted ts files
  PROJECT_ROOT: `${path.resolve(__dirname).replace("out", "")}`,
  API_URL: process.env.API_URL,
} as const;
