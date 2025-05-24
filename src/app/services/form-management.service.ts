import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class FormManagementService {

  constructor(private readonly http : HttpClient , private readonly sharedService : SharedService) { }

  getFieldData(selectedField : string):Observable<any>
  {
    const url = this.sharedService.config.getConfigUrl("applicationApiUrl") + this.sharedService.config.getConfigApiEndPoints("getFormManagementFieldData") + '/' + selectedField ; 
    return this.http.get(url);
  }

  addFieldData(record : any):Observable<any>
  {
    const url = this.sharedService.config.getConfigUrl("applicationApiUrl") + this.sharedService.config.getConfigApiEndPoints("AddProduct") ; 
    return this.http.post(url , record);
  }

  updateRecord(record : any):Observable<any>
  {
    const url = this.sharedService.config.getConfigUrl("applicationApiUrl") + this.sharedService.config.getConfigApiEndPoints("UpdateProduct") ; 
    return this.http.post(url , record);
  }

  deleteRecord(record : any):Observable<any>
  {
    const url = this.sharedService.config.getConfigUrl("applicationApiUrl") + this.sharedService.config.getConfigApiEndPoints("RemoveProduct") ; 
    return this.http.post(url , record);
  }
}
