import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsNumber,
  IsPhoneNumber,
} from 'class-validator';

export class CreateAnalistaDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsNumber()
  valor: number;

  @IsNotEmpty()
  @IsNumber()
  cpf: number;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNumber()
  @IsNotEmpty()
  peso_acesso: number;

  @IsNotEmpty()
  sexo: string;

  @IsNotEmpty()
  @IsPhoneNumber()
  telefone: number;
}
