import {SelectionModel} from '@angular/cdk/collections';
import {Component, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from '../admin.service';
import { Employee } from '../admin.model';

declare var M: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
 
})
export class HomeComponent implements OnInit{

  totalRecords !: number | string;
  page:number=1;
  employees!: Employee[] ;
  displayedColumns: string[] = ['select', 'name', 'email', 'role','actions'];
  dataSource = new MatTableDataSource<Employee>(this.employees);
  selection= new SelectionModel<Employee>(true, []);;
  search: any;

  constructor(public service: AdminService){ }

  ngOnInit(){
    this.refreshEmployeeList();

  }
    
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  refreshEmployeeList(){
    this.service.getEmployeeList().subscribe((res)=> {
      this.employees = res as Employee[];
      this.totalRecords = this.employees.length;
      
    });
  }

  onEdit(emp : Employee){
    this.service.selectedEmployee = emp;
  }

  onDelete(_id: string){
    
      this.service.deleteEmployee(_id).subscribe((res)=>{
        this.refreshEmployeeList();
        M.toast({html: 'Deleted successfully', classes: 'rounded'});
      });
    
  }
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
      const numSelected = this.selection.selected.length;
      const numRows = this.dataSource.data.length;
      return numSelected === numRows;
    }
  
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
      if (this.isAllSelected()) {
        this.selection.clear();
        return;
      }
  
      this.selection.select(...this.dataSource.data);
    }
  
    /** The label for the checkbox on the passed row */
    checkboxLabel(row?: Employee): string {
      if (!row) {
        return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
      }
      return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.name + 1}`;
    }

    DeleteData() {  
     
      const numSelected = this.selection.selected;  
      if (numSelected.length > 0) {  
          if (confirm("Are you sure to delete items ")) {  
              this.service.deleteData(numSelected).subscribe(result => {  
                  alert(result);  
                  this.refreshEmployeeList();  
              })  
          }  
      } else {  
          alert("Select at least one row");  
      }  
  }  


  }
 
  

