import { Test, TestingModule } from '@nestjs/testing';
import { PlayServiceService } from './play-service.service';

describe('PlayServiceService', () => {
  let service: PlayServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlayServiceService],
    }).compile();

    service = module.get<PlayServiceService>(PlayServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
