import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotesService } from 'src/app/service/noteservice/noteservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent implements OnInit {
  title: any;
  message: any;
  id: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private noteService: NotesService,
    private snackBar: MatSnackBar
  ) {
    this.title = data.title;
    this.message = data.message;
    this.id = data.id;
    console.log(data);
  }

  ngOnInit(): void {
    this.noteService.getAllNotes();
  }

  updateNote() {
    let reqPayload = {
      Title: this.title,
      Message: this.message,
      id: this.id,
    };

    this.noteService.UpdateNoteService(reqPayload).subscribe(
      (res: any) => {
        console.log(res);
        this.showSnackbar(res.message);
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
