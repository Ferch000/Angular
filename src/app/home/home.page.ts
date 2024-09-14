import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonText, IonInput, IonButton, IonSelect, IonSelectOption } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonText, IonInput, IonButton, IonSelect, IonSelectOption, FormsModule],
})
export class HomePage implements OnInit {

  cantidad: number = 0;
  monedaOrigen: string = 'MXN';
  monedaDestino: string = 'USD';
  resultado: string = '';

  private tasasDeCambio: { [key: string]: number } = {
    'MXN': 1,        // Base de MXN
    'USD': 0.056,    // 1 MXN = 0.056 USD
    'EUR': 0.048     // 1 MXN = 0.048 EUR
  };

  constructor() { }

  ngOnInit() {}

  convertir() {
    if (this.monedaOrigen === this.monedaDestino) {
      this.resultado = 'No se puede convertir a la misma moneda.';
      return;
    }

    const tasaOrigen = this.tasasDeCambio[this.monedaOrigen];
    const tasaDestino = this.tasasDeCambio[this.monedaDestino];

    if (!tasaOrigen || !tasaDestino) {
      this.resultado = 'Moneda no válida.';
      return;
    }

    
    const cantidadEnMXN = this.cantidad / tasaOrigen;
    const cantidadConvertida = cantidadEnMXN * tasaDestino;

    this.resultado = `${this.cantidad} ${this.monedaOrigen} son equivalentes a ${cantidadConvertida.toFixed(2)} ${this.monedaDestino}`;
  }
}


