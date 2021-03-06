import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { UserAuthentificationRequest } from '../../user/user-model/userLogin';
import { Observable} from 'rxjs/Rx';
import 'rxjs/Rx';
import { AuthentificationResponse } from '../../user/user-model/JwtAuthentificationToken';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HelloService {

 private homeUrl = 'http://localhost:8080/hello';

 constructor(private http: HttpClient) {}

  getHome(res: AuthentificationResponse) : Observable<any>{
    const options = {
      headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + res.token }) 
     };
    return this.http.get(this.homeUrl, options).map(this.extractData).catch(this.handleErrorPromise);
 }

  extractData(res: Response) {
  return res || {};
  }

  handleErrorPromise (error: Response | any) {
  console.error(error.message || error);
  return Promise.reject(error.message || error);
   }


}