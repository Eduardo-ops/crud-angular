import { UserService } from './users.service';
import { Component, OnInit } from '@angular/core';
import { User } from './users.model';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  constructor(private userService: UserService) { }

  user: User = {} as User
  users: User[] = []

  ngOnInit(): void {
  }

  saveUser(form: any) {
    this.userService.salvar(this.user).subscribe(
      () => {
        form.reset()
        this.user = {} as User
        this.loadData()
      }
    )
  }

  loadData() {
    this.userService.getAllUsers().subscribe(
      data => this.users = data
    )
  }

  deleteUser(userId: number) {
    this.userService.deleteUser(userId).subscribe(
      () => this.loadData()
    )
  }

}
