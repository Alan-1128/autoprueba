import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiAutosService } from 'src/app/services/api-autos.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
  ]
})
export class AddComponent {

  constructor(private fb:FormBuilder,private router:Router, private apiAutosService:ApiAutosService,) { }

  miFormulario:FormGroup = this.fb.group ({
    auto: ['', [Validators.required, Validators.minLength(1)]],
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
    
    this.apiAutosService.agregarDato(this.miFormulario.value).subscribe();
    setTimeout(() => {
      
      this.router.navigate(['/']);
    }, 2000);


    
    console.log(this.miFormulario.value)
    this.miFormulario.reset();
  }

}
