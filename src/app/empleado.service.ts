import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  // URl obtine el listado desde el backend de srping boot
  private URL='http://localhost:8080/api/v1/empleados';

  constructor(private httpclient:HttpClient) {
 }
 obtenerListaDeEmpleados():Observable<Empleado[]>{
  return this.httpclient.get<Empleado[]>(`${this.URL}`);
}
  //este metodo nos sirve para registrar un empleado
  registrarEmpleado(empleado:Empleado) : Observable<Object>{
    return this.httpclient.post(`${this.URL}`,empleado);
  }

  //este metodo sirve para actualizar el empleado
  actualizarEmpleado(id:number,empleado:Empleado) : Observable<Object>{
    return this.httpclient.put(`${this.URL}/${id}`,empleado);
  }

  //este metodo sirve para obtener o buscar un empleado
  obtenerEmpleadoPorId(id:number):Observable<Empleado>{
    return this.httpclient.get<Empleado>(`${this.URL}/${id}`);
  }

  eliminarEmpleado(id:number): Observable<Object>{
    return this.httpclient.delete(`${this.URL}/${id}`);
  }
}


