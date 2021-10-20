import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResetpasswordComponent } from './component/resetpassword/resetpassword.component';
import { ForgotpasswordComponent } from './component/forgotpassword/forgotpassword.component';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { DisplaynotesComponent } from './component/displaynotes/displaynotes.component';
import { GetallnotesComponent } from './component/getallnotes/getallnotes.component';
import { IconsComponent } from './component/icons/icons.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRippleModule } from '@angular/material/core';
import { AuthserviceService } from './service/authservice/authservice.service';
import { CreatenoteComponent } from './component/createnote/createnote.component';
import { UpdateComponent } from './component/update/update.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { DeletenoteComponent } from './component/deletenote/deletenote.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { GetallarchiveComponent } from './component/getallarchive/getallarchive.component';
import { GetallbinComponent } from './component/getallbin/getallbin.component';
import { CollaboratorComponent } from './component/collaborator/collaborator.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ResetpasswordComponent,
    ForgotpasswordComponent,
    DashboardComponent,
    DisplaynotesComponent,
    GetallnotesComponent,
    IconsComponent,
    CreatenoteComponent,
    UpdateComponent,
    DeletenoteComponent,
    GetallarchiveComponent,
    GetallbinComponent,
    CollaboratorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatRippleModule,
    MatDialogModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatAutocompleteModule,
  ],
  providers: [AuthserviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
