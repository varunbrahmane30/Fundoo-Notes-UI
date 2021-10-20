import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/service/noteservice/noteservice.service';
@Component({
  selector: 'app-getallarchive',
  templateUrl: './getallarchive.component.html',
  styleUrls: ['./getallarchive.component.scss'],
})
export class GetallarchiveComponent implements OnInit {
  archiveNoteList: any;
  isArchive: boolean = false;

  constructor(private noteservice: NotesService) {}

  ngOnInit() {
    this.GetAllArchivedNotes();
    this.isArchive = true;
  }

  GetAllArchivedNotes() {
    this.noteservice.GetAllArchivedNotes().subscribe(
      (res: any) => {
        console.log(res);
        console.log(res.data);
        this.archiveNoteList = res.data.reverse();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  updatedData(value: any) {
    console.log(value);
    this.GetAllArchivedNotes();
  }
}
