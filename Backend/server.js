import express from "express";
import { config } from "dotenv";
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

// Get the directory name of the current module
const __dirname = dirname(fileURLToPath(import.meta.url));

// Load environment variables from .env file inside the config folder
config({ path: resolve(__dirname, '../config', '.env') });

const app = express();

const PORT = process.env.SERVER_PORT;

app.listen(PORT, () => console.log(`Server now connected to port ${PORT}`));
