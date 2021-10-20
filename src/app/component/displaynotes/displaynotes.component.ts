import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesService } from 'src/app/service/noteservice/noteservice.service';
@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss'],
})
export class DisplaynotesComponent implements OnInit {
  @Input() noteArray: any;

  @Output() noteUpdated = new EventEmitter<string>();
  constructor(
    public dialog: MatDialog,
    private snackbar: MatSnackBar,
    private noteservice: NotesService
  ) {}
  ngOnInit(): void {
    this.getAllNotes();
  }

  getAllNotes() {
    this.noteservice.getAllNotes().subscribe(
      (res: any) => {
        console.log(res);
        console.log(res.data);
        this.noteArray = res.data.reverse();
      },
      (err) => {
        console.log(err);
      }
    );
  }
  openDialog(note: any) {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '600px',
      data: note,
    });
    dialogRef.afterClosed().subscribe((res) => {
      console.log(`Dialog result: ${res}`);
      this.noteUpdated.emit(res);
    });
  }

  updatedData(value: any) {
    console.log(value);
    this.getAllNotes();
  }
}
