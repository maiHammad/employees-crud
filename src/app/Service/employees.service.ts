import { Injectable } from "@angular/core";  
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';


@Injectable({
    providedIn:'root',
})
export class EmployeesService{
    baseUrl = environment.apiUrl;
    headers = { 'content-type': 'application/json'}  

    constructor(private _http:HttpClient){} 


    GetAllEployees() {
      return this._http
        .get(`${this.baseUrl}/getAllEmployees`)
        .pipe(map((response: any) => {
          debugger
            return response;
          })
        );
    }
    GetEmpById(empId:any) {
        return this._http
          .get(`${this.baseUrl}/getEmpByID/${empId}`)
          .pipe(map((response: any) => {
              return response;
            })
          );
      }
      DeleteEmployee(empId:any) {
        return this._http
          .get(`${this.baseUrl}/deleteEmpByID/${empId}`)
          .pipe(map((response: any) => {
              return response;
            })
          );
      }

      AddEmployee(empJson:any) {

        return this._http
          .post(`${this.baseUrl}/addEmployee`,empJson,{'headers':this.headers})
          .pipe(map((response: any) => {
            debugger
              return response;
            })
          );
      }
      EditEmployee(empJson:any) {
        return this._http
          .post(`${this.baseUrl}/editEmployee`,empJson,{'headers':this.headers})
          .pipe(map((response: any) => {
              return response;
            })
          );
      }
}