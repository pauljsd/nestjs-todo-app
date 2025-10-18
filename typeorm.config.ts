import { config } from 'dotenv';
import { DataSource } from 'typeorm';

config();

const isProduction = !!process.env.DB_URL;

export default new DataSource({
  type: 'postgres',
  ...(isProduction
    ? {
        url: process.env.DATABASE_URL, // For production (cloud)
      }
    : {
        host: process.env.DB_HOST ?? 'localhost',
        port: parseInt(process.env.DB_PORT ?? '5432'),
        username: process.env.DB_USER ?? 'postgres',
        password: process.env.DB_PASSWORD ?? 'changethepassword',
        database: process.env.DB_DATABASE ?? 'postgres',
      }),

  synchronize: false,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/src/migrations/*{.ts,.js}'],
  ssl: isProduction
    ? {
        rejectUnauthorized: false, // needed for providers like Neon.tech
      }
    : false,
});
