import { Component, Directive,ViewChild } from '@angular/core';
import { AddEditEmpComponent } from './Components/add-edit-emp/add-edit-emp.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
@ViewChild(AddEditEmpComponent) child:any;

  title = 'employees-crud';
  openEditpoupParentFun(eventParam:any){
    this.child.openModal(eventParam);

  }

}
