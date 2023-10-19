import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AnalistasService } from './analistas.service';
import { CreateAnalistaDto } from './dto/create-analista.dto';
import { UpdateAnalistaDto } from './dto/update-analista.dto';

@Controller('analistas')
export class AnalistasController {
  constructor(private readonly analistasService: AnalistasService) {}

  @Post()
  create(@Body() createAnalistaDto: CreateAnalistaDto) {
    return this.analistasService.create(createAnalistaDto);
  }

  @Get()
  findAll() {
    return this.analistasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.analistasService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAnalistaDto: UpdateAnalistaDto,
  ) {
    return this.analistasService.update(+id, updateAnalistaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.analistasService.remove(+id);
  }
}
