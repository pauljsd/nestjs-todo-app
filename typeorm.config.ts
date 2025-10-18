import { config } from 'dotenv';
import { DataSource } from 'typeorm';

config();

const isProduction = !!process.env.DB_URL;

export default new DataSource({
  type: 'postgres',
  ...(isProduction
    ? {
        url: process.env.DB_URL, // For production (cloud)
      }
    : {
        host: process.env.DB_HOST ?? 'localhost',
        port: parseInt(process.env.DB_PORT ?? '5432'),
        username: process.env.DB_USER ?? 'postgres',
        password: process.env.DB_PASSWORD ?? 'changethepassword',
        database: process.env.DB_DATABASE ?? 'postgres',
      }),

  // synchronize: false,
  synchronize: Boolean(Number(process.env.DB_SYNC ?? 1)),
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/src/migrations/*{.ts,.js}'],
  extra: isProduction
    ? {
        ssl: {
          rejectUnauthorized: false,
        },
      }
    : {},
});
