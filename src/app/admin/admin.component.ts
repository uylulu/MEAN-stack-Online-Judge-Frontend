import { Component } from '@angular/core';
import { User } from 'src/models/user.model';
import { UserService } from 'src/api/user.service';
import { Problem } from 'src/models/problem.model';
import { ProblemService } from 'src/api/problem.service';
import { RouterModule, Routes , Router} from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styles: []
})
export class AdminComponent {
  constructor(private userService: UserService, private problemService: ProblemService, private router: Router) { }

  problems: Problem[] = [];
  problem: Problem = new Problem();


  addProblem() {
    this.problemService.addProblem(this.problem).subscribe((data: any) => {
      console.log(data);
    });
  }
}
