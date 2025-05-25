import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AddRecord } from 'src/app/shared/Models/AddRecord';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { CommonModule } from '@angular/common';
import { MaterialManagementService } from 'src/app/services/material-management.service';
import { FormManagementService } from 'src/app/services/form-management.service';
import { Inventory } from 'src/app/shared/Models/Inventory';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.scss'],
  standalone: true,
  imports:[MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    CommonModule]
})
export class AddRecordComponent implements OnInit {
  record : AddRecord = new AddRecord('',undefined,'',0,'','',0,0);
  form : FormGroup = new FormGroup({}) ; 
  inventories : Inventory[] = [] ; 
  constructor(private readonly fB : FormBuilder , private readonly formManagementService : FormManagementService , 
      private readonly materialManagementService : MaterialManagementService) 
    { 
      this.form = this.fB.group({
      action : [],
      quantity : [],
      productId : [],
      totalAmount : [],
      unitOfMeasure : [],
      

    })
  }

  ngOnInit(): void {
    this.apiCallForData("Inventory");
  }
    
  apiCallForData(selectedField : string)
  {
    this.formManagementService.getFieldData(selectedField).subscribe({
      next : (response) => {
        this.inventories = response; // Update with actual data from the API
      },
      error : () => {

      },
      complete : () => {

      }
    })
    
  }

  addRecord()
  {
    if(this.form.valid)
    {
      this.record.action = this.form.get('action')?.value
      this.record.productId = this.form.get('productId')?.value;
      this.record.quantity = this.form.get('quantity')?.value;
      this.record.unitOfMeasure = this.form.get('uniunitOfMeasuret')?.value;
      this.record.totalAmount = this.form.get('totalAmount')?.value;
      delete this.record.createdAt;

      this.materialManagementService.createOrder(this.record).subscribe({
        next : (response) => {
          console.log("Record added successfully", response);
          this.form.reset();
        },
        error : (error) => {
          console.error("Error adding record", error);
        },
        complete : () => {
          console.log("Add record operation completed");
        }
      });
    }
  }

}
