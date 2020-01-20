import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { HomeComponent } from './home/home/home.component';
import { LeaveComponent } from './home/dashboard/leave/leave.component';
import { LeaveListComponent } from './home/dashboard/leave-list/leave-list.component';
import { EmployeeListComponent } from './home/employee-list/employee-list.component';
import { ProfileComponent } from './home/profile/profile.component';
import { EditProfileComponent } from './home/profile/edit-profile/edit-profile.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full',
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard], children: [
      {
        path: 'leave/:id', component: LeaveComponent, canActivateChild: [AuthGuard]
      }
       ]
  },
  {
    path: 'leaveList', component: LeaveListComponent, canActivate:[AuthGuard]
  },
  {
    path: 'empList', component: EmployeeListComponent, canActivate:[AuthGuard]
  },
  {
    path: 'profile', component: ProfileComponent, canActivate:[AuthGuard]
  },
  {
    path: 'editProfile/:id', component: EditProfileComponent, canActivate:[AuthGuard]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routing=[LoginComponent,DashboardComponent,EditProfileComponent,ProfileComponent,EmployeeListComponent, HomeComponent, LeaveComponent,LeaveListComponent]
