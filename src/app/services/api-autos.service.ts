import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiAutosService {

  url = 'http://localhost:8080/api/crud/'
  
  constructor(private http:HttpClient) { }

  num:any;

  edit(id:any){
    this.num = id;
  }

  obtenerDatos(dato:any){
    return this.http.get(`${this.url}${dato}`)
  }

  agregarDato(body: any): Observable<any>{
    return this.http.post(this.url, body)
  }

  actualizarDato(dato:any, body: any): Observable<any>{
    return this.http.put(`${this.url}${this.num}`, body)
  }

  eliminarDato(dato:any): Observable<any>{
    return this.http.delete(`${this.url}${dato}`)
  }


}
