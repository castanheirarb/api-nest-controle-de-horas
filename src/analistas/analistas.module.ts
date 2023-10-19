import { Module } from '@nestjs/common';
import { AnalistasService } from './analistas.service';
import { AnalistasController } from './analistas.controller';

@Module({
  controllers: [AnalistasController],
  providers: [AnalistasService],
})
export class AnalistasModule {}
