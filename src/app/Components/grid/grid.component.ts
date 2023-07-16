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

  constructor(private employeeService:EmployeesService) { }
  @Output("openEditpoupParentFun") parentFun: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    this.employeeService.GetAllEployees().subscribe((d: any) => {
      this.employeesList = d;
      this.currentEmpsListToView=this.employeesList
    });

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
    this.employeeService.DeleteEmployee(this.empIdToDelete).subscribe((d: any) => {
    });

  }
  onTableDataChange(event: any) {
    this.page = event;
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
  }
}
