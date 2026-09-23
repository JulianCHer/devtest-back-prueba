import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator.js';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // Lee los roles requeridos del handler o del controlador
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );

    // Si el endpoint no tiene @Roles, se permite el paso libremente
    if (!requiredRoles || requiredRoles.length === 0) {
      return true;
    }

    // Revisa el header Authorization
    const request = context.switchToHttp().getRequest<Request>();
    const authHeader = request.headers['authorization'];

    if (!authHeader || authHeader !== 'Bearer admin-token') {
      throw new UnauthorizedException(
        'Token inválido o ausente. Se requiere: Bearer admin-token',
      );
    }

    return true;
  }
}
