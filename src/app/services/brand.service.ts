import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Brand } from '../models/brand';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

 apiUrl="https://localhost:44393/api/brands/getall"

  constructor(private httpClient : HttpClient) { }


  getBrands():Observable<ListResponseModel<Brand>>{

    return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrl);

  }


}
