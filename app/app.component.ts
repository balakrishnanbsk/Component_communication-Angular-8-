import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements=[{type:'server',name:'Align',content:'Test'}]
  title = 'assignment4';
  onServerAdded(ServerAdded:{type:string,name:string,content:string})
  {
    this.serverElements.push({
      type:ServerAdded.type,
      name:ServerAdded.name,
      content:ServerAdded.content
    })
    console.log(this.serverElements);
  }
}
