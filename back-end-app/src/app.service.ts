import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World from Codelab ci/cd | Berenguer Nest.js is working!';
  }
}
