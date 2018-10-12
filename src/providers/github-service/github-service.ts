import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { User } from '../../models/user.interface';
import { Repository } from '../../models/repository.interface';

import { USER_LIST } from '../../mocks/user.mocks';
import { REPOSITORY_LIST } from '../../mocks/respository.mocks';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

/*
  Generated class for the GithubServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GithubServiceProvider {
  baseUrl: string = "https://api.github.com/users";

  constructor(public http: Http) {
    console.log('Hello GithubServiceProvider Provider');
  }

  getUserInformation(username: string): Observable<User>{
    return this.http.get(`${this.baseUrl}/${username}`)
    .do((data: Response) => console.log("Response from github api | getUserInformaiton : "+data))
    .map((data: Response)=> data.json())
    .do((data: Response) => console.log("Response from github api | getUserInformaiton | after mapping : "+data))
    .catch((error:Response) => Observable.throw(error.json().error || "Server error"))
  }


  mockGetRepositoryInformation(username: string):Observable<Repository[]>{
    return Observable.of(REPOSITORY_LIST.filter(repository => repository.owner.name === username))
  }

  /*Finding the username from within USER_LIST, equal to the username passed in
  Returning the results as an Observable */
  mockGetUserInformation(username: string): Observable<User>{
    console.log("Username received : "+username);
    return Observable.of(USER_LIST.filter(user => user.name === username)[0]);
  }

}
