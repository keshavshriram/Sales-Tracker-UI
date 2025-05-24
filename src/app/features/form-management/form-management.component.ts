import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { FormManagementService } from 'src/app/services/form-management.service';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-form-management',
  templateUrl: './form-management.component.html',
  styleUrls: ['./form-management.component.scss'],
  standalone : true,
  imports : [MatTableModule,MatSortModule,MatFormFieldModule,MatIconModule,MatSelectModule,CommonModule,MatButtonModule,MatIconModule,MatMenuModule,FormsModule,MatInputModule]
})
export class FormManagementComponent implements OnInit{
  constructor(private formManagementService : FormManagementService , public cdr : ChangeDetectorRef)
  {

  }

  dataSource : MatTableDataSource<any> = new MatTableDataSource<any>();
  displayedColumns : string[] = ['action','productName', 'unitOfMeasure'] ;
  @ViewChild(MatSort) sort ?: MatSort;
  selectedField : string = 'Inventory';
  options : string[] = [];

  dynamicColumns : {configKey : string , columns : string[]}[] = [
    { configKey : 'Inventory' , columns : ['action','productName' , 'unitOfMeasure'] },
    { configKey : 'test' , columns : ['action','testItem'] }
  ]

  @ViewChildren('newInput') inputElements!: QueryList<ElementRef>;

  ngOnInit(): void {
    // this.dataSource = new MatTableDataSource<any>(this.data);
    this.options = this.dynamicColumns.map((item) => item.configKey);
    
    this.apiCallForData(this.selectedField );
  }

  announceSortChange(event : any)
  {

  }

  selectChange(event : any)
  {
    this.selectedField = event?.value;
    this.displayedColumns = this.dynamicColumns.find((item) => item.configKey === event?.value)?.columns || [];
    this.apiCallForData(this.selectedField );
  }

  apiCallForData(selectedField ?: string)
  {
    this.formManagementService.getFieldData(this.selectedField).subscribe({
      next : (response) => {
        this.dataSource.data = response; // Update with actual data from the API
      },
      error : () => {

      },
      complete : () => {

      }
    })
    
  }

  isAddingNew = false;
  isEditing = false;
  newRecord: any = {};

  editRecord(element: any) {
    this.isEditing = true;
    this.newRecord = { ...element , isAddingNew: true}; 
    
  }

  updateRecord() {
    this.isEditing = false;
    // Calling API to save the record
    this.formManagementService.updateRecord(this.newRecord).subscribe({
      next: (savedRecord) => {
        this.apiCallForData(this.selectedField );
        this.newRecord = {};
      },
      error: () => {
        
        this.dataSource.data.shift();
        this.dataSource._updateChangeSubscription();
      }
    });
  }

  deleteRecord(element: any) {
    // Calling API to delete the record
    this.formManagementService.deleteRecord(element).subscribe({
      next: () => {
        this.apiCallForData(this.selectedField );
      },
      error: () => {
        // Handle error if needed
      }
    });
  }

  addRecord() {
    this.isAddingNew = true;
    
    this.newRecord = {};
    this.displayedColumns
      .filter(col => col !== 'action')
      .forEach(col => this.newRecord[col] = '');
    
    this.newRecord.isAddingNew = true
    this.newRecord.fieldName = this.selectedField; 
    
    this.dataSource.data.unshift(this.newRecord);
    this.dataSource._updateChangeSubscription();
    this.cdr.detectChanges(); 
  }

  saveNewRecord() {
    this.isAddingNew = false;

    this.formManagementService.addFieldData(this.newRecord).subscribe({
      next: (savedRecord) => {
        
        this.dataSource.data[0] = savedRecord;
        this.dataSource._updateChangeSubscription();
        this.apiCallForData(this.selectedField );
      },
      error: () => {
        
        this.dataSource.data.shift();
        this.dataSource._updateChangeSubscription();
      }
    });
  }

  cancelAdd() {
    this.isAddingNew = false;
    this.newRecord = {};
    if (!this.isEditing) {
      this.dataSource.data.shift();
      this.dataSource._updateChangeSubscription();
    }
    
    
    this.isEditing = false;

  }

  isNewlyAdded(element : any) : boolean
  {
    return element.isAddingNew === true;
  }
  
  ngAfterViewInit() {
    this.inputElements.changes.subscribe(() => {
      if (this.inputElements.length > 0) {
        setTimeout(() => {
          this.inputElements.first.nativeElement.focus();
        });
      }
    });
  }

  onInputFocus(event: FocusEvent) {
    const input = event.target as HTMLInputElement;
    // Ensure cursor blinks by selecting the text
    input.select();
  }

  isElementMatching(element: any): boolean {
    return element.productId == this.newRecord.productId;
  }
}
