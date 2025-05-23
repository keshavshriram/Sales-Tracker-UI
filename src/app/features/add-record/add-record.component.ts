import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AddRecord } from 'src/app/shared/Models/AddRecord';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { CommonModule } from '@angular/common';

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
  record : AddRecord = new AddRecord(0, 0, 0, 0, 0, '', '', 0, '');
  form : FormGroup = new FormGroup({}) ; 
  constructor(private readonly fB : FormBuilder) { 
    this.form = this.fB.group({
      entryType : ['',Validators.required],
      item : ['',Validators.required],
      purchaseQty : [0,Validators.required],
      totalPrice : [0,Validators.required],
      unit : ['',Validators.required],
      sellQty : [],
      sellRate : [],
      carryForward : []
      

    })
  }

  ngOnInit(): void {
  }
    
  addRecord()
  {
    console.log(this.form);
  }
  

}
