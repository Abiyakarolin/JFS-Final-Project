import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ManageUserService {

  selectedUser : User;
  allowEdit = false;
  constructor() { }

  public selectUser(user : User)
  {
    this.selectedUser = user;
  }
}
