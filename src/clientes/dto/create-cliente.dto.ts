import { IsString, IsNotEmpty, IsNumber, IsPhoneNumber } from 'class-validator';

export class CreateClienteDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  @IsNumber()
  cnpj: number;

  @IsNotEmpty()
  @IsPhoneNumber()
  telefone: number;

  @IsString()
  @IsNotEmpty()
  endereco: string;

  @IsString()
  @IsNotEmpty()
  descricao: string;
}
