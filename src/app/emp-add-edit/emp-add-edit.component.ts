import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { last } from 'rxjs';
import { EmployeeService } from '../services/employee.service';
import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent implements OnInit {
  empForm: FormGroup;

  education: string[] = ['Intermediate', 'BTech', 'MTech'];
  
  constructor(private _fb: FormBuilder, private _empService: EmployeeService,
     private _dialogRef: MatDialogRef<EmpAddEditComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.empForm = this._fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", Validators.required],
      dob: ["", Validators.required],
      education: ["", Validators.required],
      gender: [""],
    });
  }
  
  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.empForm.valid) {
      if (this.data) {
        // console.log(this.empForm.value);
        this._empService.updateEmployee(this.data.id, this.empForm.value).subscribe({
          next: (val: any) => {
            alert('EmployeeData updated Successfully..');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err)
          },
        });

      }
      else {

        // console.log(this.empForm.value);
        this._empService.addEmployee(this.empForm.value).subscribe({
          next: (val: any) => {
            alert('New Record Added Successfully..');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err)
          },
        });
      }
    }
  }
}