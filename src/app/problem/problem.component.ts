import { Component } from '@angular/core';
import { User } from 'src/models/user.model';
import { UserService } from 'src/api/user.service';
import { Problem } from 'src/models/problem.model';
import { ProblemService } from 'src/api/problem.service';
import { RouterModule, Routes , Router} from '@angular/router';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.css'],
})
export class ProblemComponent {
  constructor(private userService: UserService, private problemService: ProblemService, private router: Router) { }

  problems: Problem[] = [];
  problem: Problem = new Problem();

  problem_id = this.router.url.split('/')[2];

  header = "";
  solution = "";
  
  ngOnInit() {
    this.problemService.getProblem(this.problem_id).subscribe((data: any) => {
      this.problem = data.data;
      this.header = this.problem.name;
    });
  }

  submitSolution() {
    if(this.header == this.problem.name) {
      this.header = "Solution Submitted";
    }

    this.problemService.submitSolution(this.solution, this.problem_id, localStorage.getItem('name')).subscribe((data: any) => {

      console.log(data);
      if(data.status == "success") {
        this.header = "Solution validated, You got " + data.data;
      } else {
        this.header = data.message;
      }
    });
  }
}
