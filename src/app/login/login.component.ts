import { Component } from '@angular/core';
import { User } from 'src/models/user.model';
import { UserService } from 'src/api/user.service';
import { RouterModule, Routes , Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  title = 'Login';

  constructor(private userService: UserService, private router: Router) { }
  

  users: User[] = [];
  user: User = new User();

  validateUser() {
    this.userService.validateUser(this.user).subscribe((data: any) => {
      console.log(data);
      if(data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("name", data.name);
        console.log("Token: " + data.token);
        this.router.navigate(['/home']);
      } 
    });
  }

  addUser() {
    this.userService.addUser(this.user).subscribe((data: any) => {
      console.log(data);
      if(data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("name", data.name);
        console.log("Token: " + data.token);
        this.router.navigate(['/home']);
      }
    });
  }
}
