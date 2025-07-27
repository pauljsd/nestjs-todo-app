import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypedConfigService } from './type-config.service';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [TypedConfigService],
  exports: [TypedConfigService],
})
export class TypedConfigModule {}