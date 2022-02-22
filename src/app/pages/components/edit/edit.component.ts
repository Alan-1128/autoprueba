import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiAutosService } from '../../../services/api-autos.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styles: [
  ]
})
export class EditComponent implements OnInit, OnDestroy {

  constructor(private fb:FormBuilder, private router:Router, private apiAutosService:ApiAutosService, ) { }
  

  auto:any = ''; 
  subs!:Subscription;

  ngOnInit(): void {
    this.subs = this.apiAutosService.obtenerDatos(this.apiAutosService.num).subscribe((m:any) => {
      this.auto = m.auto;
      console.log(m)
    })
  }

  miFormulario:FormGroup = this.fb.group ({
    auto: [`${this.auto}`, [Validators.required, Validators.minLength(1)]],
    anio: ['', [Validators.required, Validators.minLength(3)]],
    marca: ['', [Validators.required, Validators.minLength(1)]],
    modelo: ['', [Validators.required, Validators.minLength(1)]],
  })

  validacion(campo:string){
    return this.miFormulario.controls[campo].errors 
    && this.miFormulario.controls[campo].touched
  }

  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }
    
    this.subs = this.apiAutosService.actualizarDato(this.apiAutosService.num, this.miFormulario.value).subscribe();

    setTimeout(() => {
      
      this.router.navigate(['/']);
    }, 2000);


    
    this.miFormulario.reset();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
