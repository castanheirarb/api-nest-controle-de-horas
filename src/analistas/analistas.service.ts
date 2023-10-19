import { Injectable } from '@nestjs/common';
import { CreateAnalistaDto } from './dto/create-analista.dto';
import { UpdateAnalistaDto } from './dto/update-analista.dto';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class AnalistasService {
  constructor(private prismaService: PrismaService) {}

  create(createAnalistaDto: CreateAnalistaDto) {
    return this.prismaService.analistas.create({
      data: createAnalistaDto,
    });
  }

  findAll() {
    return this.prismaService.analistas.findMany();
  }

  findOne(id: number) {
    return this.prismaService.analistas.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateAnalistaDto: UpdateAnalistaDto) {
    return this.prismaService.analistas.update({
      where: { id },
      data: updateAnalistaDto,
    });
  }

  remove(id: number) {
    return this.prismaService.analistas.delete({
      where: { id },
    });
  }
}
