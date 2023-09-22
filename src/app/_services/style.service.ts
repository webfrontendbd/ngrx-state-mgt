import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Style } from '../_models/style';

@Injectable({
  providedIn: 'root'
})
export class StyleService {
  baseUrl = environment.apiUrl;
  constructor(private http:HttpClient) { }

getStyle(){
  return this.http.get<Style[]>(this.baseUrl+'/api/Styles')
}

}
