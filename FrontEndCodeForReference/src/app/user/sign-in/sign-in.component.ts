import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule} from '@angular/forms';
import { DietService } from '../diet.service';
import { observable } from 'rxjs';
import { TokenStorageService } from '../token-storage.service';
import { Router , ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  return: string = '';
  message : String;

  loginForm : FormGroup;

  constructor(private fb : FormBuilder, private dietService : DietService,
              private tokenStorage : TokenStorageService, private router : Router,
              private route : ActivatedRoute ) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      username : ["",[Validators.required,Validators.email]],
      password : ["", [Validators.required,Validators.minLength(8),Validators.maxLength(20)]]
    });
    this.route.queryParams
    .subscribe(params => this.return = params['return'] || '/forums');
  }

  get username(){
    return this.loginForm.get('username');
  }

  get password(){
    return this.loginForm.get('password');
  }
  login()
  {
    this.dietService.login(this.loginForm.value.username,this.loginForm.value.password).subscribe(
      data => {
       this.tokenStorage.saveToken(data.token);
       this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.dietService.currentUserEmail = data.username;
        this.dietService.isloggedUser = true;
        this.dietService.currentId = data.id;
        this.dietService.userRole = data.userType;
        this.dietService.currentUserBatchStatus = data.batchStatus;
        // this.router.navigateByUrl(this.return);
        this.router.navigate(["user/dashboard"]);      
      },
      err => {
        this.message = "Invalid User Name or Password";
        this.isLoginFailed = true;
        //this.reloadPage();
        }
    );
  }

  reloadPage() {
    window.location.reload();
  }

  resetMsg(){
    this.message = '';
  }

}