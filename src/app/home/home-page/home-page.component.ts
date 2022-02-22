import { Component, OnDestroy, OnInit} from '@angular/core';
import {ConfirmationService, ConfirmEventType, MessageService} from 'primeng/api';
import { Subscription } from 'rxjs';
import { ApiAutosService } from '../../services/api-autos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styles: [
  ],
  providers: [ConfirmationService, MessageService]
})
export class HomePageComponent implements OnInit, OnDestroy {

    data:any;

    subs!:Subscription;

    constructor(private confirmationService: ConfirmationService, private messageService: MessageService, private apiAutosService:ApiAutosService, private router:Router) {}
    

    ngOnInit(): void {
        this.subs = this.apiAutosService.obtenerDatos('').subscribe(m => {
            this.data = m;
            console.log(m)
        })
        
    }


    confirm2(id:any) {
        this.confirmationService.confirm({
            message: '¿Estas seguro que lo quieres eliminar?',
            header: 'Confirmar Eliminado',
            icon: 'pi pi-info-circle',
            accept: () => {
                this.apiAutosService.eliminarDato(id).subscribe(n => {
                    this.apiAutosService.obtenerDatos('').subscribe(m => {
                        this.data = m;
                    })
                });
                this.messageService.add({severity:'info', summary:'Confirmed', detail:'Record deleted'});
            },
            reject: (type:any) => {
                switch(type) {
                    case ConfirmEventType.REJECT:
                        this.messageService.add({severity:'error', summary:'Rejected', detail:'You have rejected'});
                    break;
                    case ConfirmEventType.CANCEL:
                        this.messageService.add({severity:'warn', summary:'Cancelled', detail:'You have cancelled'});
                    break;
                }
            }
        });
    }

    editar(id:any){
        this.apiAutosService.edit(id);
        this.router.navigate(['/add/edit']);

    }

    ngOnDestroy(): void {
        this.subs.unsubscribe();
    }

}
