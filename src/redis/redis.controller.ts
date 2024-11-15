import { Controller, Post, Body } from '@nestjs/common';
import { RedisService } from './redis.service';

@Controller('redis')
export class RedisController {
  constructor(private readonly redisService: RedisService) {}

  @Post('set')
  async setKey(
    @Body('key') key: string,
    @Body('value') value: any,
    @Body('ttl') ttl: number,
  ): Promise<void> {
    await this.redisService.setKeyWithExpiry(key, value, ttl);
  }
}
