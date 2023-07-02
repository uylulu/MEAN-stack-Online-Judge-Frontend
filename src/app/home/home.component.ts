import { Component } from '@angular/core';
import { User } from 'src/models/user.model';
import { UserService } from 'src/api/user.service';
import { Problem } from 'src/models/problem.model';
import { ProblemService } from 'src/api/problem.service';
import { RouterModule, Routes , Router} from '@angular/router';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent {
  user = localStorage.getItem("name");

  @ViewChild('main') container: ElementRef;

  constructor(private userService: UserService, private problemService: ProblemService, private router: Router) { }

  problems: Problem[] = [];
  problem: Problem = new Problem();

  ngOnInit() {
    this.problemService.getProblems().subscribe((data: any) => {
      this.problems = data.data;
    });
  }
}
