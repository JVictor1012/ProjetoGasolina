import { Component } from '@angular/core';
import { IonicModule, IonInput } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {


  resultado : number;
  color: String;
  opcao: String

  constructor() {

    this.resultado = 0;
    this.color = "light"
    this.opcao = "Descubra o melhor preço para você!"
  }

  calcular(alcool: IonInput, gasolina: IonInput) {
    let calculo: any;
    if(alcool.value != null && gasolina.value != null){
      calculo = +alcool.value / +gasolina.value;
    }




    this.resultado = calculo

    console.log(this.resultado)

    if(this.resultado <= 0.7){
      this.color = "tertiary"
      this.opcao = "Você deveria usar Álcool!"
    }

    if(this.resultado > 0.7){
      this.color = "warning"
      this.opcao = "Você deveria usar Gasolina!"

    }

  }

}
