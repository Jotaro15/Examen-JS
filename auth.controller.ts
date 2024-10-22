import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from './user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() body: { username: string, password: string }): User {
    return this.authService.register(body.username, body.password);
  }

  @Post('login')
  login(@Body() body: { username: string, password: string }): User {
    const user = this.authService.authenticate(body.username, body.password);
    if (!user) {
      throw new Error('Invalid credentials');
    }
    return user;
  }
}
