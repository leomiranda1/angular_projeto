import { Injectable } from '@angular/core';
import { User } from './interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'https://dummyjson.com/users';

  async getAllUsers(): Promise<User[]> {
    const response = await fetch(this.url);
    const data = await response.json();
    return data.users; // Assuming the API response has a 'users' property
  }

  async getUserById(id: number): Promise<User | undefined> {
    const response = await fetch(`${this.url}/${id}`);
    if (!response.ok) {
      throw new Error('User not found');
    }
    const user = await response.json();
    return user; // Returns the specific user
  }

  async deleteUser(id: number): Promise<void> {
    const response = await fetch(`${this.url}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Error deleting user');
    }
  }
}
