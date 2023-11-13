// src/auth/auth.controller.ts
import { Controller, Post, Body, Get, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

@Controller('auth') 
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { username: string; password: string }): Promise<{ access_token: string }> {
    const access_token = await this.authService.login(body.username, body.password);
    return { access_token };
  }
}
