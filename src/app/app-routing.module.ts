import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { ResetpasswordComponent } from './component/resetpassword/resetpassword.component';
import { ForgotpasswordComponent } from './component/forgotpassword/forgotpassword.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { GetallnotesComponent } from './component/getallnotes/getallnotes.component';
import { AuthenticationGuard } from './authentication.guard';
import { CreatenoteComponent } from './component/createnote/createnote.component';
import { GetallarchiveComponent } from './component/getallarchive/getallarchive.component';
import { GetallbinComponent } from './component/getallbin/getallbin.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'resetPassword/:token', component: ResetpasswordComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthenticationGuard],
    children: [
      {
        path: 'note',
        component: GetallnotesComponent,
      },
      {
        path: 'archive',
        component: GetallarchiveComponent,
      },
      {
        path: 'bin',
        component: GetallbinComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
