import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  value = '';

  constructor(private _route: Router, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (!token) {
      this._route.navigateByUrl('/login');
    }
  }

  logout() {
    localStorage.clear();
    this.showSnackbar('logout Sucessful');
    this._route.navigateByUrl('/login');
  }

  getNotes() {
    this._route.navigateByUrl('/dashboard/note');
  }

  getArchiveNotes() {
    this._route.navigateByUrl('/dashboard/archive');
  }

  getAllBinNotes() {
    this._route.navigateByUrl('/dashboard/bin');
  }
  showSnackbar(message: string) {
    this.snackBar.open(message, 'Dismiss');
  }
}
