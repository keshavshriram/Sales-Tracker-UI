import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  constructor() { }
  configJson : any = environment.configJson;
  configUrlJson : any = environment.configUrlJson;
  configApiEndPoints : any = environment.configApiEndPoints;

  getConfig(key : string): any {
    return this.configJson ? this.configJson[key] : null;
  }

  getConfigUrl(key: string): any {
    return this.configUrlJson ? this.configUrlJson[key] : null;
  }

  getConfigApiEndPoints(key: string): any {
    return this.configApiEndPoints ? this.configApiEndPoints[key] : null;
  }
  

  

}
