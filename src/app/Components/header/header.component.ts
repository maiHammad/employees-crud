import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output("openEditpoupParentFun") parentFun: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
openPoupToAddNewEmp(){
  this.parentFun.emit({popupMode:'Add',mode:1});

}

}
