import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-datatransfer',
  templateUrl: './datatransfer.component.html',
  styleUrls: ['./datatransfer.component.css']
})
export class DatatransferComponent implements OnInit {
@Input('srvElement') element:{type:string,name:string,content:string}
  constructor() { }

  ngOnInit() {
  }

}
