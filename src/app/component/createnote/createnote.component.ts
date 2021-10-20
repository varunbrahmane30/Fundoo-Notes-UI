import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NotesService } from 'src/app/service/noteservice/noteservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss'],
})
export class CreatenoteComponent implements OnInit {
  Title: any;
  Message: any;

  constructor(
    private noteService: NotesService,
    private snackBar: MatSnackBar
  ) {}

  @Output() noteCreated = new EventEmitter<string>();
  ngOnInit(): void {}

  showSnackbar(message: string) {
    this.snackBar.open(message, 'Dismiss');
  }
  noteCreate() {
    let reqPalyload = {
      Title: this.Title,
      Message: this.Message,
    };
    this.Title = '';
    this.Message = '';
    if (!reqPalyload.Title && !reqPalyload.Message) {
      this.showSnackbar('Empty !!');
    } else {
      this.noteService.createnoteservice(reqPalyload).subscribe(
        (res: any) => {
          console.log(res);
          this.showSnackbar(res.message);
          this.noteCreated.emit(res);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
