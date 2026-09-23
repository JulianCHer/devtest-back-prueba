import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    return {
      message: 'Usuario creado exitosamente',
      data: {
        email: createUserDto.email,
        age: createUserDto.age,
      },
    };
  }
}
