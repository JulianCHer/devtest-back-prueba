# Prueba Técnica: Backend (NestJS)

**Tiempo sugerido:** 1 hora

Bienvenido a la prueba técnica de Backend. Este proyecto es una aplicación NestJS recién inicializada. A continuación encontrarás 3 problemas diseñados para evaluar tu dominio del framework, inyección de dependencias y decoradores.

## ⚠️ Instrucciones de Control de Versiones (Git)
Es obligatorio que manejes tu progreso usando buenas prácticas de Git. **Cada problema se considera un fix o feature independiente**. Por lo tanto, para CADA problema debes:
1. Crear una rama nueva desde la rama principal (ej: `feature/problema-1`).
2. Resolver el problema y hacer tus commits correspondientes.
3. Hacer push de tu rama y crear un **Pull Request (PR)** hacia la rama principal.
4. Volver a la rama principal para iniciar el siguiente problema.

---

## Problema 1: Validación y DTOs (15 min - Básico)
**Objetivo:** Evaluar el uso de Pipes y `class-validator`.
- Crea un endpoint `POST /users` en un `UsersController`.
- Implementa un DTO (`CreateUserDto`) que reciba `email`, `password` y `age`.
- Asegúrate de que NestJS valide automáticamente que:
  - El `email` sea un formato válido.
  - El `password` tenga al menos 8 caracteres.
  - La `age` sea un número entero mayor o igual a 18.
- Si la validación falla, el endpoint debe retornar un error `400 Bad Request` automáticamente. (Tip: Recuerda habilitar el ValidationPipe global).

## Problema 2: Interceptores y Middlewares (15 min - Intermedio)
**Objetivo:** Evaluar el ciclo de vida de la petición en NestJS.
- Crea un Interceptor global (o a nivel de controlador) llamado `LoggingInterceptor`.
- Este interceptor debe medir el tiempo que tarda en resolverse una petición y mostrar en la consola un mensaje con el método, la ruta y el tiempo en milisegundos (ej: `[GET] /users - 45ms`).
- Aplícalo a tu aplicación.

## Problema 3: Guards, Metadata y Autorización (30 min - Avanzado)
**Objetivo:** Evaluar Guards y Custom Decorators.
- Crea un `AuthGuard` que intercepte las peticiones y revise si existe un header llamado `Authorization`.
- Si el header tiene el valor `"Bearer admin-token"`, permite el paso. De lo contrario, arroja un `401 Unauthorized` o `403 Forbidden`.
- **El reto adicional:** Crea un Custom Decorator llamado `@Roles('admin')`. Modifica tu `AuthGuard` para que, usando el `Reflector`, solo aplique la validación del token si el endpoint (handler) está marcado con el rol requerido.
- Aplica este decorador a un endpoint nuevo `GET /admin/data`.

---
¡Mucho éxito! No te preocupes si no logras completar todos los puntos, enfócate en demostrar tus buenas prácticas y tu proceso de razonamiento.
