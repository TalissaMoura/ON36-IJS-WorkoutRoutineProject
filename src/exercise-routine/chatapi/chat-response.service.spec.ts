import { Test, TestingModule } from '@nestjs/testing';
import { ChatResponseService } from './chat-response.service';

describe('ChatResponseService', () => {
  let service: ChatResponseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChatResponseService],
    }).compile();

    service = module.get<ChatResponseService>(ChatResponseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
