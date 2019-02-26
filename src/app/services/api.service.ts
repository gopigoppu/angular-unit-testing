import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly searchUrl = 'https://api.github.com/search/repositories?q=';
  readonly userFetchUrl = 'https://api.github.com/users/';

  constructor(private http: HttpClient) { }

  getRepos(query) {
    return this.http.get(this.searchUrl + query);
  }
  getUserDetail(userid) {
    return this.http.get(this.userFetchUrl + userid);
  }
}
