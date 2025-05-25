import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaterialManagementService {

  constructor(private readonly http : HttpClient , private sharedService : SharedService) { }

  createOrder(orderData: any): Observable<any> {
    const url = this.sharedService.config.getConfigUrl("applicationApiUrl") + this.sharedService.config.getConfigApiEndPoints("CreateOrder")
    return this.http.post(url, orderData);
  }
}
