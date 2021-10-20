import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';


import { AdminService } from '../admin.service';

declare var M: any;

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
  
})
export class EditComponent implements OnInit {

  constructor(public service: AdminService) {}

  ngOnInit() {}
  
 onSubmit(form: NgForm){
     if(form.value._id == ""){
    this.service.postEmployee(form.value).subscribe((res)=>{
        M.toast({html:'Saved successfully', classes:'rounded'});
    });

 }
 else{
    this.service.putEmployee(form.value).subscribe((res)=>{
        M.toast({html:'updated successfully', classes:'rounded'});
    });

 }
}
  

}