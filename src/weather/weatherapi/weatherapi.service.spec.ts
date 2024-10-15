import { Test, TestingModule } from '@nestjs/testing';
import { WeatherApiService } from './weatherapi.service';

describe('WeatherapiService', () => {
  let service: WeatherApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WeatherApiService],
    }).compile();

    service = module.get<WeatherApiService>(WeatherApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
