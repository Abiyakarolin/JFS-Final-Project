import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';
import { DietService } from './diet.service';
import { TokenStorageService } from './token-storage.service';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { AdminDashBoardComponent } from './dash-board/admin-dash-board/admin-dash-board.component';
import { MotivatorDashBoardComponent } from './dash-board/motivator-dash-board/motivator-dash-board.component';
import { ChallengerDashBoardComponent } from './dash-board/challenger-dash-board/challenger-dash-board.component';
import { ManageUserService } from './manage.service';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ViewUserComponent } from './manage-user/view-user/view-user.component';
import { ChangePwdComponent } from './change-pwd/change-pwd.component';
import { RouterModule } from '@angular/router';
import { SignOutComponent } from './sign-out/sign-out.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReviewSignUpComponent } from './review-sign-up/review-sign-up.component';
import { ReviewSignUpPaginatorComponent } from './review-sign-up/review-sign-up-paginator/review-sign-up-paginator.component';
import { EditUserComponent } from './manage-user/edit-user/edit-user.component';
import { DeleteUserComponent } from './manage-user/delete-user/delete-user.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { EnrollComponent } from './enroll/enroll.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component'; 


@NgModule({
  declarations: [SignInComponent, DashBoardComponent, AdminDashBoardComponent, MotivatorDashBoardComponent,
     ChallengerDashBoardComponent, ManageUserComponent, ViewUserComponent, ChangePwdComponent, SignOutComponent, SignUpComponent, ReviewSignUpComponent, ReviewSignUpPaginatorComponent, EditUserComponent, DeleteUserComponent, SearchUserComponent,EnrollComponent, ForgotPasswordComponent],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,RouterModule
  ],
  exports:[SignInComponent,DashBoardComponent, AdminDashBoardComponent, MotivatorDashBoardComponent,
    ChallengerDashBoardComponent, ManageUserComponent, ViewUserComponent,ChangePwdComponent,SignOutComponent, SignUpComponent, SignUpComponent, ReviewSignUpComponent, ReviewSignUpPaginatorComponent, EditUserComponent, DeleteUserComponent, SearchUserComponent,EnrollComponent,ForgotPasswordComponent],
  providers:[DietService,TokenStorageService,ManageUserService]
})
export class UserModule { }
