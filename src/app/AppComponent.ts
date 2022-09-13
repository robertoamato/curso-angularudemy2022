import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
  <app-data-biding></app-data-biding>
  <router-outlet></router-outlet> 
  <app-diretivas-estruturais></app-diretivas-estruturais>
  <app-diretivas-atributos>
  <h1>Aulas de diretivas atributos</h1>
  <hr>
  <H5 style="font-family:arial; color: red; text-align:center; font-size:30px; " >EXEMPLO DE COMO UTILIZAR O PIPE</H5>

  </app-diretivas-atributos>  
  <app-newcomponent>
  
  `,
})
export class AppComponent implements OnInit {
  
 
  constructor() { }

  
 

  
  ngOnInit(): void { }


  


  


}
