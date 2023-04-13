import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent implements OnInit {
regresarListaEmpleados() {
this.router.navigate(['/empleados']);
}

  empleado: Empleado = new Empleado();
  constructor(private empleadoServicio: EmpleadoService, private router: Router) { }
  ngOnInit() {
    //console.log(this.empleado);
  }
  guardarEmpleado() {
    this.empleadoServicio.registrarEmpleado(this.empleado).subscribe(dato => {
      console.log(dato);
      this.irListaEmpleados();
      swal.fire('Empleado Guardado')
    }, error => swal.fire(
      `Error ${error}`

    ));
  }
  irListaEmpleados() {
    this.router.navigate(['/empleados']);
  }
  onSubmit() {
    console.log(this.empleado);
    this.guardarEmpleado();
  }
}
