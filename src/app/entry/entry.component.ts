import { Component, OnInit } from '@angular/core';
import { Entry } from '../Models/Entry';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  entry:Entry;

  constructor() { 
    this.entry= new Entry();
  }

  ngOnInit(): void {
  }

}
