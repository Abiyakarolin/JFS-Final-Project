import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
import { Response } from '../response';
import { retry } from 'rxjs/operators';

const auth_api = '/fitme/';
const httpOptions = {
  headers : new HttpHeaders({'Content-Type':'application/json '})
};
@Injectable({
  providedIn: 'root'
})
export class DietService {

  API_URL : String = '/fitme';
  currentUserEmail : string = '';
  isloggedUser : boolean = false;
  currentUserBatchStatus: string;
  currentId : number;
  userRole : String;

  constructor(private http : HttpClient) { }

  //Create User
  public signUp(signupObj: User):Observable<Response>{
    return this.http.post<Response>(auth_api + 'signUp', signupObj);
  }

  //signIn

  public login(username: string, password: string):Observable<any>{
    return this.http.post(auth_api + 'signin' , {
      username,
      password
    }, httpOptions);
  }

  //signOut
  public signOut():Observable<Response>{
    return this.http.get<Response>(`${this.API_URL}/signOut`).pipe(retry(3));
  }

  
  
  //ChangePassword
  
  public changePassword(oldPassword: string, newPassword: string):Observable<Response>{
    const params = new HttpParams().set("oldPassword",oldPassword).set("newPassword",newPassword);
    return this.http.put<Response>(`${this.API_URL}/${this.currentUserEmail}/changePassword`,{}, {
      params: params
    });
    //NOTE: Body is mandatory in POST/PUT
  }

  //Read User
  public getPendingUsers():Observable<User[]>{
      return this.http.get<User[]>(`${this.API_URL}/users`,{
        params:new HttpParams().set("category","notapproved")
      });
  }

  public getActiveUsers():Observable<User[]>{
    return this.http.get<User[]>(`${this.API_URL}/users`, {
      params: new HttpParams().set("category", "approved")
    });
  }

   //get all users with no Group used in batch

   public getAllUsersWithNoGroup():Observable<User[]>{
    return this.http.get<User[]>(`${this.API_URL}/users`, {
      params: new HttpParams().set("category", "nogroup")
    });
  }

  //Update User

  public reviewAction(approve: boolean, user: User, reason: string):Observable<Response>{
    if(approve){
      user.isapproved=true;
      const option= { 
        headers: new HttpHeaders().set("Content-Type","application/json")
      };
      return this.http.put<Response>(`${this.API_URL}/${user.userId}`,user,option);            
    }else{
      return this.http.delete<Response>(`${this.API_URL}/${user.userId}`,{
        params: new HttpParams().set("reason", reason)
      });
    }
  }

  public editUser(user: User):Observable<Response>{
    return this.http.put<Response>(`${this.API_URL}/${user.userId}`,user);
  }

  //Delete User

  public deleteUser(user: User):Observable<Response>{
    return this.http.delete<Response>(`${this.API_URL}/${user.userId}`);
  }

  //search operation

  //get user by Email to view the user details

  public getUserWithEmail(email : string) : Observable<any>{
   
    return this.http.get<User>(`${this.API_URL}/getUser/${email}`);
  }


  public getUserWithUserId(userId : number):Observable<User>{

    return this.http.get<User>(`${this.API_URL}/${userId}`);

  }

  public getAllUsersWithFullName(fullname : string):Observable<User[]>{
    const httpParams = new HttpParams().set("category","fullname").set("fullname",fullname);
    return this.http.get<User[]>(`${this.API_URL}/users`, {
      params: httpParams
    });
  }

  public getAllUsersWithGroup(groupsId: string):Observable<User[]>{
    const httpParams = new HttpParams().set("category","group").set("group",groupsId);
    return this.http.get<User[]>(`${this.API_URL}/users`, {
      params: httpParams
    });
  }

  public getAllUsersWithBatch(batchId:string):Observable<User[]>{
    const httpParams = new HttpParams().set("category","batch").set("batch",batchId);
    return this.http.get<User[]>(`${this.API_URL}/users`, {
      params: httpParams
    });

  }

  //ForgotPassword
  public forgotPassword(email: string):Observable<Response>{
    const params= new HttpParams().set("email",email)
    return this.http.get<Response>(`${this.API_URL}/user/forgotPassword`, {
      params: params
    });
  }
  
}

// public checkAdmin() : Observable<any>
// {
//   return this.http.get('http://localhost:8081/api/auth/admin', { responseType: 'text' });
// return null;
// }

// export class Employee{
//   constructor(
//     public empId:string,
//     public name:string,
//     public designation:string,
//     public salary:string,
//   ) {}
// }

//   public loginService (username:string,password:string)
//   {
//     const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
//   //  const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
                               
//     console.log("login Test");
//     return this.http.get('http://localhost:8081/',{headers,responseType:'text' as 'json'});

//   }

//   public getUsers()
//   {
//     console.log("Test Users");
//     return this.http.get<Employee[]>('http://localhost:8080/employee');
//   }

//   public addUser(user : User)
//   {
//     return this.http.post<User>('http://localhost:8081/add',user,{responseType:'text' as 'json'});
//   }


