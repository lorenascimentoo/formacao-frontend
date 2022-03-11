import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent{

  @Output() aoTranferir = new EventEmitter<any>();


  valor:number;
  destino:number;

  transferir(){
    console.log('Solicitada nova transferencia');
    console.log("Valor: ",this.valor);
    console.log("Destino: ",this.destino);

    this.aoTranferir.emit({valor: this.valor, destino:this.destino});

    this.limparDados();
  }

  limparDados(){
    this.valor = 0;
    this.destino = 0;
  }
}
