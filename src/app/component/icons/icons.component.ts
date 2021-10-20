import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NotesService } from 'src/app/service/noteservice/noteservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { CollaboratorComponent } from '../collaborator/collaborator.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss'],
})
export class IconsComponent implements OnInit {
  @Output() noteUpdated = new EventEmitter<string>();
  @Output() operation = new EventEmitter<string>();

  @Input() note: any;
  @Input() isArchived: any;
  @Input() isBined: any;
  id: any;
  colors = [
    '#fff',
    '#ccff90',
    '#f28b82',
    '#fbbc04',
    '#fff475',
    '#a7ffeb',
    '#cbf0f8',
    '#aecbfa',
    '#d7aefb',
    '#fdcfe8',
    '#e6c9a8',
    '#e8eaed',
  ];
  constructor(
    private notesService: NotesService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  openDialog() {
    const dialogRef = this.dialog.open(CollaboratorComponent, {
      width: '600px',
      data: this.note,
    });
    dialogRef.afterClosed().subscribe((res) => {
      console.log(`Dialog result: ${res}`);
      this.noteUpdated.emit(res);
    });
  }

  showSnackbar(message: string) {
    this.snackBar.open(message, 'Dismiss');
  }

  setColor(value: any) {
    console.log(value);

    let reqPayload = {
      id: this.note.id,
      Color: value,
    };
    console.log(reqPayload);

    this.notesService.setColor(reqPayload).subscribe(
      (res: any) => {
        // console.log(res.data);
        this.showSnackbar(res.message);
        this.noteUpdated.emit(res);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
  binNote() {
    let reqPayload = {
      id: this.note.id,
    };
    console.log(this.note);
    this.notesService.TrashNoteService(reqPayload).subscribe(
      (res: any) => {
        console.log(res);
        console.log(res.data);
        this.showSnackbar(res.message);
        this.noteUpdated.emit(res);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  archiveNote() {
    let reqPayload = {
      id: this.note.id,
    };
    console.log(this.note);
    this.notesService.ArchiveNoteService(reqPayload).subscribe(
      (res: any) => {
        console.log(res);
        console.log(res.data);
        this.showSnackbar(res.message);
        this.noteUpdated.emit(res);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  deleteNote() {
    let reqPayload = {
      id: this.note.id,
    };
    console.log(this.note);
    this.notesService.DeleteNoteForeverService(reqPayload).subscribe(
      (res: any) => {
        console.log(res);
        console.log(res.data);
        this.showSnackbar(res.message);
        this.operation.emit(res);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
