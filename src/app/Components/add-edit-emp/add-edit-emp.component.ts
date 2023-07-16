import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,AbstractControl } from '@angular/forms';
import { EmployeesService } from 'src/app/Service/employees.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.scss']
})
export class AddEditEmpComponent implements OnInit {
  showPoup:boolean=false;
  modalTitle:string='';
  currentMode:any;
  currentEmpId:any;
  savedSuccess:boolean=false;
  currentEmp:any={
    empName:"",
    empEmail:"",
    empAddress:"",
    empPhone:""
  }
  EmployeeForm=new FormGroup({
    name:new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    phone: new FormControl('')

  }); 
  constructor(private formBuilder:FormBuilder,private employeeService:EmployeesService) { }
  get formValidate(): { [key: string]: AbstractControl } {
    return this.EmployeeForm.controls;
  }
  ngOnInit(): void {
    this.EmployeeForm=this.formBuilder.group({
      name: new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.email,Validators.required]),
      address: new FormControl('',[Validators.required]),
      phone: new FormControl('',[Validators.required,Validators.pattern("^(10|12|11)[0-9]+$")])
    })
  }
openModal(eventParam:any){
  this.showPoup=true;
  this.modalTitle=eventParam.popupMode;
  this.currentMode=eventParam.mode;
  this.currentEmpId=eventParam.empId;
  if(eventParam.currentEmp!=null){
    this.currentEmp=eventParam.currentEmp[0];
  }
}
closeModal(){
  this.showPoup=false;

}
onEmployeeSubmit(){
  debugger
  let empObj={};
if(this.currentMode==1){
empObj={
  "empName": this.EmployeeForm.value.name,
  "empEmail": this.EmployeeForm.value.email,
  "empAddress": this.EmployeeForm.value.address,
  "empPhone": this.EmployeeForm.value.phone+""
}
this.employeeService.AddEmployee(JSON.stringify(empObj)).subscribe((d: any) => {
  debugger
});

}else if(this.currentMode==2){
  empObj={
    "empId": this.currentEmpId,
    "empName": this.EmployeeForm.value.name,
    "empEmail": this.EmployeeForm.value.email,
    "empAddress": this.EmployeeForm.value.address,
    "empPhone": this.EmployeeForm.value.phone+""
  }
  this.employeeService.EditEmployee(JSON.stringify(empObj)).subscribe((d: any) => {
    debugger
  });
}
}
}
