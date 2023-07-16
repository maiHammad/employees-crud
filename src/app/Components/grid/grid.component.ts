import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { EmployeesService } from 'src/app/Service/employees.service';
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
employeesList:any;
currentEmpsListToView:any;
showDeletePoup:boolean=false;
empIdToDelete:any;
page: number = 1;
count: number = 0;
tableSize: number = 10;
tableSizes: any = [3, 6, 9, 12];
checkedAll:boolean=false;

  constructor(private employeeService:EmployeesService) { }
  @Output("openEditpoupParentFun") parentFun: EventEmitter<any> = new EventEmitter();
  @Output("toggleSpinner") toggleSpinner:EventEmitter<any>=new EventEmitter();

  ngOnInit(): void {
    this.toggleSpinner.emit(true);

    this.employeeService.GetAllEployees().subscribe((d: any) => {
      this.employeesList = d;
      this.toggleSpinner.emit(false);

    });

  }
toggleCheckAll(){
  this.checkedAll=!this.checkedAll;
}

  openPoupToEditEmp(empId:any){
    let currentEmpObj= this.employeesList.filter((emp:any) => emp.empId==empId);
    this.parentFun.emit({popupMode:'Edit',empId:empId,mode:2,currentEmp:currentEmpObj});
  
  }
  openDeletePoup(empId:any){
   this.showDeletePoup=true;
   this.empIdToDelete=empId;
  }
  closeDeletePoup(){
    this.showDeletePoup=false;
      }
  deleteEmployee(){
    this.toggleSpinner.emit(true);
    this.employeeService.DeleteEmployee(this.empIdToDelete).subscribe((d: any) => {
      this.toggleSpinner.emit(false);
      this.closeDeletePoup();
      this.employeesList=this.removeObjectWithId(this.employeesList,this.empIdToDelete);
    });

  }
  removeObjectWithId(arr:any, id:any) {
    return arr.filter((obj:any) => obj.empId !== id);
  }
  onTableDataChange(event: any) {
    this.page = event;
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
  }
  sortAsending(property:any){

    property==1?this.employeesList.sort((a:any,b:any) => a.empName > b.empName ? 1 : -1):this.employeesList.sort((a:any,b:any) => a.empAddress > b.empAddress ? 1 : -1);

  }
  sortdesending(property:any){

    property==1?this.employeesList.sort((a:any,b:any) => a.empName > b.empName ? -1 : 1):this.employeesList.sort((a:any,b:any) => a.empAddress > b.empAddress ? -1 : 1);

  }
}
