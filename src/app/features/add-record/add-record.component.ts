import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AddRecord } from 'src/app/shared/Models/AddRecord';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.scss'],
  standalone: true,
  imports:[MatFormFieldModule,MatSelectModule,MatInputModule,FormsModule, ReactiveFormsModule]
})
export class AddRecordComponent implements OnInit {
  record : AddRecord = new AddRecord(0, 0, 0, 0, 0, '', '', 0, '');
  form : FormGroup = new FormGroup({}) ; 
  constructor(private readonly fB : FormBuilder) { 
    this.form = this.fB.group({
      item_Name : ['',Validators.required],
      buy_qty : [0,Validators.required],
      buy_rate : [0,Validators.required],
      unit : ['',Validators.required],
      sell_qty : [],
      sell_rate : [],
      carry_forward : []
      

    })
  }

  ngOnInit(): void {
  }
    
  addRecord()
  {
    console.log(this.form);
  }
  

}
