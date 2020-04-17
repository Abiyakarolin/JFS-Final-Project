import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { AuthGuardService } from './user/auth-guard.service';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { DashBoardComponent } from './user/dash-board/dash-board.component';
import { ViewUserComponent } from './user/manage-user/view-user/view-user.component';
import { ChangePwdComponent } from './user/change-pwd/change-pwd.component';
import { SignOutComponent } from './user/sign-out/sign-out.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { ReviewSignUpComponent } from './user/review-sign-up/review-sign-up.component';
import { ManageUserComponent } from './user/manage-user/manage-user.component';
import { EditUserComponent } from './user/manage-user/edit-user/edit-user.component';
import { DeleteUserComponent } from './user/manage-user/delete-user/delete-user.component';
import { AssignBatchComponent } from './batch/assign-batch/assign-batch.component';
import { SearchUserComponent } from './user/search-user/search-user.component';
import { SendMessageComponent } from './message/send-message/send-message.component';
import { UploadWeeklyPlanComponent } from './weekly-plan/upload-weekly-plan/upload-weekly-plan.component';
import { DownloadWeeklyPlanComponent } from './weekly-plan/download-weekly-plan/download-weekly-plan.component';
import { ReadUniqueUserListComponent } from './message/read-unique-user-list/read-unique-user-list.component';
import { ReadMessageConversationComponent } from './message/read-message-conversation/read-message-conversation.component';
import { SaveDailylogComponent } from './dailylog/save-dailylog/save-dailylog.component';
import { DailylogUserListComponent } from './dailylog/dailylog-user-list/dailylog-user-list.component';
import { ViewDailylogComponent } from './dailylog/view-dailylog/view-dailylog.component';
import { ViewDailylogHistroyComponent } from './dailylog/view-dailylog-histroy/view-dailylog-histroy.component';
import { SaveMonthlyMeasurementChartComponent } from './monthly-measurement-chart/save-monthly-measurement-chart/save-monthly-measurement-chart.component';
import { MonthlyMeasurementChartUserListComponent } from './monthly-measurement-chart/monthly-measurement-chart-user-list/monthly-measurement-chart-user-list.component';
import { ViewMonthlyMeasurementChartComponent } from './monthly-measurement-chart/view-monthly-measurement-chart/view-monthly-measurement-chart.component';
import { ViewMonthlyMeasurementChartHistoryComponent } from './monthly-measurement-chart/view-monthly-measurement-chart-history/view-monthly-measurement-chart-history.component';
import { ReportListComponent } from './report/report-list/report-list.component';
import { DonateComponent } from './donate/donate.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';
import { EnrollComponent } from './user/enroll/enroll.component';

const routes: Routes = [
  
  {
    path:'user',
    children: 
    [
      {path:'signIn',component:SignInComponent},
      {path:'signUp',component:SignUpComponent},
      {path:'dashboard',component:DashBoardComponent,canActivate : [AuthGuardService]},
      {path:'view',component:ViewUserComponent,canActivate : [AuthGuardService]},
      {path:'changePwd',component:ChangePwdComponent,canActivate : [AuthGuardService]},
      {path:'users',component:UserComponent,canActivate : [AuthGuardService]},
      {path:'signOut',component:SignOutComponent,canActivate : [AuthGuardService]},
      {path:'reviewSignUp',component:ReviewSignUpComponent,canActivate : [AuthGuardService]},
      {path:'manage',component:ManageUserComponent,canActivate : [AuthGuardService]},
      {path:'edit',component:EditUserComponent,canActivate : [AuthGuardService]},
      {path:'delete',component:DeleteUserComponent,canActivate : [AuthGuardService]},
      {path:'search',component:SearchUserComponent,canActivate : [AuthGuardService]},
      {path:'forgotPassword',component:ForgotPasswordComponent},
      {path:'enroll',component:EnrollComponent,canActivate : [AuthGuardService]}

    ]
  },
  {
    path:'batch',
    children:
    [{
      path:'assign',component:AssignBatchComponent,canActivate : [AuthGuardService]
    }]
  },
  {
    path:'message',
    children:
    [
      {path:'send',component:SendMessageComponent,canActivate : [AuthGuardService]},
      { path: 'read/userlist', component: ReadUniqueUserListComponent,canActivate : [AuthGuardService] },
      { path: 'read/conversation', component: ReadMessageConversationComponent,canActivate : [AuthGuardService] }
    ]
  },
  {
    path: 'monthlyMeasurementChart',
    children: [
        { path: 'save', component: SaveMonthlyMeasurementChartComponent,canActivate : [AuthGuardService]},
        { path: 'viewUsers', component: MonthlyMeasurementChartUserListComponent,canActivate : [AuthGuardService]},
        { path: 'view', component: ViewMonthlyMeasurementChartComponent,canActivate : [AuthGuardService]},
        { path: 'history', component: ViewMonthlyMeasurementChartHistoryComponent,canActivate : [AuthGuardService]}
      ]
  },
  {
    path:'plan',
    children:
    [
      { path:'upload',component:UploadWeeklyPlanComponent,canActivate : [AuthGuardService]},
      { path:'download',component:DownloadWeeklyPlanComponent,canActivate : [AuthGuardService]}
    ]
  },
  { path: 'report', component: ReportListComponent,canActivate : [AuthGuardService]},
  {
    path: 'dailylog',
    children: [
        { path: 'save', component: SaveDailylogComponent,canActivate : [AuthGuardService]},
        { path: 'viewUsers', component: DailylogUserListComponent,canActivate : [AuthGuardService]},
        { path: 'view', component: ViewDailylogComponent,canActivate : [AuthGuardService]},
        { path: 'history', component: ViewDailylogHistroyComponent,canActivate : [AuthGuardService]}
    ]
  },
  { path: 'donate', component: DonateComponent,canActivate : [AuthGuardService]},
  { path: '**', component:HomePageComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
