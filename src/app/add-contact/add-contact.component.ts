import { Component, OnInit } from '@angular/core';
import { Entry } from '../Models/Entry';
import { EntryService } from '../Services/entry.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  entry:Entry;

  constructor(private entryService:EntryService){
    this.entry=new Entry();
  }

  addContact(){
    this.entryService.addEntry(this.entry);
    this.entry=new Entry();
    console.log(this.entry);
  }







  ngOnInit(): void {
  }

}
