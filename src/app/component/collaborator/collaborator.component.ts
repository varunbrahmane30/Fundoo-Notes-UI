import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CollaboratorService } from 'src/app/service/collaborator/collaborator.service';
import { UserService } from 'src/app/service/userservice/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss'],
})
export class CollaboratorComponent implements OnInit {
  firstName = localStorage.getItem('firstName');
  lastName = localStorage.getItem('lastName');
  email = localStorage.getItem('email');
  collaboratorEmail: any;
  noteid: any;
  collaborators = [];
  users: [];
  filteredUsers: any[];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private collaboratorService: CollaboratorService,
    private userService: UserService,
    private snackBar: MatSnackBar
  ) {
    this.noteid = data.id;
  }

  getEmail(user: any) {
    this.collaboratorEmail = user.email;
  }
  ngOnInit(): void {
    let payload = {
      id: this.noteid,
      emailId: this.collaboratorEmail,
    };
    this.collaboratorService.getAllCollaborators(payload).subscribe(
      (res: any) => {
        console.log(res);
        this.collaborators = res.data.reverse();
      },
      (err) => {
        console.log(err);
      }
    );

    this.userService.getAllUsers().subscribe(
      (res: any) => {
        this.users = res.data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onEmailChange() {
    this.filteredUsers = this.users.filter((user: any) =>
      user.email.includes(this.collaboratorEmail)
    );
  }
  clearcollaborator() {
    let payload = {
      id: this.noteid,
      emailId: this.collaboratorEmail,
    };
    console.log(payload);
    console.log(payload.id);
    console.log(payload.emailId);

    this.collaboratorService.RemoveCollaboratorService(payload).subscribe(
      (res: any) => {
        console.log(res);
        this.showSnackbar(res.message);
        // this.noteCreated.emit(res);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
  addCollaborator() {
    let payload = {
      id: this.noteid,
      emailId: this.collaboratorEmail,
    };
    console.log(payload);
    console.log(payload.id);
    console.log(payload.emailId);

    this.collaboratorService.AddCollaborotorService(payload).subscribe(
      (res: any) => {
        console.log(res);
        this.showSnackbar(res.message);
        // this.noteCreated.emit(res);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
  showSnackbar(message: string) {
    this.snackBar.open(message, 'Dismiss');
  }
}
