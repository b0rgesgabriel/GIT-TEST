import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log('Bem vindo ao curso de nodejs com nestjs');
    return this.appService.getHello();
  }
}
