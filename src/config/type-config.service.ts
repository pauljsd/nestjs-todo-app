import { ConfigService } from '@nestjs/config';
import { ConfigType } from './config.types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TypedConfigService extends ConfigService<ConfigType> {}
