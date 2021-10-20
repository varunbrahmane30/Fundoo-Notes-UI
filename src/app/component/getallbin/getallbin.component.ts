import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/service/noteservice/noteservice.service';

@Component({
  selector: 'app-getallbin',
  templateUrl: './getallbin.component.html',
  styleUrls: ['./getallbin.component.scss'],
})
export class GetallbinComponent implements OnInit {
  binNoteList: any;
  isBin: boolean = false;

  constructor(private noteservice: NotesService) {}

  ngOnInit() {
    this.GetAllBinNotes();
    this.isBin = true;
  }

  GetAllBinNotes() {
    this.noteservice.GetAllBinNotes().subscribe(
      (res: any) => {
        console.log(res);
        console.log(res.data);
        this.binNoteList = res.data.reverse();
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  updatedData(value: any) {
    console.log(value);
    this.GetAllBinNotes();
  }
}
