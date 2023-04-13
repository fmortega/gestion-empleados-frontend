import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { ActualizarEmpleadoComponent } from '../actualizar-empleado/actualizar-empleado.component';
@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  empleados: Empleado[];
  constructor(private empleadoServicio: EmpleadoService, private router: Router) { }
  ngOnInit(): void {
    this.obtenerEmpleados();
  }
  totalEmpleados(){
    return this.empleados.length;
  }
  actualizarEmpleado(id: number) {
    this.router.navigate(['actualizar-empleado', id]);
  }
  private obtenerEmpleados() {
    this.empleadoServicio.obtenerListaDeEmpleados().subscribe(dato => {
      this.empleados = dato;

    });
  }

  eliminarEmpleado(id:number){

    swal.fire({
    title:'¿Realmente quiere eliminar ?',
    showCancelButton:true,
    confirmButtonColor:'#3085d6',
    cancelButtonColor:'#d33',
    confirmButtonText:'Eliminar',
    cancelButtonText:'Cancelar',
    buttonsStyling:true
    }).then((result:any) => {
      if(result.value){
        this.empleadoServicio.eliminarEmpleado(id).subscribe(dato => {
          console.log(dato);
          this.obtenerEmpleados();
          swal.fire(
            'Empleado eliminado',
            'El empleado ha sido eliminado con exito',
            'success'
          )
        })
      }
    })

  }

 /*
  eliminarEmpleado(id: number) {
    this, this.empleadoServicio.eliminarEmpleado(id).subscribe(dato => {
      console.log(dato);
      this.obtenerEmpleados();
    });
  }
  */


  verDetallesDelEmpleado(id: number) {
    this.router.navigate(['empleado-detalles', id]);
  }
  irAgregarEmpleado() {
    this.router.navigate(['registrar-empleado']);
  }
}
