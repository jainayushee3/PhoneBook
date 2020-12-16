import { Component, OnInit } from '@angular/core';
import { Entry } from '../Models/Entry';
import { EntryService } from '../Services/entry.service';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit {
  entries:Entry[];
  searchTerm:string="";
  copy:Entry[];
  constructor(private entryService:EntryService) {
    this.entries= entryService.getEntries();
    //console.log("NO");    
    this.copy=this.entries;    
   }

   deleteContact(name:string)
   {
    this.entryService.deleteContact(name);
    console.log("in component");
   }   

   search(): void {
    let term = this.searchTerm;
    this.entries = this.copy.filter(function(tag) {
        return tag.name.indexOf(term) >= 0;
    }); 
}
   

  ngOnInit(): void {

  }

}
