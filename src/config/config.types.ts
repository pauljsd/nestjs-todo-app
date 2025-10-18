import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppConfig } from './app.config';
import * as Joi from 'joi';
import { AuthConfig } from './auth.config';

export interface ConfigType {
  app: AppConfig;
  database: TypeOrmModuleOptions;
  auth: AuthConfig;
}

export const appConfigSchema = Joi.object({
  APP_MESSAGE_PREFIX: Joi.string().default('Hello '),
  // DB_HOST: Joi.string().default('localhost'),
  DB_HOST: Joi.string().default('localhost'),
  DB_PORT: Joi.number().default(5432),
  DB_USER: Joi.string().optional(),
  DB_PASSWORD: Joi.string().optional(),
  DB_DATABASE: Joi.string().optional(),
  DB_SYNC: Joi.number().valid(0, 1).default(1),
  JWT_SECRET: Joi.string().required(),
  JWT_EXPIRES_IN: Joi.string().required(),
});
