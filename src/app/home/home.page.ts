import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule, IonInput } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule ],
})
export class HomePage {


  resultado : number;
  color: String;
  opcao: String
  formulario : FormGroup;
  titulo : string;

  constructor(private fb: FormBuilder) {

    this.resultado = 0;
    this.color = "light"
    this.opcao = "Descubra o melhor preço para você!"
    this.titulo = "Álcool ou Gasolina?"

    this.formulario = fb.group({
      alcool: ['', [Validators.required, Validators.min(1)]], //[valor inicial, [validações]]
      gasolina: ['',[Validators.required, Validators.min(1)]]
    })
  }

  calcular() {
    let valores = this.formulario.value

    let calculo = +valores.alcool / +valores.gasolina;

    this.resultado = calculo

    console.log(this.resultado)

    if(this.resultado <= 0.7){
      this.color = "tertiary"
      this.opcao = "Você deveria usar Álcool!"
      this.titulo = "Álcool!"
    }

    if(this.resultado > 0.7){
      this.color = "warning"
      this.opcao = "Você deveria usar Gasolina!"
      this.titulo = "Gasolina!"

    }

  }

}
