import { Injectable } from '@nestjs/common';
import { PlayServiceService } from './play-service/play-service.service';
import { MesssageFormatterService } from './messsage-formatter/messsage-formatter.service';
import { LoggerService } from './logger/logger.service';
import { ConfigService } from '@nestjs/config';
import { ConfigType } from './config/config.types';
import { AppConfig } from './config/app.config';
import { TypedConfigService } from './config/type-config.service';

@Injectable()
export class AppService {
  constructor(
    private readonly log: LoggerService,
    private readonly configService: ConfigService<ConfigType>,
    // private readonly configService: TypedConfigService,
  ) {}

  getHello(): String {
    const prefix = this.configService.get<AppConfig>('app')?.messagePrefix;
    return `${prefix}${this.log.log()}`;
  }
}
