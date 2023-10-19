import { Test, TestingModule } from '@nestjs/testing';
import { AnalistasService } from './analistas.service';

describe('AnalistasService', () => {
  let service: AnalistasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnalistasService],
    }).compile();

    service = module.get<AnalistasService>(AnalistasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
