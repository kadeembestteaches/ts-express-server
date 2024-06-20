import dotenv from "dotenv";

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY || "secret-dev";
const PORT = Number(process.env.PORT) || 3000;

export {
  SECRET_KEY,
  PORT
}

