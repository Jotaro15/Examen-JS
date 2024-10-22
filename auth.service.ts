import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class AuthService {
  private users: User[] = [];
  private idCounter = 1;

  register(username: string, password: string): User {
    const newUser = { id: this.idCounter++, username, password, borrowedBooks: [] };
    this.users.push(newUser);
    return newUser;
  }

  authenticate(username: string, password: string): User {
    return this.users.find(user => user.username === username && user.password === password);
  }
}
