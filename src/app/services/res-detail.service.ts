import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstService } from './const.service';
@Injectable()
export class ResDetailService {

  constructor(private http: HttpClient,  private constService: ConstService) { }

  restDetail(restroData){
    return this.http.post(this.constService.baseUrl + '/restro',  restroData);
  }
  getRestDetail(){
    return this.http.get(this.constService.baseUrl + '/restro');
  }
  secDetail(sectionData){
    return this.http.post(this.constService.baseUrl + '/section',  sectionData);
  }

}
