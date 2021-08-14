import dotenv from 'dotenv';
import app from './src/app';

dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));
