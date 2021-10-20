import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/service/noteservice/noteservice.service';
@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss'],
})
export class GetallnotesComponent implements OnInit {
  noteList = [];
  constructor(private notesService: NotesService) {}

  ngOnInit(): void {
    this.getAllNotes();
  }

  getAllNotes() {
    this.notesService.getAllNotes().subscribe(
      (res: any) => {
        console.log(res);
        console.log(res.data);
        this.noteList = res.data.reverse();
      },
      (err) => {
        console.log(err);
      }
    );
  }
  dataRecived(value: any) {
    console.log(value);
    this.getAllNotes();
  }

  updatedData(value: any) {
    console.log(value);
    this.getAllNotes();
  }
}
