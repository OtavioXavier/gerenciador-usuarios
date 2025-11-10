import { Component, inject, OnInit, signal } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../shared/models/User';

@Component({
  selector: 'app-users-component',
  imports: [],
  templateUrl: './users-component.html',
  styleUrl: './users-component.scss',
})
export class UsersComponent implements OnInit {
  usersService = inject(UserService);
  users = signal<User[]>([]);

    constructor() {

    }
    ngOnInit(): void {
      this.getAllUsers();
    }

  getAllUsers() {
    this.usersService.getAllUsers().subscribe(users => this.users.set(users));
  }
}
