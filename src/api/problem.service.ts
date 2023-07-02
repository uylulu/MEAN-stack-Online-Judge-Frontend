import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Problem } from 'src/models/problem.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProblemService {
    baseUrl: string = 'http://localhost:3000/db'

    constructor(private http: HttpClient) { 
    }

    getProblems(): Observable<any> {
        // const headers = { 'authorization': 'Bearer ' + localStorage.getItem('token'), 'content-type': 'application/json'};
        let headers = new HttpHeaders();
        headers = headers.set('authorization', 'Bearer ' + localStorage.getItem('token'));

        return this.http.get(this.baseUrl + '/', {'headers': headers});
    }

    getProblem(id: string): Observable<any> {
        const headers = { 'authorization': 'Bearer ' + localStorage.getItem('token'), 'content-type': 'application/json'};

        return this.http.get(this.baseUrl + '/' + id, {'headers': headers});
    }

    addProblem(problem: Problem): Observable<any> {
        const headers = { 'authorization': 'Bearer ' + localStorage.getItem('token'), 'content-type': 'application/json'};
        const body = JSON.stringify(problem);

        return this.http.post(this.baseUrl + '/add', body, {'headers': headers})
    }

    submitSolution(code: string, problem_id: string, user: string): Observable<any> {
        const headers = { 'authorization': 'Bearer ' + localStorage.getItem('token'), 'content-type': 'application/json'};
        const body = JSON.stringify({code: code, problem_id: problem_id, user: user});
        console.log(body);

        return this.http.post(this.baseUrl + '/submit' + '/' + problem_id, body, {'headers': headers})
    }
}

