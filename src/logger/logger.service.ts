import { Injectable } from '@nestjs/common';
import { MesssageFormatterService } from 'src/messsage-formatter/messsage-formatter.service';

@Injectable()
export class LoggerService {
  constructor(private readonly formatt: MesssageFormatterService) {}

  log(): String {
    const word: string = 'Hello World';
    console.log(` ${word} ${this.formatt.format(word)}`);

    return `${this.formatt.format('Hello to the World Bro')}`;
  }
}
