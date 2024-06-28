import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalCancelarPedidoComponent } from './modal-cancelar-pedido/modal-cancelar-pedido.component';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent {

  constructor(
    private dialog: MatDialog
  ) {}

  onCancelarPedido(): void {
    const dialogRef = this.dialog.open(ModalCancelarPedidoComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
