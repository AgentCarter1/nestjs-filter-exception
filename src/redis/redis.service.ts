import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import Redis from 'ioredis';
import { redisConfig } from './redis.config';

@Injectable()
export class RedisService implements OnModuleInit {
  private readonly redisClient: Redis;
  private readonly subscriber: Redis;
  private readonly logger = new Logger(RedisService.name);

  constructor() {
    this.redisClient = new Redis(redisConfig);
    this.subscriber = new Redis(redisConfig);
  }

  async onModuleInit() {
    await this.subscriber.config('SET', 'notify-keyspace-events', 'Ex');

    this.subscriber.subscribe('__keyevent@0__:expired', (err, count) => {
      if (err) {
        this.logger.error('Subscription error:', err);
      } else {
        this.logger.log(
          `Subscribed to ${count} channel(s). Waiting for expiry events...`,
        );
      }
    });

    this.subscriber.on('message', (channel, message) => {
      this.logger.log(`Key expired: ${message} ${channel}`);
    });
  }

  async setKeyWithExpiry(key: string, value: any, ttl: number): Promise<void> {
    await this.redisClient.set(key, JSON.stringify(value), 'EX', ttl);
    this.logger.log(`Key set: ${key} with TTL ${ttl} seconds`);
  }
}
