import { Entry } from '../Models/Entry';

export class EntryService{
  entries:Entry[];
  entry:Entry;

  constructor(){
    this.entries=[new Entry("Bhavish Aggarwal", "9999999999"),
    new Entry("Richa Kar", "8888888888"),
    new Entry("Amit Jain", "7777777777"),
    new Entry("Ritesh Agarwal", "8888888888"),
    new Entry("Vijay Shekhar Sharma", "7777777777")];

    this.entry=new Entry();    
  }
  getEntries():Entry[]
  {
    return this.entries;
  }
deleteContact(name:string){
    for (let index = 0; index < this.entries.length; index++) {
       if(this.entries[index].name==name)
        {
            this.entries.splice(index,1);
            break;
        }            
    }
}

  addEntry(entry:Entry)
  {
    this.entries.push(entry);
  }

  // getFlower(id:number):any{
  //   for (let index = 0; index < this.flowers.length; index++) {
  //     if(this.flowers[index].id==id){
  //       return this.flowers[index];
  //     }
          
  //   }
  //   return null;
  // }
}