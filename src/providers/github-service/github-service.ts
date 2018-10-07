//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '../../models/user.interface';
import { USER_LIST } from '../../mocks/user.mocks';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

/*
  Generated class for the GithubServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GithubServiceProvider {


  constructor(/*public http: HttpClient*/) {
    console.log('Hello GithubServiceProvider Provider');
  }

  /*Finding the username from within USER_LIST, equal to the username passed in
  Returning the results as an Observable */
  mockGetUserInformation(username: string): Observable<User>{
    return Observable.of(USER_LIST.filter(user => user.name === username)[0]);
  }

}
