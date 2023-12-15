import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { SkipThrottle, Throttle, ThrottlerException, ThrottlerGuard } from '@nestjs/throttler';

@Controller()
// @SkipThrottle()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @SkipThrottle()
  getHello(): string {
    return this.appService.getHello();
  }


  @Get('hey')
  @SkipThrottle({ default: false })
  hey(): string {
    return 'hey man how are you doing?';
  }

  @Get('user')
  @Throttle({ default: { limit: 5, ttl: 20000 } })
  user(): string {
    return 'this user is enjoying chrismas';
   
  }
}
