import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  senha:string=''
  
   onButtonClick(){
     this.senha='teste 123';
     console.log(this.senha)
   }


   obterSenha(){return this.senha}
}
