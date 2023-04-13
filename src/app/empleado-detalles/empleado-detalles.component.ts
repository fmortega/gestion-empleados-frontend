import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-empleado-detalles',
  templateUrl: './empleado-detalles.component.html',
  styleUrls: ['./empleado-detalles.component.css']
})
export class EmpleadoDetallesComponent implements OnInit {
  id: number;
  empleado: Empleado;

  constructor(private route: ActivatedRoute, private empleadoServicio: EmpleadoService, private router:Router) { }
  regresarListaEmpleados(){
  this.router.navigate(['/empleados']);
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.empleado = new Empleado;
    this.empleadoServicio.obtenerEmpleadoPorId(this.id).subscribe(dato => {
      this.empleado = dato;
      swal.fire(
        `Detalles del empleado ${this.empleado.nombre}`
      );
    });

  }

}
