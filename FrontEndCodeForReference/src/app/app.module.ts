import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { authInterceptorProviders } from './auth.intercepter';
import { BatchModule } from './batch/batch.module';
import { MessageModule } from './message/message.module';
import { WeeklyPlanModule } from './weekly-plan/weekly-plan.module';
import { DailylogModule } from './dailylog/dailylog.module';
import { MonthlyMeasurementChartModule } from './monthly-measurement-chart/monthly-measurement-chart.module';
import { ReportModule } from './report/report.module';
import { DonateModule } from './donate/donate.module';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,HeaderComponent, HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UserModule,
    BatchModule,
    MessageModule,
    WeeklyPlanModule,
    DailylogModule,
    MonthlyMeasurementChartModule,
    ReportModule,
    DonateModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
