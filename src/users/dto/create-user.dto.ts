import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsString,
  Min,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'El campo "email" es obligatorio' })
  @IsEmail({}, { message: 'El campo "email" debe tener un formato válido (ej: usuario@dominio.com)' })
  email: string;

  @IsNotEmpty({ message: 'El campo "password" es obligatorio' })
  @IsString({ message: 'El campo "password" debe ser una cadena de texto' })
  @MinLength(8, { message: 'El campo "password" debe tener al menos 8 caracteres' })
  password: string;

  @IsNotEmpty({ message: 'El campo "age" es obligatorio' })
  @IsInt({ message: 'El campo "age" debe ser un número entero' })
  @Min(18, { message: 'El campo "age" debe ser mayor o igual a 18' })
  age: number;
}
