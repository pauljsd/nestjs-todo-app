import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './users/decorators/public.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Public()
  getHello(): String {
    return this.appService.getHello();
  }

  @Get('/health')
  check() {
    return true;
  }
}
