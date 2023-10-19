import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class ClientesService {
  constructor(private prismaService: PrismaService) {}

  create(createClienteDto: CreateClienteDto) {
    return this.prismaService.clientes.create({
      data: createClienteDto,
    });
  }

  findAll() {
    return this.prismaService.clientes.findMany();
  }

  findOne(id: number) {
    return this.prismaService.clientes.findUniqueOrThrow({
      where: {
        id,
      },
    });
  }

  update(id: number, updateClienteDto: UpdateClienteDto) {
    return this.prismaService.clientes.update({
      where: { id },
      data: updateClienteDto,
    });
  }

  remove(id: number) {
    return this.prismaService.clientes.delete({
      where: { id },
    });
  }
}
