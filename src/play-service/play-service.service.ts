import { Injectable } from '@nestjs/common';

@Injectable()
export class PlayServiceService {
  public getMoney(): string {
    return '100k dollars';
  }
}
