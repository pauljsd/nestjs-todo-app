import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayServiceService } from './play-service/play-service.service';
import { MesssageFormatterService } from './messsage-formatter/messsage-formatter.service';
import { LoggerService } from './logger/logger.service';
import { TasksModule } from './tasks/tasks.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { appConfig } from './config/app.config';
import { appConfigSchema } from './config/config.types';
import { typeORMConfig } from './config/database.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypedConfigService } from './config/type-config.service';
import { Task } from './tasks/task.entity';
import { User } from './users/user.entity';
import { TaskLabel } from './tasks/task-label.entity';
import { authConfig } from './config/auth.config';
import { UserModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (ConfigService: TypedConfigService) => ({
        ...ConfigService.get('database'),
        entities: [Task, User, TaskLabel],
      }),
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, typeORMConfig, authConfig],
      validationSchema: appConfigSchema,
      validationOptions: {
        // allowUnknown: false,
        abortEarly: true,
      },
    }),

    TasksModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    PlayServiceService,
    MesssageFormatterService,
    LoggerService,
  ],
})
export class AppModule {}
