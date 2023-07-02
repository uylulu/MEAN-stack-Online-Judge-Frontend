import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular app';
  status = "";

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      this.ngOnInit();
    });
  }

  ngOnInit() {
    if(localStorage.getItem("token") == null) {
      this.status = "Login";
    } else {
      this.status = "Logout";
    }
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    this.status = "Login";
  }

}
