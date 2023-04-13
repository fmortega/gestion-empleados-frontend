import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import  swal  from 'sweetalert2';
//import Swal from 'sweetalert2/dist/sweetalert2.js';
import { EmpleadoService } from './../empleado.service';
import { Empleado } from './../empleado';
//import { FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-actualizar-empleado',
  templateUrl: './actualizar-empleado.component.html',
  styleUrls: ['./actualizar-empleado.component.css']
})
export class ActualizarEmpleadoComponent implements OnInit {
  id:number;
  empleado:Empleado = new Empleado();
  constructor(private empleadoService:EmpleadoService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.empleadoService.obtenerEmpleadoPorId(this.id).subscribe(dato =>{
      this.empleado = dato;
    },error => console.log(error));
  }

  irAlaListaDeEmpleados(){
    this.router.navigate(['/empleados']);
    swal.fire('Empleado actualizado',`El empleado ${this.empleado.nombre} ha sido actualizado con exito`,`success`);
  }

  irAlaListaDeEmpleados2(){
    this.router.navigate(['/empleados']);
    //swal.fire('Empleado actualizado',`El empleado ${this.empleado.nombre} ha sido actualizado con exito`,`success`);
  }

  onSubmit(): void{
    this.empleadoService.actualizarEmpleado(this.id,this.empleado).subscribe(dato => {
      this.irAlaListaDeEmpleados();
    },error => console.log(error));
  }

}
