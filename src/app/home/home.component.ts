import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userList: User[] = [];
  filteredUserList: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAllUsers().then(users => {
      this.userList = users;
      this.filteredUserList = users; // Inicializa a lista filtrada
    });
  }

  filterUsers(text: string): void {
    if (!text) {
      this.filteredUserList = this.userList;
      return;
    }
    this.filteredUserList = this.userList.filter(user =>
      user.name.toLowerCase().includes(text.toLowerCase())
    );
  }
}
