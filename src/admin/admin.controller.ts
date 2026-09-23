import { Controller, Get, UseGuards } from '@nestjs/common';
import { Roles } from '../decorators/roles.decorator.js';
import { AuthGuard } from '../guards/auth.guard.js';

@Controller('admin')
@UseGuards(AuthGuard)
export class AdminController {
  @Get('data')
  @Roles('admin')
  getData() {
    return {
      message: 'Acceso concedido',
      data: {
        users: 42,
        revenue: '$12,500',
        status: 'active',
      },
    };
  }
}
