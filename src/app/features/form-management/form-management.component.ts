import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-form-management',
  templateUrl: './form-management.component.html',
  styleUrls: ['./form-management.component.scss'],
  standalone : true,
  imports : [MatTableModule,MatSortModule]
})
export class FormManagementComponent implements OnInit{
  constructor()
  {

  }

  dataSource : MatTableDataSource<any> = new MatTableDataSource<any>();
  displayedColumns : string[] = ['name','email','phone','address','action'];
  @ViewChild(MatSort) sort ?: MatSort;

  ngOnInit(): void {
    // this.dataSource = new MatTableDataSource<any>(this.data);
    
  }

  announceSortChange(event : any)
  {

  }
}
