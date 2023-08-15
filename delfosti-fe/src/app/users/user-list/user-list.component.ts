import { Component } from '@angular/core';
import { MdbTabChange } from 'mdb-angular-ui-kit/tabs/tabs.component';
import { IUser } from 'src/app/interfaces/user.interface';
import { UrlService } from 'src/app/services/url.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  userList: Array<IUser> = [];

  constructor(private userService: UsersService, private urlService: UrlService){
    this.urlService.setInHome(true);
  }

  ngOnInit(): void {
  }

  listUsers(role: string): void{
    this.userService.getAllByRole(role).subscribe(
      {
        next: (response) => {
          this.userList = response as Array<IUser>;
          console.log(this.userList);
        },
        error: (error) => {
          console.log(error);
        },
        complete: () =>{

        }
      }
    )
  }

  listUsersFiltered(event: MdbTabChange): void{
    if(event.index == 0) {
      this.listUsers('');
    } else {
      this.listUsers(event.tab.title);
    }
  }
}
