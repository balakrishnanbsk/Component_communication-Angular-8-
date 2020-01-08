import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-insertdata',
  templateUrl: './insertdata.component.html',
  styleUrls: ['./insertdata.component.css']
})
export class InsertdataComponent implements OnInit {
  type:string;
  name:string;
  content:string;
@Output() serverCreated=new EventEmitter<{type:string,name:string,content:string}>();
  constructor() { }

  ngOnInit() {
  }
  AddServer()
  {
    this.serverCreated.emit({
      type:this.type,
      name:this.name,
      content:this.content
    });

  }
}
