// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(username: string, password: string): Promise<string> {
    const payload = { username };
    return this.jwtService.sign(payload);
  }

  validateToken(token: string) {
    return this.jwtService.verify(token, { secret: process.env.JWT_SECRET });
  }
}
