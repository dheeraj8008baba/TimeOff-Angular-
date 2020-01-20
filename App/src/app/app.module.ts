import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule,routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { FooterComponent } from './common/footer/footer.component';
import { EmployeeListComponent } from './home/employee-list/employee-list.component';
import { LeaveComponent } from './home/dashboard/leave/leave.component';
import { LeaveListComponent } from './home/dashboard/leave-list/leave-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './home/profile/profile.component';
import { EditProfileComponent } from './home/profile/edit-profile/edit-profile.component';
import { AuthGuard } from './guards/auth.guard';



@NgModule({
  declarations: [
   AppComponent,
   routing,
   HeaderComponent,
   SidebarComponent,
   FooterComponent,
   EmployeeListComponent,
   LeaveComponent,
   LeaveListComponent,
   ProfileComponent,
   EditProfileComponent
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
