import { Test, TestingModule } from '@nestjs/testing';
import { AnalistasController } from './analistas.controller';
import { AnalistasService } from './analistas.service';

describe('AnalistasController', () => {
  let controller: AnalistasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnalistasController],
      providers: [AnalistasService],
    }).compile();

    controller = module.get<AnalistasController>(AnalistasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
