import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-form-management',
  templateUrl: './form-management.component.html',
  styleUrls: ['./form-management.component.scss'],
  standalone : true,
  imports : [MatTableModule,MatSortModule,MatFormFieldModule,MatIconModule,MatSelectModule,CommonModule]
})
export class FormManagementComponent implements OnInit{
  constructor()
  {

  }

  dataSource : MatTableDataSource<any> = new MatTableDataSource<any>();
  displayedColumns : string[] = ['itemName'] ;
  @ViewChild(MatSort) sort ?: MatSort;
  selectedField : string = 'Inventory';
  options : string[] = ['Inventory','Units'];

  dynamicColumns : {configKey : string , columns : string[]}[] = [
    { configKey : 'Inventory' , columns : ['itemName'] }
  ]

  ngOnInit(): void {
    // this.dataSource = new MatTableDataSource<any>(this.data);
    
  }

  announceSortChange(event : any)
  {

  }

  selectChange(event : any)
  {
    this.selectedField = event;
  }
}
